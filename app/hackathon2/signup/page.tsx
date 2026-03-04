"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hackathon2SignupForm from "../../components/Hackathon2SignupForm";
import { Heading, Text, Badge, Card } from "../../components/ui";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 20,
      mass: 0.5,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      mass: 0.5,
      delay: 0.1,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 20,
      mass: 0.5,
      delay: 0.2,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 20,
      mass: 0.5,
      delay: 0.3,
    },
  },
};

export default function Hackathon2Signup() {
  return (
    <div className="max-h-full flex flex-col">
      <Header />
      <div className="font-sans flex-1 pt-4 px-4 pb-0 sm:pt-8 sm:px-8 md:p-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              <Heading level="h1" animate={false} className="leading-tight mb-2">
                <span className="text-[var(--theme-text-accent)] font-bold underline">Claude Builder Club</span> Hackathon
              </Heading>
            </motion.div>
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
              className="inline-block mb-4 cursor-default"
            >
              <Badge variant="primary" size="lg">SPRING 2026 HACKATHON</Badge>
            </motion.div>
            <motion.div
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
            >
              <Text size="xl" variant="secondary" className="max-w-2xl mx-auto leading-relaxed">
                <strong>Fri, Mar 20, 2026 4:00 PM – Sun, Mar 22, 2026 6:00 PM</strong>
              </Text>
              <Text size="lg" variant="secondary" className="max-w-2xl mx-auto leading-relaxed mt-2">
                PSH 150 / 151
              </Text>
            </motion.div>
          </div>

          {/* Registration Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <Card gradient animated={false} className="shadow-xl">
              <Hackathon2SignupForm />
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
