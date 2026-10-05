import { useEffect, useImperativeHandle, useRef, useState, type Ref } from 'react';
import { DateTime, Duration } from 'luxon';
import { Check, History, ListChecks } from 'lucide-react';
import { ROUTINES, type Routine } from '../data/routines';

export interface RoutineDemoHandle {
  /** Loads a routine into the demo, scrolls it into view and focuses its first step. */
  load: (routineId: string) => void;
}

interface Run {
  key: number;
  routine: Routine;
  completedAt: string;
  duration: string;
}

type Tab = 'run' | 'history';

const EMPTY_STEPS = [false, false, false, false];

function formatClock(seconds: number) {
  return Duration.fromObject({ seconds }).toFormat('m:ss');
}

function formatDuration(seconds: number) {
  return Duration.fromObject({ seconds }).toFormat(
    seconds >= 60 ? "m'm' s's'" : "s's'",
  );
}

export function RoutineDemo({ ref }: { ref?: Ref<RoutineDemoHandle> }) {
  const [routine, setRoutine] = useState(ROUTINES[0]);
  // Opens mid-run so the first thing visitors see is the app in use.
  const [done, setDone] = useState([true, true, false, false]);
  const [elapsed, setElapsed] = useState(36);
  const [running, setRunning] = useState(true);
  const [tab, setTab] = useState<Tab>('run');
  const [runs, setRuns] = useState<Run[]>([]);
  const [message, setMessage] = useState('');

  const containerRef = useRef<HTMLElement>(null);
  const firstStepRef = useRef<HTMLButtonElement>(null);
  const focusFirstStep = useRef(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (focusFirstStep.current && tab === 'run') {
      focusFirstStep.current = false;
      firstStepRef.current?.focus({ preventScroll: true });
    }
  });

  const reset = () => {
    setDone(EMPTY_STEPS);
    setElapsed(0);
    setRunning(false);
  };

  useImperativeHandle(ref, () => ({
    load: (routineId) => {
      const next = ROUTINES.find((r) => r.id === routineId);
      if (!next) return;
      setRoutine(next);
      reset();
      setTab('run');
      setMessage(`${next.name} is loaded. Tap a step to start.`);
      focusFirstStep.current = true;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      containerRef.current?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'center',
      });
    },
  }));

  const remaining = done.filter((d) => !d).length;

  const toggleStep = (index: number) => {
    setDone((prev) => prev.map((d, i) => (i === index ? !d : d)));
    setRunning(true);
    setMessage('');
  };

  const finish = () => {
    if (remaining > 0) {
      setMessage(`Check off every step to finish — ${remaining} to go.`);
      return;
    }
    const duration = formatDuration(elapsed);
    setRuns((prev) => [
      {
        key: Date.now(),
        routine,
        completedAt: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE),
        duration,
      },
      ...prev,
    ]);
    reset();
    setMessage(`Saved to History: ${routine.name} in ${duration}.`);
  };

  const cancel = () => {
    reset();
    setMessage('Run canceled. Nothing was saved.');
  };

  const showTab = (next: Tab) => {
    setTab(next);
    setMessage('');
  };

  return (
    <div className="relative flex min-w-0 flex-[1_1_360px] flex-col items-center gap-4">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[440px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container"
      />
      <p className="relative m-0 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-3.5 py-1.5 text-sm font-semibold text-on-surface-variant">
        <ListChecks aria-hidden="true" size={16} className="text-primary" />
        Try it — this is the real flow
      </p>

      <section
        ref={containerRef}
        aria-label="Interactive demo of the Rou app"
        className="relative w-[320px] max-w-full rounded-[46px] bg-on-surface p-3 shadow-[0_30px_60px_-20px_rgba(33,0,93,0.35)]"
      >
        <div className="flex h-[600px] flex-col overflow-hidden rounded-[36px] bg-surface">
          {tab === 'run' ? (
            <div className="flex min-h-0 flex-1 flex-col gap-3 px-[18px] pt-[26px] pb-3.5">
              <div className="flex items-center gap-3">
                <img
                  src={routine.image}
                  alt=""
                  className="size-10 rounded-xl object-cover"
                />
                <h3 className="m-0 text-lg font-bold tracking-tight">
                  {routine.name}
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {routine.steps.map((label, i) => (
                  <li key={label}>
                    <button
                      ref={i === 0 ? firstStepRef : undefined}
                      type="button"
                      aria-pressed={done[i]}
                      onClick={() => toggleStep(i)}
                      className="flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-[14px] border-0 bg-surface-2 px-3 py-2.5 text-left text-[13px] leading-snug text-on-surface"
                    >
                      <span
                        className={
                          done[i]
                            ? 'flex-1 text-muted line-through'
                            : 'flex-1 font-semibold'
                        }
                      >
                        {label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={
                          done[i]
                            ? 'flex size-5 flex-none items-center justify-center rounded-md bg-primary'
                            : 'size-5 flex-none rounded-md border-2 border-primary bg-surface'
                        }
                      >
                        {done[i] && (
                          <Check size={12} strokeWidth={3.5} className="text-white" />
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2.5 rounded-[18px] bg-surface-2 p-3.5">
                <div className="flex items-center justify-between text-[13px] font-semibold text-on-surface-variant">
                  <span>
                    {remaining === 0
                      ? 'All steps done'
                      : `${remaining} ${remaining === 1 ? 'step' : 'steps'} remaining`}
                  </span>
                  <span className="rounded-full bg-primary-container px-2.5 py-1 text-on-primary-container tabular-nums">
                    <span className="sr-only">Elapsed </span>
                    {formatClock(elapsed)}
                  </span>
                </div>
                <div aria-hidden="true" className="grid grid-cols-4 gap-1">
                  {done.map((d, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-colors ${d ? 'bg-primary' : 'bg-surface-variant'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={cancel}
                    className="min-h-11 flex-1 cursor-pointer rounded-full border border-outline bg-transparent text-sm font-bold text-primary"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    aria-disabled={remaining > 0}
                    onClick={finish}
                    className="min-h-11 flex-1 cursor-pointer rounded-full border-0 bg-primary text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-[18px] pt-[26px] pb-3.5">
              <h3 className="m-0 text-lg font-bold tracking-tight">
                Routine Runs
              </h3>
              {runs.length === 0 ? (
                <p className="m-0 rounded-2xl bg-surface-2 px-4 py-5 text-[13px] leading-normal text-on-surface-variant">
                  No runs yet. Finish a routine and it shows up here.
                </p>
              ) : (
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {runs.map((run) => (
                    <li
                      key={run.key}
                      className="flex flex-col gap-2.5 rounded-2xl bg-surface-2 p-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={run.routine.image}
                          alt=""
                          className="size-8 rounded-[10px] object-cover"
                        />
                        <div>
                          <p className="m-0 text-[13px] font-bold">
                            {run.routine.name}
                          </p>
                          <p className="m-0 mt-0.5 text-[11px] text-on-surface-variant">
                            Today · {run.completedAt}
                          </p>
                        </div>
                      </div>
                      <dl className="m-0 grid grid-cols-2 gap-1.5 text-center">
                        <div className="rounded-[10px] bg-surface py-1.5">
                          <dt className="text-[10px] text-on-surface-variant">
                            Duration
                          </dt>
                          <dd className="m-0 text-[13px] font-bold tabular-nums">
                            {run.duration}
                          </dd>
                        </div>
                        <div className="rounded-[10px] bg-surface py-1.5">
                          <dt className="text-[10px] text-on-surface-variant">
                            Steps
                          </dt>
                          <dd className="m-0 text-[13px] font-bold">
                            {run.routine.steps.length}
                          </dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <nav
            aria-label="Demo tabs"
            className="grid flex-none grid-cols-2 border-t border-surface-variant bg-surface-1 px-2.5 pt-1.5 pb-3"
          >
            {(
              [
                { id: 'run', label: 'Run', Icon: ListChecks },
                {
                  id: 'history',
                  label: runs.length > 0 ? `History (${runs.length})` : 'History',
                  Icon: History,
                },
              ] as const
            ).map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                aria-pressed={tab === id}
                onClick={() => showTab(id)}
                className="flex min-h-13 cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent text-xs font-semibold text-on-surface"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-[26px] w-[52px] items-center justify-center rounded-full ${tab === id ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
                >
                  <Icon size={18} />
                </span>
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      <output
        aria-live="polite"
        className="relative min-h-6 text-center text-[15px] font-semibold text-on-primary-container"
      >
        {message}
      </output>
    </div>
  );
}
