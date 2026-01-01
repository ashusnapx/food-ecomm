export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M20 180 C 50 100, 100 50, 160 40 L 140 30 M 160 40 L 140 60'
        stroke='currentColor'
        strokeWidth='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M12 2L14.8 8.2L22 9.2L16 14.2L18 21.2L12 17.5L6 21.2L8 14.2L2 9.2L9.2 8.2L12 2Z' />
    </svg>
  );
}

export function Scribble({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 200 50' fill='none' className={className}>
      <path
        d='M5 25 Q 50 5, 100 25 T 195 25'
        stroke='currentColor'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </svg>
  );
}
