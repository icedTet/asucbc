"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Heading, Text } from "../components/ui";

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the target URL from query parameters
    // Supports both ?url= and ?to= parameters
    const targetUrl = searchParams.get("url") || searchParams.get("to");

    if (!targetUrl) {
      setError("No redirect URL provided. Please include a ?url= or ?to= parameter.");
      return;
    }

    // Validate URL format
    try {
      new URL(targetUrl);
    } catch {
      setError("Invalid URL format provided.");
      return;
    }

    // Small delay to ensure Umami tracking fires
    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <Heading level="h2" className="text-red-500">
            Redirect Error
          </Heading>
          <Text>{error}</Text>
          <Text className="text-sm opacity-70">
            Example: /redirect?url=https://example.com
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <Heading level="h2">Redirecting...</Heading>
        <Text>Please wait while we redirect you.</Text>
      </div>
    </div>
  );
}
