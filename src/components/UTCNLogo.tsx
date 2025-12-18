const UTCNLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 320 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield - exact replica */}
      <g>
        {/* Shield base shape */}
        <path
          d="M3 3 L3 32 C3 40 10 48 24 48 C38 48 45 40 45 32 L45 3 L3 3 Z"
          fill="#BE1E2D"
        />
        
        {/* White inner area */}
        <path
          d="M7 7 L7 31 C7 37 12 44 24 44 C36 44 41 37 41 31 L41 7 L7 7 Z"
          fill="#FFFFFF"
        />
        
        {/* Red vertical stripes */}
        <rect x="10" y="7" width="5" height="34" fill="#BE1E2D" />
        <rect x="18" y="7" width="5" height="36" fill="#BE1E2D" />
        <rect x="26" y="7" width="5" height="36" fill="#BE1E2D" />
        <rect x="34" y="7" width="5" height="34" fill="#BE1E2D" />
        
        {/* White T letter on top */}
        <rect x="11" y="14" width="26" height="5" fill="#FFFFFF" />
        <rect x="21" y="14" width="6" height="22" fill="#FFFFFF" />
      </g>
      
      {/* Text - UNIVERSITATEA TEHNICĂ */}
      <text
        x="55"
        y="22"
        fontFamily="'Roboto', Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#2b2b2b"
        letterSpacing="0.3"
      >
        UNIVERSITATEA TEHNICĂ
      </text>
      
      {/* Text - DIN CLUJ-NAPOCA */}
      <text
        x="55"
        y="38"
        fontFamily="'Roboto', Arial, sans-serif"
        fontWeight="400"
        fontSize="11"
        fill="#666666"
        letterSpacing="0.2"
      >
        DIN CLUJ-NAPOCA
      </text>
    </svg>
  );
};

export default UTCNLogo;
