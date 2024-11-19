import React from 'react';
import Sponsor from '../sponsors/components/SponsorPage';

export default function Test() {
  return (
    <div className="Test">
      <Sponsor
        logoUrl="/images/SponsorLogos/HAAS (Icon).png"
        otherImageUrl="/images/SponsorLogos/UROP.jpg"
        description="We are proud to be sponsored by this amazing company."
        sponsorshipLink="https://github.com/vercel/next.js/tree/canary/packages/create-next-app"
      />
    </div>
  );
}