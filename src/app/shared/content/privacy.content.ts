export interface PrivacyBullet {
  label?: string;
  text: string;
}

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
  bullets?: PrivacyBullet[];
}

export interface AppPrivacyContent {
  lastUpdated: string;
  intro: string;
  sections: PrivacySection[];
}

export const PRIVACY_CONTENT: Record<string, AppPrivacyContent> = {

  'flowtimer': {
    lastUpdated: 'April 5, 2026',
    intro: 'Flow Timer ("the app") is built by Next Jedi. This page explains what data the app handles, where it stays, and what we never do with it.',
    sections: [
      {
        heading: '1. No Data Leaves Your Device',
        paragraphs: [
          'Flow Timer does not connect to the internet. There are no servers, no accounts, and no sign-up. Everything the app stores — your session history, timer preferences, and usage counts — lives exclusively in your device\'s local storage and is never transmitted anywhere.',
        ],
      },
      {
        heading: '2. What the App Stores Locally',
        paragraphs: ['The app writes two types of data to your device:'],
        bullets: [
          { label: 'Session history', text: '— a local database record of completed focus sessions (start time, duration, end time). Used to power the dashboard charts and heatmap.' },
          { label: 'Preferences', text: '— your chosen timer duration and the current timer state (running, paused, idle). Stored via Android DataStore / iOS UserDefaults.' },
        ],
      },
      {
        heading: '3. No Analytics or Advertising',
        paragraphs: [
          'Flow Timer contains no analytics SDKs, no advertising networks, no crash-reporting services, and no tracking pixels. We do not know how many people use the app, how long sessions last, or anything else about usage patterns.',
        ],
      },
      {
        heading: '4. No Third-Party Services',
        paragraphs: [
          'The app does not integrate any third-party libraries that collect or transmit data. The only system-level integrations are Android\'s foreground service API (to keep the timer running in the background) and the Wear OS Tiles API (to display the countdown on your watch). Neither integration sends data off-device.',
        ],
      },
      {
        heading: '5. Permissions',
        paragraphs: ['Flow Timer requests the following permissions:'],
        bullets: [
          { label: 'POST_NOTIFICATIONS', text: '(Android 13+) — to show an ongoing notification while a focus session is running and to alert you when the session ends.' },
          { label: 'FOREGROUND_SERVICE', text: '— to keep the timer running accurately when the app is in the background or the screen is off.' },
          { label: 'RECEIVE_BOOT_COMPLETED', text: '— to restore the home screen widget and Wear OS tile after a device restart.' },
          { label: 'SCHEDULE_EXACT_ALARM', text: '— to fire the end-of-session alert at the precise configured time.' },
        ],
      },
      {
        heading: '6. Children\'s Privacy',
        paragraphs: [
          'Flow Timer does not collect any personal data from anyone, including children under 13. The app is safe for all ages.',
        ],
      },
      {
        heading: '7. Changes to This Policy',
        paragraphs: [
          'If we ever change how the app handles data, we will update this page and revise the "last updated" date above. Because the app is fully offline, any future changes would only affect new versions distributed through the app stores.',
        ],
      },
      {
        heading: '8. Contact',
        paragraphs: ['Questions about this policy? Reach us at arunabh@nextjedi.com.'],
      },
    ],
  },

  'pomo-timer': {
    lastUpdated: 'April 5, 2026',
    intro: 'Pomo Timer ("the app") is built by Next Jedi. This page explains what data the app handles, where it stays, and what we never do with it.',
    sections: [
      {
        heading: '1. No Data Leaves Your Device',
        paragraphs: [
          'Pomo Timer does not connect to the internet. There are no servers, no accounts, and no sign-up. All data stays exclusively on your device.',
        ],
      },
      {
        heading: '2. What the App Stores Locally',
        paragraphs: ['The app stores the following on your device:'],
        bullets: [
          { label: 'Session history', text: '— completed Pomodoro sessions (date, duration, type). Used to show daily totals in the session log.' },
          { label: 'Preferences', text: '— work and break durations and notification settings. Stored via Android DataStore / iOS UserDefaults.' },
        ],
      },
      {
        heading: '3. No Analytics or Advertising',
        paragraphs: [
          'Pomo Timer contains no analytics SDKs, no advertising networks, no crash-reporting services, and no tracking pixels.',
        ],
      },
      {
        heading: '4. Permissions',
        paragraphs: ['Pomo Timer requests the following permissions:'],
        bullets: [
          { label: 'POST_NOTIFICATIONS', text: '(Android 13+) — to alert you when a work interval or break ends.' },
          { label: 'FOREGROUND_SERVICE', text: '— to keep the timer running accurately when the screen is off.' },
        ],
      },
      {
        heading: '5. Children\'s Privacy',
        paragraphs: ['Pomo Timer does not collect any personal data. The app is safe for all ages.'],
      },
      {
        heading: '6. Contact',
        paragraphs: ['Questions? Reach us at arunabh@nextjedi.com.'],
      },
    ],
  },

  'sudoku': {
    lastUpdated: 'April 5, 2026',
    intro: 'Sudoku ("the app") is built by Next Jedi. This page explains what data the app handles, where it stays, and what we never do with it.',
    sections: [
      {
        heading: '1. No Data Leaves Your Device',
        paragraphs: [
          'Sudoku does not connect to the internet. There are no accounts and no sign-up. Everything is stored locally on your device.',
        ],
      },
      {
        heading: '2. What the App Stores Locally',
        paragraphs: ['The app stores the following on your device:'],
        bullets: [
          { label: 'Game state', text: '— your current puzzle progress so you can resume where you left off.' },
          { label: 'Statistics', text: '— best times and completion counts per difficulty. Used to display your personal records.' },
          { label: 'Preferences', text: '— difficulty settings, theme, and hint usage. Stored via Android DataStore / iOS UserDefaults.' },
        ],
      },
      {
        heading: '3. No Analytics or Advertising',
        paragraphs: [
          'Sudoku contains no analytics SDKs, no advertising networks, no crash-reporting services, and no tracking pixels.',
        ],
      },
      {
        heading: '4. Permissions',
        paragraphs: [
          'Sudoku does not request any special permissions. No notifications, no network access, no background processes.',
        ],
      },
      {
        heading: '5. Children\'s Privacy',
        paragraphs: ['Sudoku does not collect any personal data. The app is safe for all ages.'],
      },
      {
        heading: '6. Contact',
        paragraphs: ['Questions? Reach us at arunabh@nextjedi.com.'],
      },
    ],
  },

  'life-mathematics': {
    lastUpdated: 'April 5, 2026',
    intro: 'Life Mathematics ("the app") is built by Next Jedi. This page explains what data the app handles, where it stays, and what we never do with it.',
    sections: [
      {
        heading: '1. No Data Leaves Your Device',
        paragraphs: [
          'Life Mathematics does not connect to the internet. There are no accounts, no sign-up, and no servers. All data is local to your device.',
        ],
      },
      {
        heading: '2. What the App Stores Locally',
        paragraphs: ['The app stores the following on your device:'],
        bullets: [
          { label: 'Calculation history', text: '— a local log of recent calculations so you can review previous results.' },
          { label: 'Preferences', text: '— your chosen theme (light / dark) and any display settings. Stored via Android DataStore.' },
        ],
      },
      {
        heading: '3. No Analytics or Advertising',
        paragraphs: [
          'Life Mathematics contains no analytics SDKs, no advertising networks, no crash-reporting services, and no tracking pixels.',
        ],
      },
      {
        heading: '4. Permissions',
        paragraphs: [
          'Life Mathematics does not request any special permissions. No notifications, no network access, no background processes.',
        ],
      },
      {
        heading: '5. Children\'s Privacy',
        paragraphs: ['Life Mathematics does not collect any personal data. The app is safe for all ages.'],
      },
      {
        heading: '6. Contact',
        paragraphs: ['Questions? Reach us at arunabh@nextjedi.com.'],
      },
    ],
  },

  'mindful-tennis': {
    lastUpdated: 'April 5, 2026',
    intro: 'Mindful Tennis ("the app") is built by Next Jedi. This page explains what data the app collects, how it is stored and used, and the rights you have over it.',
    sections: [
      {
        heading: '1. Information We Collect',
        paragraphs: ['When you sign in with Google, the app receives:'],
        bullets: [
          { label: 'Account info', text: '— your email address, display name, and profile photo.' },
          { label: 'Timezone', text: '— your device\'s local timezone, used to group sessions by day.' },
        ],
      },
      {
        heading: '2. User-Generated Content',
        paragraphs: ['As you use the app, you create:'],
        bullets: [
          { label: 'Session records', text: '— date, duration, focus point, aspect ratings (1–5), set scores, and any notes you add.' },
          { label: 'Opponents and partners', text: '— names you enter manually, with win/loss records.' },
          { label: 'Focus points', text: '— coaching topics and their effectiveness scores over time.' },
        ],
      },
      {
        heading: '3. What We Do Not Collect',
        paragraphs: [
          'We do not collect your location, device identifiers, IP address, browsing behaviour, or any analytics about how you use the app.',
        ],
      },
      {
        heading: '4. How We Use Your Information',
        paragraphs: [
          'All data is used exclusively to provide the app\'s functionality — displaying your session history, performance trends, and opponent records. We do not use your data for advertising, profiling, or any purpose beyond delivering the service to you.',
        ],
      },
      {
        heading: '5. Data Storage and Sync',
        paragraphs: [
          'Your data is stored locally on your device first. When you are signed in and online, it is synced to a secure Supabase (PostgreSQL) database. Row Level Security ensures that only your account can read or write your data — no other user or staff member can access it.',
        ],
      },
      {
        heading: '6. Third-Party Services',
        paragraphs: ['The app uses the following third-party services:'],
        bullets: [
          { label: 'Supabase', text: '— cloud database and authentication backend. Receives all user-generated content when syncing.' },
          { label: 'Google OAuth', text: '— sign-in only. Receives your email, name, and profile photo.' },
        ],
      },
      {
        heading: '7. Permissions',
        paragraphs: ['Mindful Tennis requests the following permissions:'],
        bullets: [
          { label: 'POST_NOTIFICATIONS', text: '(Android 13+) — persistent timer notification during active sessions.' },
          { label: 'FOREGROUND_SERVICE', text: '— keeps the timer running accurately when the screen is off.' },
          { label: 'INTERNET', text: '— required for Google Sign-In and cloud sync.' },
        ],
      },
      {
        heading: '8. Your Rights',
        paragraphs: [
          'You can request to access, export, or permanently delete all data associated with your account at any time by contacting us at arunabh@nextjedi.com. We will respond within 30 days.',
        ],
      },
      {
        heading: '9. Data Retention',
        paragraphs: [
          'Your data is retained as long as your account is active. Deleting the app does not delete your cloud data — you must request account deletion explicitly.',
        ],
      },
      {
        heading: '10. Children\'s Privacy',
        paragraphs: ['Mindful Tennis is not directed at children under 13. We do not knowingly collect personal information from children under 13.'],
      },
      {
        heading: '11. Changes to This Policy',
        paragraphs: ['If we change how the app handles your data, we will update this page and revise the "last updated" date above.'],
      },
      {
        heading: '12. Contact',
        paragraphs: ['Questions? Reach us at arunabh@nextjedi.com.'],
      },
    ],
  },

  // Mindful Journal — Play title "Mindful Living: Daily Journal", com.nextjedi.mindfuljournal.
  // Served at /mindful-journal/privacy. Keep in step with apps-ops/apps/mindful-journal/privacy/.
  'mindful-journal': {
    lastUpdated: 'September 21, 2026',
    intro: 'This policy covers Mindful Journal (listed on Google Play as "Mindful Living: Daily Journal"), a training and wellness journal for Android and iOS built by NextJedi ("we", "us"). It explains what data the app collects, why, where it is kept, who helps us process it, and how you can see, fix or delete it. It takes effect on 21 September 2026.',
    sections: [
      {
        heading: '1. Who Is Responsible for Your Data',
        paragraphs: [
          'NextJedi, based in India, decides how your data in Mindful Journal is used. Under India\'s Digital Personal Data Protection Act, 2023 (DPDP Act) we are the "Data Fiduciary"; under the EU and UK GDPR we are the "controller". You can reach us about anything in this policy at support@nextjedi.com.',
        ],
      },
      {
        heading: '2. Information We Collect',
        paragraphs: ['We collect only what the app needs to work:'],
        bullets: [
          { label: 'Account details', text: '— when you sign in with Google, Apple (iOS) or email, we receive your email address and create a user ID. With Google sign-in we may also receive the name on your Google profile. If you use Apple\'s "Hide My Email", we only see the relay address Apple gives us.' },
          { label: 'Your journal', text: '— everything you choose to log: sports and workout sessions, intentions, reflections, notes, mood and energy check-ins, body measurements, meals, learnings, and the people and groups you create (for example training partners or opponents). Names of people are typed in by you and stay private to your account — we do not contact them and they are not linked to anyone\'s account.' },
          { label: 'Subscription details', text: '— if you subscribe, your purchase history and subscription status (product, dates, renewal state). We never see or store your card or bank details; Google Play or the App Store handles payment.' },
          { label: 'Push notification token', text: '— a device token and a subscription ID so we can send you notifications, linked to your user ID. We also receive whether a notification was delivered and opened.' },
          { label: 'Crash reports and diagnostics', text: '— if the app crashes or misbehaves, a report with the error, app version, device model, operating system version and similar technical details.' },
        ],
      },
      {
        heading: '3. What We Do Not Collect or Do',
        paragraphs: [
          'Mindful Journal has no ads. We do not sell your data, share it for advertising, use your advertising ID, or track you across other apps and websites. The app does not access your location, contacts, photos, microphone or camera. We do not use your journal to profile you or make automated decisions about you.',
        ],
      },
      {
        heading: '4. How We Use Your Information',
        paragraphs: ['We use your data only to run the app for you:'],
        bullets: [
          { text: 'to sign you in and keep your account secure;' },
          { text: 'to save your journal and sync it between your devices;' },
          { text: 'to show your trends, records, head-to-head results and learnings;' },
          { text: 'to unlock Pro features when you have an active subscription;' },
          { text: 'to send notifications you have allowed, such as reminders and app news;' },
          { text: 'to find and fix crashes and bugs;' },
          { text: 'to answer you when you contact support, and to meet our legal obligations.' },
        ],
      },
      {
        heading: '5. Why We Are Allowed to Use It (Consent and Legal Basis)',
        paragraphs: [
          'Under the DPDP Act we process your personal data on the basis of your consent, which you give when you create an account and agree to this policy, and which you can withdraw at any time by deleting your account (see section 11). Notification permission is asked for separately and can be turned off in your device settings at any time.',
          'Under the GDPR, we rely on: performance of our contract with you (account, journal, sync and subscriptions); your consent (notifications, and the wellness information you choose to record — which may count as health data); and our legitimate interest in keeping the app stable and secure (crash reports). Withdrawing consent does not affect processing that happened before.',
        ],
      },
      {
        heading: '6. Where Your Data Is Stored',
        paragraphs: [
          'Your journal is saved on your device first, so the app works offline. When you are signed in and online, it syncs to our database hosted by Supabase in the ap-south-1 region (Mumbai, India).',
          'Some of our service providers (listed below) process data on servers outside India, including in the United States and the European Union. Where data leaves India or the EU, we rely on the provider\'s data processing terms and, where required, standard contractual clauses. We do not transfer data to any country the Government of India has restricted under the DPDP Act.',
        ],
      },
      {
        heading: '7. Service Providers We Use',
        paragraphs: ['These companies process data on our behalf to run the app. They are not allowed to use it for their own purposes, such as advertising:'],
        bullets: [
          { label: 'Supabase', text: '— sign-in and cloud database. Holds your account details and your synced journal.' },
          { label: 'Google Sign-In and Sign in with Apple', text: '— confirm your identity when you choose those sign-in options.' },
          { label: 'RevenueCat', text: '— manages subscriptions. Receives your user ID and your purchase history from the store.' },
          { label: 'Google Play Billing and the Apple App Store', text: '— take payment for subscriptions under their own privacy policies.' },
          { label: 'OneSignal', text: '— sends push notifications. Receives your device push token and user ID.' },
          { label: 'Sentry', text: '— crash reporting. Receives crash logs and device diagnostics.' },
        ],
      },
      {
        heading: '8. When We Share Data',
        paragraphs: [
          'Apart from the service providers above, we share personal data only if the law requires it (for example a valid court order), to protect the rights and safety of our users or of NextJedi, or as part of a merger or sale of the app — in which case this policy would continue to apply to your data and we would tell you first.',
        ],
      },
      {
        heading: '9. Wellness, Not Medical Advice',
        paragraphs: [
          'Mindful Journal is a personal wellness and training journal. It is not a medical device and does not diagnose, treat or prevent any condition. Mood, body and meal entries are for your own reflection. Talk to a qualified professional about any health concern.',
        ],
      },
      {
        heading: '10. Security',
        paragraphs: [
          'All traffic between the app and our servers is encrypted with HTTPS. Our database uses row-level security, so each account can read and write only its own rows — no other user can see your journal. Access to the backend is limited to the NextJedi team and protected by strong credentials. No system is perfectly secure, but we will notify you and the relevant authorities of a personal data breach as the law requires.',
        ],
      },
      {
        heading: '11. How Long We Keep Your Data',
        paragraphs: ['We keep your data only as long as needed:'],
        bullets: [
          { label: 'Account and journal', text: '— for as long as your account exists. When you delete your account, your account and all synced journal data are deleted from our database straight away, and the app clears the data stored on that device.' },
          { label: 'Crash reports', text: '— kept for up to 90 days, then deleted automatically.' },
          { label: 'Subscription records', text: '— RevenueCat, Google Play and the App Store keep transaction records under their own retention policies, including for tax and accounting law.' },
          { label: 'Push records', text: '— OneSignal keeps delivery records under its own retention policy; your device stops receiving notifications once you delete your account or uninstall the app.' },
          { label: 'Support emails', text: '— kept as long as needed to resolve your request and meet legal obligations.' },
        ],
      },
      {
        heading: '12. Deleting Your Account',
        paragraphs: [
          'You can delete your account at any time in the app: open Settings and tap Delete account. If you no longer have the app, email support@nextjedi.com from your account\'s email address with the subject "Delete my Mindful Journal account" and we will delete it within 30 days. Deleting your account does not cancel a subscription — cancel it in Google Play or the App Store. Full details: https://www.nextjedi.com/mindful-journal/delete-account',
        ],
      },
      {
        heading: '13. Your Rights',
        paragraphs: ['Wherever you live, you can ask us to:'],
        bullets: [
          { label: 'Access', text: '— get a summary of the personal data we hold about you and how we use it, and the service providers we share it with.' },
          { label: 'Correct and update', text: '— fix anything inaccurate or incomplete. Most of it you can edit directly in the app.' },
          { label: 'Erase', text: '— delete your account and data (section 12).' },
          { label: 'Withdraw consent', text: '— as easily as you gave it, by deleting your account or turning off notifications.' },
          { label: 'Nominate', text: '— under the DPDP Act, name someone to exercise these rights for you if you die or become unable to.' },
          { label: 'Portability and objection', text: '— under the GDPR, receive your data in a machine-readable format, object to processing based on legitimate interest, or ask us to restrict processing.' },
        ],
      },
      {
        heading: '14. How to Use Your Rights and Raise a Grievance',
        paragraphs: [
          'Email support@nextjedi.com from your account\'s email address, so we can confirm the request is yours. This address is also our grievance contact under the DPDP Act. We will respond within 30 days.',
          'If you are not satisfied with our response, you can complain to the Data Protection Board of India. If you are in the EU or UK, you can complain to your local data protection authority.',
        ],
      },
      {
        heading: '15. Age Requirement',
        paragraphs: [
          'Mindful Journal is for adults aged 18 and over. We do not knowingly collect personal data from anyone under 18. If you believe a child has created an account, email support@nextjedi.com and we will delete it.',
        ],
      },
      {
        heading: '16. Changes to This Policy',
        paragraphs: [
          'If we change how the app handles your data, we will update this page and the date at the top. For significant changes we will also tell you in the app before they take effect and, where the law requires it, ask for your consent again.',
        ],
      },
      {
        heading: '17. Contact',
        paragraphs: ['NextJedi — support@nextjedi.com (also our grievance contact for data protection).'],
      },
    ],
  },

  // Karagre — store title "Karagre: Mantra Alarm Clock", com.nextjedi.karagre.
  // Served at /karagre/privacy (/privacy-policy redirects there). Every statement here must stay true of the shipped app:
  // no INTERNET permission, no backend, no analytics or crash SDK, on-device speech only.
  // Store labels: Play "No data collected", App Store "Data Not Collected".
  'karagre': {
    lastUpdated: 'September 21, 2026',
    intro: 'This policy covers Karagre ("Karagre: Mantra Alarm Clock"), an alarm clock for Android and iOS built by NextJedi ("we", "us"). In short: Karagre does not collect any personal data. It has no account, no servers and no analytics, and everything it handles stays on your device. This policy takes effect on 21 September 2026.',
    sections: [
      {
        heading: '1. We Do Not Collect Your Data',
        paragraphs: [
          'Karagre has no account and no sign-up, and we run no backend or servers for it. The Android app does not even request the INTERNET permission, so it has no way to send data to us or to anyone else. We cannot see who uses the app, when, or how.',
          'The store privacy labels reflect this: "No data collected" on Google Play and "Data Not Collected" on the App Store.',
        ],
      },
      {
        heading: '2. Microphone and Your Recitation',
        paragraphs: [
          'When an alarm rings, or when you choose to practise the verse, Karagre listens through the microphone to check that you have recited it. This speech recognition runs entirely on your device. The audio and the resulting text are used only for that check, are never stored off the device, and are never sent anywhere. The microphone is used only while an alarm is ringing or while you are practising.',
          'If you would rather not speak aloud, you can use "Can\'t speak" (Read & tap) to end the alarm without the microphone.',
        ],
      },
      {
        heading: '3. What Stays on Your Device',
        paragraphs: ['The app keeps the following only in its own storage on your device:'],
        bullets: [
          { label: 'Alarms and settings', text: '— the alarms you create and your preferences.' },
          { label: 'Your mornings', text: '— the history of mornings you have kept (Nitya).' },
          { label: 'Family voice recordings', text: '— if you use Kul, the recordings you make and the ones your family sends you.' },
        ],
      },
      {
        heading: '4. Sharing Family Voices',
        paragraphs: [
          'Family voice recordings stay on your device unless you choose to share one. If you do, the app creates a .karagre file and hands it to your phone\'s share sheet, and you pick where it goes (for example WhatsApp). That transfer happens through the app you choose, under its own privacy policy. We never receive the file. Voices your family sends you are opened in Karagre and kept on your device.',
        ],
      },
      {
        heading: '5. Device Backup',
        paragraphs: [
          'Android\'s own device backup may include Karagre\'s app data in your Google account backup. That backup is end-to-end encrypted with your screen lock, and NextJedi cannot read it. You can turn backup off in your phone\'s system settings.',
        ],
      },
      {
        heading: '6. Purchases',
        paragraphs: [
          'Kul is a one-time purchase. Payment is handled entirely by Google Play or the Apple App Store under their own privacy policies. We receive no payment details, and the app checks your purchase on your device.',
        ],
      },
      {
        heading: '7. No Analytics, Ads or Tracking',
        paragraphs: [
          'Karagre contains no analytics, no crash reporting SDK, no advertising and no tracking of any kind. It does not use an advertising ID, does not collect your location, and does not access your contacts or photos. We do not sell or share data, because we do not have any.',
        ],
      },
      {
        heading: '8. Permissions',
        paragraphs: ['Karagre asks only for what an alarm clock needs:'],
        bullets: [
          { label: 'Microphone', text: '— to check your recitation on the device while an alarm rings or while you practise.' },
          { label: 'Notifications', text: '— to show the alarm on your lock screen when it rings.' },
          { label: 'Alarms', text: '— to ring at exactly the time you set.' },
          { label: 'Run at startup', text: '— (Android) to restore your alarms after the phone restarts.' },
          { label: 'Vibration', text: '— to vibrate when the alarm rings.' },
        ],
      },
      {
        heading: '9. Keeping and Deleting Your Data',
        paragraphs: [
          'Because everything is on your device, you are in control of it. You can delete alarms and recordings in the app, or clear everything by clearing the app\'s storage or uninstalling Karagre. We hold no copy, so there is nothing for us to delete or hand over.',
        ],
      },
      {
        heading: '10. Children',
        paragraphs: [
          'Karagre is not directed at children under 13, and it does not collect personal data from anyone, including children.',
        ],
      },
      {
        heading: '11. Changes to This Policy',
        paragraphs: [
          'If we ever change how Karagre handles data, we will update this page and the date at the top before the change reaches the app stores.',
        ],
      },
      {
        heading: '12. Contact',
        paragraphs: ['Questions about this policy? Email NextJedi at support@nextjedi.com.'],
      },
    ],
  },

};
