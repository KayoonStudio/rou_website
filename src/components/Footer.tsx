import { Link } from 'react-router';
import { SUPPORT_EMAIL } from '../links';

const LEGAL_LINKS = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/delete-data', label: 'Delete My Data' },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-variant">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-on-surface-variant">
        <p className="m-0">
          © 2026 Rou ·{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-on-surface-variant underline hover:text-primary"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-on-surface-variant underline hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
