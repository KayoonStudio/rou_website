import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import rouIcon from '../assets/rou-icon.png';

const SECTIONS = [
  { id: 'how', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'privacy', label: 'Privacy' },
];

const linkClass =
  'text-on-surface-variant no-underline transition-colors hover:text-primary';

const ctaClass =
  'inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-primary px-5 text-white no-underline transition-colors hover:bg-primary-hover';

function SectionLink({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: ReactNode;
}) {
  const { pathname } = useLocation();
  // On the home page a plain anchor keeps native in-page jumps, focus included.
  if (pathname === '/') {
    return (
      <a href={`#${id}`} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={`/#${id}`} className={className}>
      {children}
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="border-b border-surface-variant bg-surface">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          to="/"
          aria-label="Rou home"
          className="flex items-center gap-2.5 text-on-surface no-underline"
        >
          <img src={rouIcon} alt="" className="size-9 rounded-[10px]" />
          <span className="text-[22px] font-extrabold tracking-tight">Rou</span>
        </Link>
        <div className="flex items-center gap-7 text-[15px] font-semibold">
          {/* Section jumps only fit beside the logo from md up; on phones the header is logo + CTA. */}
          <ul className="hidden items-center gap-7 md:flex">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <SectionLink id={id} className={linkClass}>
                  {label}
                </SectionLink>
              </li>
            ))}
          </ul>
          <SectionLink id="download" className={ctaClass}>
            Get the app
          </SectionLink>
        </div>
      </nav>
    </header>
  );
}
