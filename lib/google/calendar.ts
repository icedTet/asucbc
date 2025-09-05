// Google Calendar API integration for ASU CBC Calendar System

import { 
  GoogleCalendarEventsResponse, 
  GoogleCalendarListResponse, 
  CalendarEvent, 
  CalendarMetadata 
} from '@/types/calendar';

// Environment variables for Google Calendar API
const GOOGLE_CALENDAR_API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'asu.edu_primary';
const GOOGLE_API_BASE_URL = 'https://www.googleapis.com/calendar/v3';

/**
 * Convert Google Calendar event to our CalendarEvent format
 */
function convertGoogleEventToCalendarEvent(googleEvent: any): CalendarEvent {
  return {
    id: googleEvent.id,
    summary: googleEvent.summary || 'No Title',
    description: googleEvent.description,
    start: {
      dateTime: googleEvent.start.dateTime,
      date: googleEvent.start.date,
      timeZone: googleEvent.start.timeZone,
    },
    end: {
      dateTime: googleEvent.end.dateTime,
      date: googleEvent.end.date,
      timeZone: googleEvent.end.timeZone,
    },
    location: googleEvent.location,
    status: googleEvent.status,
    htmlLink: googleEvent.htmlLink,
    created: googleEvent.created,
    updated: googleEvent.updated,
  };
}

/**
 * Convert Google Calendar metadata to our CalendarMetadata format
 */
function convertGoogleCalendarToMetadata(googleCalendar: any): CalendarMetadata {
  // Check if we have sufficient permissions to read event details
  const canReadEvents = ['reader', 'writer', 'owner'].includes(googleCalendar.accessRole);
  
  return {
    id: googleCalendar.id,
    summary: googleCalendar.summary,
    description: googleCalendar.description,
    location: googleCalendar.location,
    timeZone: googleCalendar.timeZone,
    canReadEvents,
  };
}

/**
 * Fetch events from Google Calendar API
 */
export async function fetchCalendarEvents(
  calendarId: string = GOOGLE_CALENDAR_ID,
  timeMin?: string,
  timeMax?: string,
  maxResults: number = 250
): Promise<CalendarEvent[]> {
  if (!GOOGLE_CALENDAR_API_KEY) {
    console.warn('Google Calendar API key not configured');
    return [];
  }

  try {
    // First check if we have permission to read events
    const metadata = await fetchCalendarMetadata(calendarId);
    if (metadata && !metadata.canReadEvents) {
      console.warn('Insufficient permissions to read calendar events');
      return [];
    }

    const params = new URLSearchParams({
      key: GOOGLE_CALENDAR_API_KEY,
      maxResults: maxResults.toString(),
      singleEvents: 'true',
      orderBy: 'startTime',
    });

    if (timeMin) {
      params.append('timeMin', timeMin);
    }
    if (timeMax) {
      params.append('timeMax', timeMax);
    }

    const url = `${GOOGLE_API_BASE_URL}/calendars/${encodeURIComponent(calendarId)}/events?${params.toString()}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
    }

    const data: GoogleCalendarEventsResponse = await response.json();
    
    return data.items?.map(convertGoogleEventToCalendarEvent) || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
}

/**
 * Fetch calendar metadata
 */
export async function fetchCalendarMetadata(
  calendarId: string = GOOGLE_CALENDAR_ID
): Promise<CalendarMetadata | null> {
  if (!GOOGLE_CALENDAR_API_KEY) {
    console.warn('Google Calendar API key not configured');
    return null;
  }

  try {
    const params = new URLSearchParams({
      key: GOOGLE_CALENDAR_API_KEY,
    });

    const url = `${GOOGLE_API_BASE_URL}/calendars/${encodeURIComponent(calendarId)}?${params.toString()}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return convertGoogleCalendarToMetadata(data);
  } catch (error) {
    console.error('Error fetching calendar metadata:', error);
    return null;
  }
}

/**
 * Fetch list of available calendars
 */
export async function fetchCalendarList(): Promise<CalendarMetadata[]> {
  if (!GOOGLE_CALENDAR_API_KEY) {
    console.warn('Google Calendar API key not configured');
    return [];
  }

  try {
    const params = new URLSearchParams({
      key: GOOGLE_CALENDAR_API_KEY,
    });

    const url = `${GOOGLE_API_BASE_URL}/users/me/calendarList?${params.toString()}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
    }

    const data: GoogleCalendarListResponse = await response.json();
    
    return data.items?.map(convertGoogleCalendarToMetadata) || [];
  } catch (error) {
    console.error('Error fetching calendar list:', error);
    return [];
  }
}

/**
 * Get events for a specific month
 */
export async function getEventsForMonth(
  year: number,
  month: number,
  calendarId: string = GOOGLE_CALENDAR_ID
): Promise<CalendarEvent[]> {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59);
  
  const timeMin = startDate.toISOString();
  const timeMax = endDate.toISOString();
  
  return fetchCalendarEvents(calendarId, timeMin, timeMax);
}

/**
 * Get events for today
 */
export async function getEventsForToday(
  calendarId: string = GOOGLE_CALENDAR_ID
): Promise<CalendarEvent[]> {
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
  
  const timeMin = startOfDay.toISOString();
  const timeMax = endOfDay.toISOString();
  
  return fetchCalendarEvents(calendarId, timeMin, timeMax);
}

/**
 * Generate calendar subscription URL
 */
export function getCalendarSubscriptionUrl(calendarId: string = GOOGLE_CALENDAR_ID): string {
  return `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America/Phoenix`;
}

/**
 * Generate "Add to Calendar" URL for a specific event
 */
export function getAddToCalendarUrl(event: CalendarEvent): string {
  const startDate = event.start.dateTime 
    ? new Date(event.start.dateTime)
    : new Date(event.start.date!);
  
  const endDate = event.end.dateTime 
    ? new Date(event.end.dateTime)
    : new Date(event.end.date!);
  
  const formatDateForGoogle = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.summary,
    dates: `${formatDateForGoogle(startDate)}/${formatDateForGoogle(endDate)}`,
    details: event.description || '',
    location: event.location || '',
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
