import React from 'react';
import SponsorCard from './SponsorCard'; // Adjust the path as necessary

interface SponsorProps {
  logoUrl: string;
  otherImageUrl?: string;
  description: string;
  sponsorshipLink: string;
}

const Sponsor: React.FC<SponsorProps> = ({ logoUrl, otherImageUrl, description, sponsorshipLink }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <SponsorCard imageUrl={logoUrl} altText="Sponsor Logo" backText="Sample Text" />
        {otherImageUrl && <SponsorCard imageUrl={otherImageUrl} altText="Other Image" backText="Sample Text" />}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', maxWidth: '600px' }}>
        <p style={{ fontSize: '16px', color: '#333' }}>{description}</p>
        <a href={sponsorshipLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'inline-block' }}>
          View Sponsorship Package
        </a>
      </div>
    </div>
  );
};

export default Sponsor;