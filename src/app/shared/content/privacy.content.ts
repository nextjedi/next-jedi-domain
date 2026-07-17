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

};
