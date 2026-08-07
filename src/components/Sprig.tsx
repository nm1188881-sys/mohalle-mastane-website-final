type SprigProps = {
  className?: string;
  flip?: boolean;
};

/** A small botanical olive sprig — the recurring ornament of the identity. */
export function Sprig({ className = "", flip = false }: SprigProps) {
  return (
    <svg
      viewBox="0 0 96 24"
      fill="none"
      aria-hidden="true"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M4 12h88" opacity="0.35" />
      {[22, 40, 58, 76].map((x, i) => (
        <g key={x} opacity={0.85 - i * 0.14}>
          <path d={`M${x} 12c3.4-1.2 5.8-3.8 6.6-6.8-3.8 0-6.2 2.6-6.6 6.8Z`} />
          <path d={`M${x} 12c3.4 1.2 5.8 3.8 6.6 6.8-3.8 0-6.2-2.6-6.6-6.8Z`} />
        </g>
      ))}

    </svg>
  );
}
