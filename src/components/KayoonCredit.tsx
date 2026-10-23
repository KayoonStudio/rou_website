/** "Made by Kayoon" in the footer, with the studio's mark at text size. */
export function KayoonCredit() {
  return (
    <>
      Made by{' '}
      <a
        href="https://kayoon.org/"
        className="inline-flex items-baseline gap-1 text-on-surface-variant underline hover:text-primary"
      >
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 32 32"
          className="relative top-[2px] self-center"
        >
          <defs>
            <clipPath id="kayoon-mark">
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <g clipPath="url(#kayoon-mark)">
            <rect width="32" height="32" fill="#F2B266" />
            <path d="M0 16 C6 14 10 20 15 19 C20 18 25 12 32 13 V32 H0Z" fill="#B5532F" />
            <path
              d="M14 18.5 C19 20 19 23 15.5 25.5 C12.5 27.5 13 30 14 32 L21 32 C19.5 30 19.5 28.5 22 26.5 C25.5 23.5 23 19.5 17.5 18.2 Z"
              fill="#F7E3C6"
            />
          </g>
        </svg>
        Kayoon
      </a>
    </>
  );
}
