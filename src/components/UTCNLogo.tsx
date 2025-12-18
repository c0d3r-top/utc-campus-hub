const UTCNLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 280 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield with stripes - UTCN Official Style */}
      <g>
        {/* Shield outline */}
        <path
          d="M5 8 L5 42 Q5 58 28 65 Q51 58 51 42 L51 8 L5 8 Z"
          fill="#BE1E2D"
          stroke="#BE1E2D"
          strokeWidth="1"
        />
        
        {/* White stripes inside shield */}
        <path
          d="M10 13 L10 40 Q10 52 28 58 Q46 52 46 40 L46 13 L10 13 Z"
          fill="#FFFFFF"
        />
        
        {/* Red vertical stripes */}
        <rect x="14" y="13" width="4" height="45" fill="#BE1E2D" rx="0" />
        <rect x="22" y="13" width="4" height="47" fill="#BE1E2D" rx="0" />
        <rect x="30" y="13" width="4" height="47" fill="#BE1E2D" rx="0" />
        <rect x="38" y="13" width="4" height="45" fill="#BE1E2D" rx="0" />
        
        {/* T Letter overlay */}
        <rect x="16" y="20" width="24" height="6" fill="#BE1E2D" />
        <rect x="25" y="20" width="6" height="30" fill="#BE1E2D" />
      </g>
      
      {/* UNIVERSITATEA TEHNICĂ Text */}
      <text
        x="60"
        y="32"
        fontFamily="'Roboto', 'Arial', sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#1a1a2e"
        letterSpacing="0.5"
      >
        UNIVERSITATEA TEHNICĂ
      </text>
      
      {/* DIN CLUJ-NAPOCA Text */}
      <text
        x="60"
        y="50"
        fontFamily="'Roboto', 'Arial', sans-serif"
        fontWeight="400"
        fontSize="12"
        fill="#1a1a2e"
        letterSpacing="0.3"
      >
        DIN CLUJ-NAPOCA
      </text>
    </svg>
  );
};

export default UTCNLogo;
