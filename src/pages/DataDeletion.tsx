export function DataDeletion() {
  return (
    <div className="px-6">
      <div className="mx-auto max-w-3xl py-16">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-primary">
          Delete Your Data
        </h1>
        <div className="leading-relaxed text-on-surface [&_a]:text-primary [&_a]:underline">
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