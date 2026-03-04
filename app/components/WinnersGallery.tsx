"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, Heading, Text } from "./ui";
import ReactMarkdown from "react-markdown";

export interface Winner {
  id: string;
  placement: string; // e.g., "1st Place", "Best Use of EtherFi"
  teamName: string;
  projectName: string;
  logo?: string; // Path to logo image
  tagline: string;
  description: string; // Markdown content
  members?: string[];
  links?: {
    github?: string;
    demo?: string;
    devpost?: string;
  };
  accentColor?: string; // Optional custom accent color
}

interface WinnerCardProps {
  winner: Winner;
  delay?: number;
}

function WinnerCard({ winner, delay = 0 }: WinnerCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay,
                type: "spring",
                stiffness: 60,
                damping: 15,
              },
            }
          : { opacity: 0, y: 30 }
      }
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
      }}
      className="h-full"
    >
      <Card
        gradient
        animated={false}
        className="h-full flex flex-col relative overflow-hidden"
      >
        {/* Placement Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div
            className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
            style={{
              background: winner.accentColor || "var(--theme-text-accent)",
            }}
          >
            {winner.placement}
          </div>
        </div>

        {/* Logo Section */}
        {winner.logo && (
          <div className="flex items-center justify-center mb-4 h-32 relative">
            <img
              src={winner.logo}
              alt={`${winner.projectName} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )}

        {/* Project Info */}
        <div className="mb-3">
          <h3 className="text-2xl font-bold mb-1 text-[var(--theme-text-primary)]">
            {winner.projectName}
          </h3>
          <p className="text-sm font-semibold text-[var(--theme-text-accent)] mb-2">
            {winner.teamName}
          </p>
          <p className="text-base italic text-[var(--theme-text-dark)] mb-3">
            "{winner.tagline}"
          </p>
        </div>

        {/* Description - Markdown Support */}
        <div className="flex-1 prose prose-sm max-w-none mb-4">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="text-[var(--theme-text-dark)] leading-relaxed mb-2">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="text-[var(--theme-text-primary)] font-semibold">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="text-[var(--theme-text-accent)]">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-2 space-y-1">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-[var(--theme-text-dark)] text-sm">
                  {children}
                </li>
              ),
            }}
          >
            {winner.description}
          </ReactMarkdown>
        </div>

        {/* Team Members */}
        {winner.members && winner.members.length > 0 && (
          <div className="mb-4 pt-3 border-t border-[var(--theme-card-border)]">
            <p className="text-xs font-semibold text-[var(--theme-text-dark)] mb-2">
              TEAM
            </p>
            <div className="flex flex-wrap gap-2">
              {winner.members.map((member, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-[var(--theme-gradient-accent)] rounded-md text-xs text-[var(--theme-text-primary)]"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {winner.links && Object.keys(winner.links).length > 0 && (
          <div className="flex gap-3 pt-3 border-t border-[var(--theme-card-border)]">
            {winner.links.github && (
              <a
                href={winner.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[var(--theme-text-accent)] hover:text-[var(--theme-button-hover-bg)] transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {winner.links.demo && (
              <a
                href={winner.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[var(--theme-text-accent)] hover:text-[var(--theme-button-hover-bg)] transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                Demo
              </a>
            )}
            {winner.links.devpost && (
              <a
                href={winner.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[var(--theme-text-accent)} hover:text-[var(--theme-button-hover-bg)] transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
                </svg>
                Devpost
              </a>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

interface WinnersGalleryProps {
  winners: Winner[];
  title?: string;
  description?: string;
}

export default function WinnersGallery({
  winners,
  title = "Winners Gallery",
  description = "Celebrating the amazing projects from our hackathon",
}: WinnersGalleryProps) {
  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading level="h2" className="text-4xl sm:text-5xl font-bold mb-4">
            {title.split(" ").map((word, idx) =>
              idx === title.split(" ").length - 1 ? (
                <span key={idx} className="text-[var(--theme-text-accent)]">
                  {word}
                </span>
              ) : (
                <span key={idx}>{word} </span>
              )
            )}
          </Heading>
          <Text size="lg" variant="secondary">
            {description}
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {winners.map((winner, idx) => (
            <WinnerCard key={winner.id} winner={winner} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
