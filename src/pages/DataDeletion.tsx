import { useTheme } from '../components/ThemeContext';

export function DataDeletion() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-3xl mx-auto py-12">
        <h1
          className="text-3xl font-bold mb-8"
          style={{ color: theme.colors.primary }}
        >
          Delete Your Data
        </h1>
        <div className="prose" style={{ color: theme.colors.onBackground }}>
          <p className="mb-6">
            Rou has no accounts and no server — all of your routines, steps,
            and history are stored only in a local database on your own
            device. We never receive a copy, so there is nothing for us to
            delete on our end. You're always in full control of your data,
            directly on your device:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              Open Rou and go to <strong>Settings → Delete Your Data</strong>{' '}
              to instantly and permanently erase all routines, steps, and run
              history stored on your device.
            </li>
            <li>
              Uninstalling the app also removes all of its local data from
              your device.
            </li>
          </ul>
          <p className="mb-4">
            If you have any questions about how Rou handles data, you can
            reach us at{' '}
            <a href="mailto:support@kayoon.org">support@kayoon.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
}