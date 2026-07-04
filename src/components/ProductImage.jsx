import React, { useState } from 'react';

// Category fallback SVGs
const LaptopIllustration = () => (
  <svg className="w-16 h-16 text-white opacity-90 drop-shadow-md animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="17" x2="22" y2="17" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
    {/* Floating details to make it look active */}
    <circle cx="18" cy="6" r="1" fill="white" className="animate-pulse" />
    <path d="M6 7h8M6 10h5" strokeDasharray="1 1" />
  </svg>
);

const ElectronicsIllustration = () => (
  <svg className="w-16 h-16 text-white opacity-90 drop-shadow-md animate-pulse-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Headphones illustration */}
    <path d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="13" width="3" height="6" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="19" y="13" width="3" height="6" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Smartphone or watch outline in background */}
    <path d="M9 19h6M12 16v3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
  </svg>
);

const HomeIllustration = () => (
  <svg className="w-16 h-16 text-white opacity-90 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Lamp illustration */}
    <path d="M12 3v13m0 0a4 4 0 100 8 4 4 0 000-8zm-6-6h12l-2-7H8l-2 7z" strokeLinecap="round" strokeLinejoin="round" />
    {/* Couch indicator details */}
    <path d="M3 14v5a1 1 0 001 1h2m12 0h2a1 1 0 001-1v-5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>
);

const DefaultIllustration = () => (
  <svg className="w-16 h-16 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProductImage({ src, alt, category }) {
  const [error, setError] = useState(false);

  // Determine gradients and illustrations based on product categories
  const getFallbackDesign = (cat) => {
    const formatted = cat ? cat.toLowerCase().trim() : '';
    
    if (formatted.includes('informatique') || formatted.includes('computer')) {
      return {
        gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Indigo to Violet
        illustration: <LaptopIllustration />
      };
    } else if (formatted.includes('électronique') || formatted.includes('electronic') || formatted.includes('phone')) {
      return {
        gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)', // Sky Blue to Royal Blue
        illustration: <ElectronicsIllustration />
      };
    } else if (formatted.includes('maison') || formatted.includes('home') || formatted.includes('furniture')) {
      return {
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Amber to Orange
        illustration: <HomeIllustration />
      };
    }
    
    return {
      gradient: 'linear-gradient(135deg, #94a3b8 0%, #475569 100%)', // Slate Slate
      illustration: <DefaultIllustration />
    };
  };

  const fallback = getFallbackDesign(category);

  if (error || !src) {
    return (
      <div 
        className="product-image-fallback" 
        style={{ background: fallback.gradient }}
      >
        <div className="illustration-wrapper">
          {fallback.illustration}
        </div>
        <span className="fallback-category-label">{category}</span>
      </div>
    );
  }

  return (
    <img 
      className="product-image" 
      src={src} 
      alt={alt} 
      onError={() => setError(true)} 
    />
  );
}
