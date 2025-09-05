// Calendar utility functions for ASU CBC Calendar System

import { CalendarDay, CalendarMonth, CalendarEvent } from '@/types/calendar';

/**
 * Get the number of days in a month
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
 */
export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

/**
 * Check if a date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

/**
 * Format date for display
 */
export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = {}): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  return date.toLocaleDateString('en-US', defaultOptions);
}

/**
 * Format time for display
 */
export function formatTime(date: Date, options: Intl.DateTimeFormatOptions = {}): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    ...options,
  };
  return date.toLocaleTimeString('en-US', defaultOptions);
}

/**
 * Get month name
 */
export function getMonthName(month: number): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month];
}

/**
 * Get abbreviated month name
 */
export function getMonthAbbreviation(month: number): string {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return months[month];
}

/**
 * Get day names
 */
export function getDayNames(abbreviated: boolean = true): string[] {
  if (abbreviated) {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}

/**
 * Create a calendar month with all days
 */
export function createCalendarMonth(
  year: number,
  month: number,
  selectedDate: Date | null = null,
  events: CalendarEvent[] = []
): CalendarMonth {
  const firstDayOfWeek = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const today = new Date();
  
  const days: CalendarDay[] = [];
  
  // Add days from previous month
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
  
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(prevYear, prevMonth, daysInPrevMonth - i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      events: [],
      hasEvents: false,
    });
  }
  
  // Add days from current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayEvents = getEventsForDate(date, events);
    
    days.push({
      date,
      isCurrentMonth: true,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      events: dayEvents,
      hasEvents: dayEvents.length > 0,
    });
  }
  
  // Add days from next month to fill the grid
  const totalCells = 42; // 6 weeks × 7 days
  const remainingCells = totalCells - days.length;
  
  for (let day = 1; day <= remainingCells; day++) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const date = new Date(nextYear, nextMonth, day);
    
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      events: [],
      hasEvents: false,
    });
  }
  
  return {
    year,
    month,
    days,
    firstDayOfWeek,
    daysInMonth,
  };
}

/**
 * Get events for a specific date
 */
export function getEventsForDate(date: Date, events: CalendarEvent[]): CalendarEvent[] {
  return events.filter(event => {
    const eventDate = event.start.dateTime 
      ? new Date(event.start.dateTime)
      : new Date(event.start.date!);
    
    return isSameDay(eventDate, date);
  });
}

/**
 * Truncate event summary for display
 */
export function truncateEventSummary(summary: string, maxLength: number = 20): string {
  if (summary.length <= maxLength) {
    return summary;
  }
  return summary.substring(0, maxLength - 3) + '...';
}

/**
 * Get the next month
 */
export function getNextMonth(year: number, month: number): { year: number; month: number } {
  if (month === 11) {
    return { year: year + 1, month: 0 };
  }
  return { year, month: month + 1 };
}

/**
 * Get the previous month
 */
export function getPreviousMonth(year: number, month: number): { year: number; month: number } {
  if (month === 0) {
    return { year: year - 1, month: 11 };
  }
  return { year, month: month - 1 };
}

/**
 * Navigate to a specific month
 */
export function navigateToMonth(
  currentYear: number,
  currentMonth: number,
  direction: 'next' | 'previous' | 'today'
): { year: number; month: number } {
  switch (direction) {
    case 'next':
      return getNextMonth(currentYear, currentMonth);
    case 'previous':
      return getPreviousMonth(currentYear, currentMonth);
    case 'today':
      const today = new Date();
      return { year: today.getFullYear(), month: today.getMonth() };
    default:
      return { year: currentYear, month: currentMonth };
  }
}

/**
 * Generate Google Calendar subscription URL
 */
export function generateCalendarSubscriptionUrl(calendarId: string): string {
  // This would typically be a public calendar URL
  // For now, we'll use a placeholder that can be configured
  return `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America/Phoenix`;
}

/**
 * Generate "Add to Calendar" URL for Google Calendar
 */
export function generateAddToCalendarUrl(event: CalendarEvent): string {
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
