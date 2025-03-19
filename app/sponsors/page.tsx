"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { MetalShimmer } from "@/components/ui/metal-shimmer";

interface SponsorData {
  id: number;
  name: string;
  description: string;
  contribution: string;
  thumbnail: string;
  tier: "gold" | "silver" | "bronze";
}

// Define sponsor tiers
const sponsorTiers = {
  gold: ["HAAS.png", "SendCutSend.png"],
  silver: ["IndustrialPlasticSupply.png", "NHRL.png", "ZTLTech.png"],
  bronze: ["UROP.jpg"],
};

// Flatten and map all sponsors with their tiers
const sponsors: SponsorData[] = [
  ...sponsorTiers.gold.map((name, idx) => ({
    id: idx,
    name: name.replace(".png", "").replace(".jpg", ""),
    description: "Gold tier partner providing premium support and resources",
    contribution:
      "Major contributor to ZOTBotics' advanced manufacturing capabilities",
    thumbnail: `/images/SponsorLogos/${name}`,
    tier: "gold" as const,
  })),
  ...sponsorTiers.silver.map((name, idx) => ({
    id: idx + sponsorTiers.gold.length,
    name: name.replace(".png", "").replace(".jpg", ""),
    description: "Silver tier partner offering valuable industry expertise",
    contribution:
      "Supporting ZOTBotics with specialized equipment and technical guidance",
    thumbnail: `/images/SponsorLogos/${name}`,
    tier: "silver" as const,
  })),
  ...sponsorTiers.bronze.map((name, idx) => ({
    id: idx + sponsorTiers.gold.length + sponsorTiers.silver.length,
    name: name.replace(".png", "").replace(".jpg", ""),
    description: "Bronze tier partner contributing to our community",
    contribution:
      "Providing essential resources and support for ZOTBotics projects",
    thumbnail: `/images/SponsorLogos/${name}`,
    tier: "bronze" as const,
  })),
];

// Simplified positioning configuration with more scattered fixed positions
const tierConfig = {
  gold: {
    positions: [
      [-300, -180], // Left upper
      [280, -200], // Right upper
    ],
    baseWidth: 380,
    zIndex: 10,
    hoverScale: 1.1,
  },
  silver: {
    positions: [
      [-380, -50], // Far left
      [30, -140], // Center upper
      [350, -30], // Far right
    ],
    baseWidth: 340,
    zIndex: 5,
    hoverScale: 1.2,
  },
  bronze: {
    positions: [
      [-200, 100], // Left lower
      [220, 50], // Right middle
    ],
    baseWidth: 300,
    zIndex: 3,
    hoverScale: 1.3,
  },
};

const SponsorCard = ({
  sponsor,
  index,
  setSelectedSponsor,
}: {
  sponsor: SponsorData;
  index: number;
  setSelectedSponsor: (sponsor: SponsorData | null) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const config = tierConfig[sponsor.tier];
  const [isHovered, setIsHovered] = useState(false);
  const zIndex = useMotionValue(config.zIndex);

  // Get position for this card based on tier and index
  const positionIndex = index % config.positions.length;
  const position = config.positions[positionIndex];

  // Calculate card width based on tier (300-400px range)
  const cardWidth = config.baseWidth;

  // Handle mouse events
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    animate(zIndex, 100, { duration: 0.1 });
  }, [zIndex]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    animate(zIndex, config.zIndex, { duration: 0.1 });
  }, [config.zIndex, zIndex]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: position[0], y: position[1] }}
      animate={{
        opacity: 1,
        x: position[0],
        y: position[1],
        scale: isHovered ? config.hoverScale : 1,
        z: isHovered ? 50 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%", // Changed from 40% to 50% for better centering
        width: cardWidth,
        zIndex,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="origin-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setSelectedSponsor(sponsor)}
      whileHover={{
        y: position[1] - 20, // Move upward slightly on hover
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className={`from-slate-900/90 to-slate-800/90 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 backdrop-blur-sm`}
        style={{
          borderColor:
            sponsor.tier === "gold"
              ? "rgba(255, 215, 0, 0.5)"
              : sponsor.tier === "silver"
                ? "rgba(192, 192, 192, 0.5)"
                : "rgba(205, 127, 50, 0.5)",
          boxShadow: isHovered
            ? `0 20px 50px -10px ${
                sponsor.tier === "gold"
                  ? "rgba(255, 215, 0, 0.4)"
                  : sponsor.tier === "silver"
                    ? "rgba(192, 192, 192, 0.4)"
                    : "rgba(205, 127, 50, 0.4)"
              }, 0 10px 20px rgba(0,0,0,0.2)`
            : "none",
          transition: "box-shadow 0.3s ease-out",
        }}
      >
        <MetalShimmer
          tier={sponsor.tier}
          spread={60}
          disabled={!isHovered}
          proximity={64}
          inactiveZone={0}
          movementDuration={1}
          borderWidth={
            sponsor.tier === "gold" ? 2.5 : sponsor.tier === "silver" ? 2 : 1.5
          }
        />

        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg backdrop-blur-md">
          <Image
            src={sponsor.thumbnail}
            alt={sponsor.name}
            fill
            className="object-contain p-4 transition-all duration-500"
            style={{
              filter: isHovered
                ? "drop-shadow(0 0 12px rgba(255,255,255,0.4))"
                : "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
            }}
          />
        </div>

        <h3
          className={`text-center text-lg font-medium ${
            sponsor.tier === "gold"
              ? "text-yellow-300"
              : sponsor.tier === "silver"
                ? "text-gray-200"
                : "text-amber-600"
          }`}
        >
          {sponsor.name}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorData | null>(
    null,
  );

  return (
    <BackgroundLines className="gradient-background relative min-h-screen w-full px-4 py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="from-blue-300 bg-gradient-to-r via-indigo-200 to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Our Valued Partners
          </h1>
          <p className="text-gray-400 mt-4">
            Empowering innovation through collaboration
          </p>
        </div>

        {/* Main sponsor display area - adjusted positioning */}
        <div className="relative mt-10 h-[80vh] w-full">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={sponsor.id}
              sponsor={sponsor}
              index={index}
              setSelectedSponsor={setSelectedSponsor}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedSponsor && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedSponsor(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="from-blue-950/95 fixed inset-0 z-[1000] m-auto h-fit w-full max-w-2xl rounded-2xl border border-indigo-500/20 bg-gradient-to-br to-indigo-950/95 p-8 shadow-2xl backdrop-blur-md"
              >
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="text-gray-400 absolute right-4 top-4 transition-colors hover:text-white"
                >
                  ✕
                </button>
                <div className="flex flex-col items-center gap-6">
                  <div className="relative h-40 w-80 overflow-hidden rounded-xl bg-blue/10 p-4">
                    <Image
                      src={selectedSponsor.thumbnail}
                      alt={selectedSponsor.name}
                      fill
                      className="object-contain mix-blend-lighten"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="bg-gradient-to-r from-yellow via-primary to-orange bg-clip-text text-2xl font-bold text-transparent">
                      {selectedSponsor.name}
                    </h2>
                    <p className="mt-2 text-white/70">
                      {selectedSponsor.description}
                    </p>
                    <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-dark/30 to-blue-light/30 p-4">
                      <h3 className="mb-2 font-medium text-white/90">
                        Contribution to ZOTBotics
                      </h3>
                      <p className="text-white/70">
                        {selectedSponsor.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </BackgroundLines>
  );
}
