/** Decorative Chinese cloud motif (SVG vector) */
export function CloudMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 40c0-11 8-20 20-20 2-12 12-20 24-20s22 8 24 20c14 0 26 10 26 24H20c0-2 0-4 0-4z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M110 48c0-8 6-14 14-14 1-8 8-14 16-14s15 6 16 14c10 0 18 7 18 17H110z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

/** Traditional hanging lantern vector */
export function LanternMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="32" y1="0" x2="32" y2="10" stroke="currentColor" strokeWidth="2" />
      <rect x="22" y="10" width="20" height="6" rx="1" fill="currentColor" />
      <path
        d="M12 28c0-8 9-12 20-12s20 4 20 12v28c0 10-9 18-20 18S12 66 12 56V28z"
        fill="currentColor"
      />
      <ellipse cx="32" cy="42" rx="14" ry="6" fill="white" opacity="0.15" />
      <path
        d="M20 36h24M18 48h28M20 60h24"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <path d="M32 74v14M28 88h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="90" r="3" fill="currentColor" />
    </svg>
  )
}

/** Plum blossom / flower vector */
export function BlossomMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="40"
          cy="22"
          rx="10"
          ry="14"
          fill="currentColor"
          transform={`rotate(${deg} 40 40)`}
          opacity="0.85"
        />
      ))}
      <circle cx="40" cy="40" r="8" fill="var(--cny-gold, #c9a227)" />
      <circle cx="40" cy="40" r="3.5" fill="white" opacity="0.7" />
    </svg>
  )
}

/** Double happiness character as decorative mark */
export function DoubleHappiness({ className = '' }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      囍
    </span>
  )
}

/** Corner border ornament */
export function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 72V28c0-12 8-20 20-20h44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 8c4 8 4 16 0 24M72 52c-8-4-16-4-24 0"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle cx="28" cy="28" r="3" fill="currentColor" />
    </svg>
  )
}
