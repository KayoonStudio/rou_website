import { useTheme } from "../components/ThemeContext";

export function Terms() {
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
          Terms of Service
        </h1>
        <div className="prose" style={{ color: theme.colors.onBackground }}>
          <p className="mb-4">Last updated: July 9, 2026</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By downloading or using Rou, you agree to be bound by these Terms
            of Service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. The Service</h2>
          <p className="mb-4">
            Rou is a routine management app that runs entirely on your
            device. There are no user accounts, no sign-in, and no server —
            all routines, steps, and history you create are stored locally on
            your device and are never transmitted anywhere.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            3. Your Content & Data
          </h2>
          <p className="mb-4">
            You are solely responsible for the content you create in Rou and
            for keeping your own backups if you need them. Because all data
            is stored only on your device, uninstalling the app, resetting
            your device, or using the in-app "Delete Your Data" option will
            permanently erase it, and we have no copy to restore it from.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the app for any illegal purpose</li>
            <li>Attempt to reverse engineer, decompile, or tamper with the app beyond what is permitted by applicable law</li>
            <li>Use the app in a way that violates the terms of the app store through which you downloaded it</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            5. Disclaimer of Warranty
          </h2>
          <p className="mb-4">
            Rou is provided "as is," without warranty of any kind. We do not
            guarantee that the app will be uninterrupted, error-free, or that
            reminders will always be delivered on time by your device's
            operating system.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Kayoon Studio is not
            liable for any indirect, incidental, or consequential damages
            arising from your use of the app, including loss of data stored
            locally on your device.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes</h2>
          <p className="mb-4">
            We may update these Terms from time to time. Continued use of the
            app after changes are posted constitutes acceptance of the
            revised Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact</h2>
          <p className="mb-4">
            For any questions about these Terms, please contact us at:{' '}
            <a href="mailto:support@kayoon.org">support@kayoon.org</a>
          </p>
        </div>
      </div>
    </div>
  );
}
