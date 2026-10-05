import { useRef } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Bell,
  Check,
  GripVertical,
  History,
  LayoutGrid,
  ListChecks,
  Moon,
} from 'lucide-react';
import { RoutineDemo, type RoutineDemoHandle } from '../components/RoutineDemo';
import { StoreButtons } from '../components/StoreButtons';
import { ROUTINES } from '../data/routines';
import rouIcon from '../assets/rou-icon.png';

const STEPS = [
  {
    title: 'Build it once',
    body: 'Name your routine and list the steps. Drag them into order. Or start from one of six ready-made routines.',
  },
  {
    title: 'Run it step by step',
    body: 'Tap Start and check steps off as you go. Rou shows what’s left and keeps the clock running.',
  },
  {
    title: 'Look back anytime',
    body: 'Every finished run lands in your history with its date, duration, and steps completed.',
  },
];

const FEATURES = [
  {
    Icon: ListChecks,
    title: 'Focused run mode',
    body: 'One screen, your steps, a progress bar, and a timer. Nothing else competing for attention.',
  },
  {
    Icon: GripVertical,
    title: 'Drag to reorder',
    body: 'Routines change. Move steps around or edit them whenever you like.',
  },
  {
    Icon: Bell,
    title: 'Reminders that fit your week',
    body: 'Pick the days and times. Rou nudges you, and today’s schedule is one tap away.',
  },
  {
    Icon: History,
    title: 'Run history',
    body: 'See when you ran each routine and how long it took.',
  },
  {
    Icon: LayoutGrid,
    title: 'Ready-made routines',
    body: 'Travel prep, gym bag, pet care and more — use them as-is or make them yours.',
  },
  {
    Icon: Moon,
    title: 'Light, dark, and Armenian',
    body: 'Follows your phone’s theme. Available in English and Armenian.',
  },
];

const PRIVACY_POINTS = [
  'No sign-up, no email',
  'Works without internet',
  'Delete everything, anytime',
];

const sectionTitle =
  'm-0 text-[clamp(32px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.03em]';

export function Home() {
  const demoRef = useRef<RoutineDemoHandle>(null);

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-16 px-6 pt-18 pb-22"
      >
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
          <p className="m-0 self-start rounded-full bg-primary-container px-3.5 py-2 text-sm font-semibold text-on-primary-container">
            Free · Works offline · No account
          </p>
          <h1
            id="hero-title"
            className="m-0 text-[clamp(42px,6vw,68px)] leading-[1.04] font-extrabold tracking-[-0.035em]"
          >
            Your routines,
            <br />
            <span className="text-primary">one step at a time.</span>
          </h1>
          <p className="m-0 max-w-[520px] text-[19px] leading-relaxed text-on-surface-variant">
            Write a routine down once. Rou walks you through it step by step,
            times every run, and keeps the history — so the things you do every
            day stop living in your head.
          </p>
          <div id="download" className="scroll-mt-6 pt-2">
            <StoreButtons />
          </div>
        </div>

        <RoutineDemo ref={demoRef} />
      </section>

      <section
        id="how"
        aria-labelledby="how-title"
        className="scroll-mt-6 bg-surface-1 px-6 py-24"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <div className="flex max-w-[640px] flex-col gap-3">
            <p className="m-0 text-sm font-bold tracking-[0.08em] text-primary uppercase">
              How it works
            </p>
            <h2 id="how-title" className={sectionTitle}>
              Three steps. Then it’s muscle memory.
            </h2>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 p-0">
            {STEPS.map(({ title, body }, i) => (
              <li
                key={title}
                className="flex flex-col gap-3.5 rounded-[28px] bg-surface p-8"
              >
                <span aria-hidden="true" className="text-[15px] font-extrabold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="m-0 text-[22px] font-bold">{title}</h3>
                <p className="m-0 text-base leading-relaxed text-on-surface-variant">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-title"
        className="mx-auto flex max-w-[1200px] scroll-mt-6 flex-col gap-12 px-6 py-24"
      >
        <h2 id="features-title" className={`${sectionTitle} max-w-[640px]`}>
          Small app. Everything a routine needs.
        </h2>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-8 gap-y-10 p-0">
          {FEATURES.map(({ Icon, title, body }) => (
            <li key={title} className="flex gap-[18px]">
              <span
                aria-hidden="true"
                className="flex size-12 flex-none items-center justify-center rounded-2xl bg-primary-container text-primary"
              >
                <Icon size={22} />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="m-0 text-lg font-bold">{title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-on-surface-variant">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="starters-title"
        className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 pb-24"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="starters-title"
            className="m-0 text-[clamp(28px,3.4vw,36px)] font-extrabold tracking-[-0.03em]"
          >
            Start with one of ours
          </h2>
          <p className="m-0 text-base text-on-surface-variant">
            Six routines come with the app. Load one into the demo above.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 p-0">
          {ROUTINES.map((routine) => (
            <li
              key={routine.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-surface-1"
            >
              <img
                src={routine.image}
                alt=""
                className="aspect-[13/7] w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3.5 px-5 pt-[18px] pb-5">
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-[17px] font-bold">{routine.name}</h3>
                  <p className="m-0 text-sm text-on-surface-variant">
                    {routine.steps.length} steps
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Try it: ${routine.name}`}
                  onClick={() => demoRef.current?.load(routine.id)}
                  className="mt-auto inline-flex min-h-11 cursor-pointer items-center gap-2 self-start rounded-full border-0 bg-primary-container px-[18px] text-sm font-bold text-on-primary-container transition-colors hover:bg-inverse-primary"
                >
                  Try it
                  <ArrowRight aria-hidden="true" size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="privacy"
        aria-labelledby="privacy-title"
        className="scroll-mt-6 px-6 pb-24"
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 rounded-[40px] bg-indigo p-[clamp(40px,6vw,72px)] text-white">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <h2
              id="privacy-title"
              className="m-0 text-[clamp(30px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.03em]"
            >
              Your routines never leave your phone.
            </h2>
            <p className="m-0 text-[17px] leading-relaxed text-primary-container">
              Rou has no accounts and no servers. Everything is stored on your
              device, and you can erase all of it from Settings in one tap.
            </p>
            <Link
              to="/privacy"
              className="self-start text-base font-bold text-inverse-primary underline hover:text-primary-container"
            >
              Read the privacy policy
            </Link>
          </div>
          <ul className="m-0 flex min-w-0 flex-[1_1_320px] list-none flex-col gap-3.5 p-0">
            {PRIVACY_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3.5 rounded-[20px] bg-indigo-soft px-5 py-[18px] text-[17px] font-semibold"
              >
                <Check
                  aria-hidden="true"
                  size={20}
                  strokeWidth={2.4}
                  className="flex-none text-inverse-primary"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="cta-title"
        className="flex flex-col items-center gap-5 px-6 pt-6 pb-28 text-center"
      >
        <img src={rouIcon} alt="" className="size-22 rounded-3xl" />
        <h2
          id="cta-title"
          className="m-0 max-w-[720px] text-[clamp(32px,4.5vw,52px)] leading-[1.08] font-extrabold tracking-[-0.035em]"
        >
          Slow and steady.
          <br />
          Same steps, every time.
        </h2>
        <p className="m-0 text-lg text-on-surface-variant">
          Free on iPhone and Android.
        </p>
        <StoreButtons className="justify-center pt-2" />
      </section>
    </>
  );
}
