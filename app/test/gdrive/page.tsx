"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const GoogleDriveMedia = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("/api/drive?name=image1");
        if (!response.ok) throw new Error("Failed to fetch image");

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageData(imageUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load image");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();

    // Cleanup function
    return () => {
      if (imageData) URL.revokeObjectURL(imageData);
    };
  }, []);

  return (
    <div className="h-screen bg-blue-dark py-28">
      <h1 className="text-slate-100 mb-8 text-center text-4xl font-bold">
        Google Drive Media
      </h1>

      {loading && <div className="text-slate-100 text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {imageData && (
        <div className="flex justify-center">
          <Image
            src={imageData}
            alt="Google Drive Image"
            width={640}
            height={480}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default GoogleDriveMedia;
