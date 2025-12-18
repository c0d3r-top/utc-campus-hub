const UTCNLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* UTCN Shield/Crest simplified */}
      <g>
        {/* Shield base */}
        <path
          d="M10 5 L10 35 Q10 50 25 55 Q40 50 40 35 L40 5 Z"
          fill="hsl(var(--primary))"
        />
        {/* Inner shield */}
        <path
          d="M14 9 L14 34 Q14 46 25 51 Q36 46 36 34 L36 9 Z"
          fill="hsl(var(--primary-foreground))"
        />
        {/* T symbol inside */}
        <path
          d="M18 15 L32 15 L32 19 L27 19 L27 40 L23 40 L23 19 L18 19 Z"
          fill="hsl(var(--primary))"
        />
      </g>
      
      {/* UTCN Text */}
      <text
        x="50"
        y="38"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="hsl(var(--foreground))"
      >
        UTCN
      </text>
      
      {/* Subtitle */}
      <text
        x="50"
        y="52"
        fontFamily="Open Sans, system-ui, sans-serif"
        fontWeight="400"
        fontSize="9"
        fill="hsl(var(--muted-foreground))"
      >
        UNIVERSITATEA TEHNICĂ CLUJ-NAPOCA
      </text>
    </svg>
  );
};

export default UTCNLogo;
