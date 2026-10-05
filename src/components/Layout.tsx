import { Outlet, ScrollRestoration } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-surface font-sans text-on-surface">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-primary px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
