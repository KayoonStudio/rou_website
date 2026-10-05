import { Download } from 'lucide-react';
import { APP_STORE_URL, PLAY_STORE_URL } from '../links';

const base =
  'inline-flex min-h-13 items-center gap-2.5 rounded-[14px] px-6 text-base font-bold no-underline transition-colors';

export function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        aria-label="Download Rou on the App Store"
        className={`${base} bg-on-surface text-white hover:bg-indigo`}
      >
        <Download aria-hidden="true" size={20} />
        App Store
      </a>
      <a
        href={PLAY_STORE_URL}
        aria-label="Get Rou on Google Play"
        className={`${base} bg-primary-container text-on-primary-container hover:bg-inverse-primary`}
      >
        <Download aria-hidden="true" size={20} />
        Google Play
      </a>
    </div>
  );
}
