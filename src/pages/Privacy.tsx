import { useTheme } from '../components/ThemeContext';

export function Privacy() {
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
          Privacy Policy
        </h1>
        <div
          className="prose"
          style={{ color: theme.colors.onBackground }}
        >
          <p className="mb-4">Last updated: July 9, 2026</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Rou, developed by Kayoon Studio ("we," "our," "us"). Rou is designed to work entirely offline. Your privacy is important to us, and this Privacy Policy explains what information the app handles and — just as importantly — what it doesn't.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We do not collect any information. Rou has no user accounts, no sign-in, and no server — there is nothing for us to receive.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Content you create:</strong> Routines, steps, and run history you add in the app are stored only in a local database on your device. This content never leaves your device and is never transmitted to us or anyone else.
            </li>
            <li>
              <strong>Notifications:</strong> If you enable reminders, Rou schedules local notifications directly on your device using your operating system. No notification tokens, schedules, or content are sent to any server.
            </li>
          </ul>
          <p className="mb-4">
            Rou has no cloud backend and does not use analytics, crash reporting, advertising, or tracking of any kind.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            Since no information is sent to us, we have nothing to use. All processing (creating routines, running them, tracking history, scheduling reminders) happens locally on your device to power the app's own features.
          </p>
          <p className="mb-4">
            We do not share, sell, or otherwise disclose your data, because we never have access to it in the first place.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Retention & Deletion</h2>
          <p className="mb-4">
            There is no account and no server-side copy of your data, so there is nothing for us to retain or delete on our end. Your data stays on your device until you remove it yourself:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Open Rou and go to <strong>Settings → Delete Your Data</strong> to instantly erase all routines, steps, and history stored on your device.</li>
            <li>Uninstalling the app also removes all of its local data.</li>
          </ul>
          <p className="mb-4">
            If you have questions about this process, you can still reach us at <a href="mailto:support@kayoon.org">support@kayoon.org</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Security Measures</h2>
          <p className="mb-4">
            Because your data never leaves your device, it is protected by your device's own security — such as its passcode, encryption, and app sandboxing — rather than by any server-side security measures on our part.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
          <p className="mb-4">
            Rou does not integrate with any third-party service that collects or receives your data.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
          <p className="mb-4">
            Rou does not knowingly collect personal information from anyone, including children, because it does not collect personal information from any user.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Compliance with Privacy Laws</h2>
          <p className="mb-4">
            Because Rou does not collect, transmit, or process personal data, most obligations under laws such as the <strong>General Data Protection Regulation (GDPR)</strong> and the <strong>California Consumer Privacy Act (CCPA)</strong> do not apply — there is no personal data on our systems to access, export, or delete. If you have any concerns about your data rights, you may still contact us at <a href="mailto:support@kayoon.org">support@kayoon.org</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time, for example if the app adds a new feature that changes how data is handled. Any changes will be posted here with an updated "Last updated" date. Your continued use of the app after such updates constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, you can reach us at:
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <a href="mailto:support@kayoon.org">support@kayoon.org</a>
          </p>
        </div>
      </div>
    </div>
  );
}