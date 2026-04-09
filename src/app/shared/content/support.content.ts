export interface SupportFaq {
  question: string;
  answer: string;
}

export interface AppSupportContent {
  intro: string;
  faqs: SupportFaq[];
}

export const SUPPORT_CONTENT: Record<string, AppSupportContent> = {

  'flowtimer': {
    intro: 'Need help with Flow Timer? Find answers to common questions below, or reach out directly.',
    faqs: [
      {
        question: 'How do I add the home screen widget?',
        answer: 'Long-press an empty area on your home screen, tap "Widgets", scroll to find Flow Timer, then drag the widget to your preferred spot. You can start and reset your timer directly from the widget.',
      },
      {
        question: 'How do I add the Wear OS tile?',
        answer: 'Open the Wear OS app on your phone, tap "Tiles", find Flow Timer in the list, and tap the + button to add it. Swipe to the tile on your watch to control the timer from your wrist.',
      },
      {
        question: 'My session history disappeared. What happened?',
        answer: 'Session history is stored locally on your device. If it\'s gone, you may have cleared the app\'s data in your device settings (Settings → Apps → Flow Timer → Storage → Clear Data). This cannot be reversed as the app is fully offline with no cloud backup.',
      },
      {
        question: 'Can I sync my sessions across devices?',
        answer: 'Flow Timer is fully offline and does not sync across devices. Your data lives only on the device where you use the app. A multi-device sync feature may be explored in a future version.',
      },
      {
        question: 'The end-of-session notification isn\'t firing.',
        answer: 'Check that Flow Timer has notification permission (Settings → Apps → Flow Timer → Notifications). On Android 13+, the app requests this permission on first launch. Also ensure battery optimisation isn\'t killing the foreground service for the app.',
      },
      {
        question: 'How do I change the session duration?',
        answer: 'Tap the settings icon in the app. You can set a custom duration from 1 to 120 minutes. The new duration applies to the next session you start.',
      },
    ],
  },

  'life-mathematics': {
    intro: 'Need help with Life Mathematics? Find answers to common questions below, or get in touch.',
    faqs: [
      {
        question: 'Why doesn\'t it follow standard order of operations (BODMAS)?',
        answer: 'Life Mathematics evaluates expressions left-to-right, like a traditional pocket calculator. This is intentional — it keeps the experience simple and predictable for everyday calculations like bills and tips. For advanced mathematics with proper operator precedence, a scientific calculator is recommended.',
      },
      {
        question: 'How do I view my calculation history?',
        answer: 'Tap the history icon in the top area of the calculator. A scrollable log of your recent calculations will appear. Tap any previous result to paste it back into the calculator.',
      },
      {
        question: 'The theme isn\'t switching to dark mode.',
        answer: 'Open the app\'s settings by tapping the gear icon. Toggle the theme between Light and Dark. The app also respects your system theme by default — if your device is in dark mode, the app will follow it automatically.',
      },
      {
        question: 'Can I use it offline?',
        answer: 'Yes — Life Mathematics is fully offline. No internet connection is ever required. All calculations happen on your device.',
      },
    ],
  },

  'mindful-tennis': {
    intro: 'Need help with Mindful Tennis? Find answers below, or contact us directly.',
    faqs: [
      {
        question: 'Can I use the app without signing in?',
        answer: 'Yes. All your data is saved locally on your device without a sign-in. Google Sign-In is optional — use it only when you want to back up your sessions and sync across devices.',
      },
      {
        question: 'How do I add an opponent to a session?',
        answer: 'When rating a completed session, tap "Add Opponent" and type their name. They\'ll be saved to your roster automatically. Future sessions can reference the same opponent from the roster.',
      },
      {
        question: 'What do the 8 aspects cover?',
        answer: 'The 8 aspects cover the main technical and mental dimensions of tennis: Forehand, Backhand, Serve, Return, Volley, Slice, Movement, and Mindset. Each is rated 1–5 per session, and the app tracks your averages over time.',
      },
      {
        question: 'How do I log a doubles match?',
        answer: 'When starting a session, toggle the match type to "Doubles". You\'ll be able to add your partner\'s name, your opponents\' names, and log set scores for the doubles match.',
      },
      {
        question: 'My data didn\'t sync to my other device.',
        answer: 'Make sure you\'re signed in to the same Google account on both devices and that both devices have an internet connection. Pull down to refresh on the sessions screen to trigger a manual sync.',
      },
      {
        question: 'How do I delete my account and all data?',
        answer: 'Email us at hello@nextjedi.com from your registered email address and request account deletion. We will permanently delete your account and all associated data within 30 days.',
      },
    ],
  },

  'pomo-timer': {
    intro: 'Pomo Timer is currently in development. If you have questions or feedback, we\'d love to hear from you.',
    faqs: [
      {
        question: 'When will Pomo Timer launch?',
        answer: 'We\'re actively building it. Join Project Aurora to get early access and help shape the feature set.',
      },
      {
        question: 'Will it support custom Pomodoro intervals?',
        answer: 'Yes — customisable work, short break, and long break durations are planned for launch.',
      },
    ],
  },

  'sudoku': {
    intro: 'Sudoku is currently in development. If you have questions or feedback, we\'d love to hear from you.',
    faqs: [
      {
        question: 'When will Sudoku launch?',
        answer: 'We\'re working on it. Join Project Aurora to get notified when it\'s ready and to request specific difficulty levels or features.',
      },
      {
        question: 'Will it work offline?',
        answer: 'Yes — Sudoku will be fully offline with no accounts required.',
      },
    ],
  },

};
