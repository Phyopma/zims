"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "@/components/ui/background-lines";

interface SponsorData {
  id: number;
  name: string;
  description: string;
  contribution: string;
  thumbnail: string;
}

const sponsors: SponsorData[] = [
  "HAAS.png",
  "IndustrialPlasticSupply.png",
  "NHRL.png",
  "SendCutSend.png",
  "UROP.jpg",
  "ZTLTech.png",
].map((name, idx) => ({
  id: idx,
  name: name.replace(".png", "").replace(".jpg", ""),
  description: "Leading industry partner providing cutting-edge solutions",
  contribution:
    "Supporting ZOTBotics with advanced manufacturing equipment and expertise",
  thumbnail: `/images/SponsorLogos/${name}`,
}));

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorData | null>(
    null,
  );

  return (
    <BackgroundLines className="relative min-h-screen w-full bg-custom-gradient-radial p-8 md:p-16">
      <div className="relative mx-auto max-w-7xl">
        <h1 className="text-white mb-12 text-center text-4xl font-bold md:text-5xl">
          Our Valued Partners
        </h1>

        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="bg-white/10 relative cursor-pointer overflow-hidden rounded-lg p-4 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                }}
                onClick={() => setSelectedSponsor(sponsor)}
              >
                <div className="aspect-square">
                  <Image
                    src={sponsor.thumbnail}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4 transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="ring-white/0 group-hover:ring-white/50 absolute inset-0 rounded-lg ring-2 transition-all" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSponsor && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/60 fixed inset-0 z-50 backdrop-blur-sm"
                onClick={() => setSelectedSponsor(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                className="bg-white fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl p-6 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="text-gray-500 hover:text-gray-700 absolute right-4 top-4"
                >
                  ✕
                </button>
                <div className="flex flex-col items-center gap-6">
                  <div className="relative h-40 w-80">
                    <Image
                      src={selectedSponsor.thumbnail}
                      alt={selectedSponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold">
                      {selectedSponsor.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {selectedSponsor.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="mb-2 font-semibold">
                        Contribution to ZOTBotics
                      </h3>
                      <p className="text-gray-600">
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
