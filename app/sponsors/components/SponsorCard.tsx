"use client";

import React, { useState } from "react";

interface SponsorCardProps {
  imageUrl: string;
  altText: string;
  backText: string; // Text to show on the back of the card
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  imageUrl,
  altText,
  backText,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "1000px",
        width: "200px",
        height: "200px",
      }}
    >
      <div
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            boxSizing: "border-box",
          }}
        >
          <img
            src={imageUrl}
            alt={altText}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Back Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            backgroundColor: "#f8f8f8",
            boxSizing: "border-box",
            transform: "rotateY(180deg)",
          }}
        >
          <p
            style={{
              color: "#333",
              fontSize: "16px",
              margin: "0",
              padding: "10px",
            }}
          >
            {backText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
