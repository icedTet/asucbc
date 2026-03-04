"use client";

import { showHackathonPromo } from "../theme-config";
import Link from "next/link";
import { useBatParticles } from "../hooks/useBatParticles";
import { Heading, Text, Button } from "./ui";
import Tilt from "react-parallax-tilt";

type HackathonPromoProps = {
  className?: string;
};

export default function HackathonPromo({
  className = "",
}: HackathonPromoProps) {
  const { containerRef, particlesRef, createParticles } = useBatParticles();

  if (!showHackathonPromo) return null;

  return (
    <div
      className={`hackathon-promo relative w-full rounded-2xl overflow-visible ${className}`}
      ref={containerRef}
    >
      {/* Card container styled like team cards, with theme glow and tilt on hover */}
      <Tilt
        className="hackathon-tilt w-full"
        glareEnable={true}
        glareMaxOpacity={0.15}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={500}
        scale={1}
        gyroscope={true}
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--theme-card-border)] bg-[var(--theme-card-bg)]/95 backdrop-blur-sm theme-glow min-h-[320px] sm:min-h-[380px] !transition-all duration-300">
          {/* Theme-aware background layer */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="theme-card-bg w-full h-full" />
          </div>

          {/* Content overlay */}
          <div className="relative p-4 sm:p-6">
            <Heading level="h3" animate={false} className="mb-2 leading-tight">
              Claude Builder Club Hackathon
            </Heading>

            <Text size="lg" className="leading-relaxed mb-4">
              Join us for 2+ days of innovation and creativity. Build the future with AI at ASU.
            </Text>

            <ul className="list-disc space-y-1.5 mb-4 text-base pl-6">
              <li>Build amazing projects with Claude AI</li>
              <li>Network with fellow developers</li>
              <li>Free food and resources</li>
              <li>Mentorship and community</li>
            </ul>

            <Link href="/hackathon2/signup" className="w-full inline-block" data-umami-event="Hackathon2 Register" data-umami-event-location="HackathonPromo">
              <Button variant="primary" size="md" fullWidth>
                Register Now — Limited Spots
              </Button>
            </Link>

            <Text size="xs" className="text-center mt-3">
              Mar 20–22, 2026 • PSH 150/151
            </Text>

            {/* Previous Hackathon Banner */}
            <div className="mt-4 pt-4 border-t border-[var(--theme-card-border)]">
              <Link
                href="/hackathon1"
                className="flex items-center justify-center gap-2 text-sm text-[var(--theme-text-dark)] hover:text-[var(--theme-text-accent)] transition-colors"
                data-umami-event="View Previous Hackathon"
                data-umami-event-location="HackathonPromo"
              >
                <span>📚</span>
                <span>View HackASU 2025 (Previous Event)</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Tilt>

      <style jsx>{`
        /* Optimized animations with will-change and reduced motion support */
        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
          will-change: transform;
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-scale {
            animation: none;
          }

          .cta-button {
            transition: none !important;
          }
        }

        /* Flat card background (no gradient) */
        .theme-card-bg {
          background: var(--theme-card-bg);
          background-size: auto;
          background-position: center;
          transition: background 300ms ease;
        }

        /* Accent glow akin to team visuals */
        .theme-glow {
          box-shadow: 0 0 0 1px var(--theme-card-border), 0 8px 30px rgba(0, 0, 0, 0.25),
            0 0 36px color-mix(in oklab, var(--theme-text-accent) 30%, transparent 70%),
            0 0 72px color-mix(in oklab, var(--theme-text-accent) 45%, transparent 55%);
        }

        /* Disable glow in light mode */
        :global(html[data-theme='light']) .theme-glow {
          box-shadow: none;
        }

        /* Keep background flat on hover */
        .hackathon-tilt:hover .theme-card-bg {
          background: var(--theme-card-bg);
          background-size: auto;
          background-position: center;
        }

        /* Disable gradient in light mode (flat card surface) */
        :global(html[data-theme='light']) .theme-card-bg {
          background: var(--theme-card-bg);
          background-size: auto;
          background-position: center;
        }
        :global(html[data-theme='light']) .hackathon-tilt:hover .theme-card-bg {
          background: var(--theme-card-bg);
          background-size: auto;
          background-position: center;
        }

        /* Optimized button hover */
        .cta-button {
          transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
          will-change: transform;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-button:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
