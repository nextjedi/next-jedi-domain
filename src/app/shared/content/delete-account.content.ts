// Account & data deletion pages — Google Play requires a public web URL that explains how to
// delete an account without the app. Served at /<slug>/delete-account.

export interface DeleteAccountBullet {
  label?: string;
  text: string;
}

export interface DeleteAccountSection {
  heading: string;
  paragraphs: string[];
  steps?: string[];
  /** Paragraphs shown after the numbered steps. */
  afterSteps?: string[];
  bullets?: DeleteAccountBullet[];
}

export interface AppDeleteAccountContent {
  lastUpdated: string;
  /** Name shown in the heading — the store listing name, which may differ from the app name. */
  listingName: string;
  intro: string;
  supportEmail: string;
  emailSubject: string;
  sections: DeleteAccountSection[];
}

export const DELETE_ACCOUNT_CONTENT: Record<string, AppDeleteAccountContent> = {
  'mindful-journal': {
    lastUpdated: 'September 21, 2026',
    listingName: 'Mindful Journal (Mindful Living: Daily Journal)',
    intro: 'This page explains how to delete your Mindful Journal account — listed on Google Play as "Mindful Living: Daily Journal" and published by NextJedi — and what happens to your data when you do. You can delete it in the app, or by email if you no longer have the app.',
    supportEmail: 'support@nextjedi.com',
    emailSubject: 'Delete my Mindful Journal account',
    sections: [
      {
        heading: 'Option 1: Delete in the app (immediate)',
        paragraphs: [],
        steps: [
          'Open Mindful Journal and sign in to the account you want to delete.',
          'Open Settings.',
          'Scroll to the Delete account section at the bottom and tap Delete account.',
          'Confirm by tapping Delete account in the dialog.',
        ],
        afterSteps: [
          'Your account and its data are deleted from our servers right away. You are signed out and the app clears the data stored on that device. This cannot be undone.',
        ],
      },
      {
        heading: 'Option 2: Ask us by email (no app needed)',
        paragraphs: [
          'Send an email from the address you use to sign in to Mindful Journal (for Sign in with Apple with "Hide My Email", the Apple relay address), with the subject "Delete my Mindful Journal account". We use the sending address to find and verify your account; if we cannot match it, we will reply to ask for details.',
          'We delete the account and its data within 30 days and reply to confirm when it is done.',
        ],
      },
      {
        heading: 'What gets deleted',
        paragraphs: ['Everything tied to your account on our servers:'],
        bullets: [
          { label: 'Your account', text: '— email address, user ID and sign-in details.' },
          { label: 'Your whole journal', text: '— all entries (sports and workout sessions, mood and check-ins, notes, intentions, reflections, body measurements, meals), learnings, and the people and groups you created.' },
          { label: 'Data on your device', text: '— cleared by the app when you delete in-app. If you delete by email, uninstall the app or sign out to clear the copy on your phone.' },
        ],
      },
      {
        heading: 'What is not deleted, or is kept for a limited time',
        paragraphs: [],
        bullets: [
          { label: 'Your subscription', text: '— deleting your account does not cancel it. Cancel it yourself first: on Android in Google Play → Payments & subscriptions → Subscriptions; on iPhone in Settings → your name → Subscriptions.' },
          { label: 'Purchase records', text: '— Google Play, the App Store and our subscription provider RevenueCat keep transaction records under their own policies, including for tax and accounting law.' },
          { label: 'Crash reports', text: '— technical crash reports (Sentry) are deleted automatically within 90 days.' },
          { label: 'Push notification records', text: '— our notification provider (OneSignal) keeps delivery records under its own retention policy. Your device stops receiving notifications once the account is deleted.' },
        ],
      },
      {
        heading: 'Delete some data without deleting your account',
        paragraphs: [
          'If you want specific data removed while keeping your account, email support@nextjedi.com from your account\'s email address and tell us what to delete. We will do it within 30 days.',
        ],
      },
      {
        heading: 'Questions',
        paragraphs: [
          'Email support@nextjedi.com. For more on how we handle your data, read our privacy policy at https://www.nextjedi.com/mindful-journal/privacy.',
        ],
      },
    ],
  },
};
