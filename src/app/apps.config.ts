export interface AppFeature {
  icon: string;
  title: string;
  description: string;
}

export type AppStage = 'coming-soon' | 'early-access' | 'production';
export type AppPhase = 'development' | 'review' | 'launched';

export interface PlatformConfig {
  stage: AppStage;
  storeUrl?: string; // required for early-access and production
}

export interface AppConfig {
  slug: string;
  name: string;
  description: string;
  category: string;
  phase: AppPhase;
  icon: string;
  iconImage?: string;
  screenshots?: string[];
  android?: PlatformConfig;
  ios?: PlatformConfig;
  accent: string;
  accentLight: string;
  accentDark: string;
  taglinePrefix: string;
  taglineAccent: string;
  features: AppFeature[];
}

export const APPS: AppConfig[] = [
  {
    slug: 'flowtimer',
    name: 'Flow Timer',
    phase: 'development',
    description:
      'Pixel-art focus timer. Start your session from the home screen widget or Wear OS tile — no sign-ups, no ads, 100% offline.',
    category: 'Productivity',
    icon: 'hourglass_top',
    android: {
      stage: 'early-access',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.ashutosh.flowtimer',
    },
    ios: {
      stage: 'coming-soon',
    },
    accent: '#4A90D9',
    accentLight: '#dbeafe',
    accentDark: '#1e3a8a',
    taglinePrefix: 'Get in',
    taglineAccent: 'flow.',
    features: [
      {
        icon: 'hourglass_empty',
        title: 'Gesture-Driven UI',
        description:
          'Tap the pixel-art hourglass to start or pause. Long-press to reset. No buttons, no clutter — just you and your work.',
      },
      {
        icon: 'widgets',
        title: 'Widget & Wear OS',
        description:
          'Start, pause, and reset your timer from the home screen widget or Wear OS tile — without ever opening the app.',
      },
      {
        icon: 'bar_chart',
        title: 'Focus Dashboard',
        description:
          'Visualise your focus history with daily bar charts and a GitHub-style heatmap to track your momentum over time.',
      },
    ],
  },
  {
    slug: 'pomo-timer',
    name: 'Pomo Timer',
    phase: 'development',
    description: 'Boost your output with the classic Pomodoro technique — simple, proven, effective.',
    category: 'Productivity',
    icon: 'alarm',
    android: { stage: 'coming-soon' },
    ios: { stage: 'coming-soon' },
    accent: '#dc2626',
    accentLight: '#fee2e2',
    accentDark: '#7f1d1d',
    taglinePrefix: 'Boost your',
    taglineAccent: 'output.',
    features: [
      {
        icon: 'timer',
        title: 'Classic Pomodoro',
        description:
          'The proven 25-minute work, 5-minute break cycle — simple, effective, and battle-tested.',
      },
      {
        icon: 'tune',
        title: 'Flexible Intervals',
        description: 'Customize work and break durations to match your workflow or the task at hand.',
      },
      {
        icon: 'history',
        title: 'Session Log',
        description: 'Review completed sessions and daily totals to see exactly where your time went.',
      },
    ],
  },
  {
    slug: 'sudoku',
    name: 'Sudoku',
    phase: 'launched',
    description:
      'Sudoku: A Brain Gym is a clean, distraction-free Sudoku app for iPhone and iPad. Pick your difficulty, start a new game in one tap, and build a daily puzzle habit — the app tracks your streak every time you play.',
    category: 'Puzzle',
    icon: 'grid_on',
    iconImage: '/apps/sudoku/icon.png',
    screenshots: [
      '/apps/sudoku/screenshot-home.png',
      '/apps/sudoku/screenshot-game.png',
      '/apps/sudoku/screenshot-stats.png',
    ],
    android: { stage: 'coming-soon' },
    ios: { stage: 'coming-soon' },
    accent: '#2563eb',
    accentLight: '#dbeafe',
    accentDark: '#1e3a8a',
    taglinePrefix: 'Train your mind,',
    taglineAccent: 'one puzzle at a time.',
    features: [
      {
        icon: 'local_fire_department',
        title: 'Build a Daily Habit',
        description:
          'A streak badge tracks how many days in a row you\'ve played. One tap to start — no account, no setup, no noise.',
      },
      {
        icon: 'signal_cellular_alt',
        title: 'Easy to Expert',
        description:
          'Choose Easy (46 clues), Medium (36), or Hard (26). Always find a challenge that matches where you are today.',
      },
      {
        icon: 'bar_chart',
        title: 'Track Your Journey',
        description:
          'Streak, games played, win rate, and best solve times — all in one stats screen. Watch yourself improve over time.',
      },
    ],
  },
  {
    slug: 'life-mathematics',
    name: 'Life Mathematics',
    phase: 'development',
    description: 'A beautiful everyday calculator for bills, tips, budgets, and beyond.',
    category: 'Tools',
    icon: 'calculate',
    iconImage: '/apps/life-mathematics/icon.jpg',
    screenshots: [
      '/apps/life-mathematics/screenshot-dark.jpg',
      '/apps/life-mathematics/screenshot-light.jpg',
    ],
    android: {
      stage: 'early-access',
      storeUrl: 'https://play.google.com/apps/testing/com.nextjedi.lifemathematics',
    },
    ios: { stage: 'coming-soon' },
    accent: '#7c3aed',
    accentLight: '#ede9fe',
    accentDark: '#4c1d95',
    taglinePrefix: 'Math made',
    taglineAccent: 'effortless.',
    features: [
      {
        icon: 'palette',
        title: 'Clean Modern Design',
        description:
          'Material Design 3 interface with large, responsive buttons — easy on the eyes, accurate every time.',
      },
      {
        icon: 'dark_mode',
        title: 'Dark Mode Support',
        description:
          'Switch seamlessly between light and dark themes for comfortable use day or night.',
      },
      {
        icon: 'wifi_off',
        title: 'Fully Offline',
        description:
          'No internet required. Smart calculations with proper operator precedence — always ready when you need it.',
      },
    ],
  },
  {
    slug: 'mindful-tennis',
    name: 'Mindful Tennis',
    phase: 'review',
    description: 'Bring mental clarity and mindfulness to your tennis game and performance.',
    category: 'Wellness',
    icon: 'sports_tennis',
    iconImage: '/apps/mindful-tennis/icon.jpg',
    android: { stage: 'coming-soon' },
    ios: { stage: 'coming-soon' },
    accent: '#059669',
    accentLight: '#d1fae5',
    accentDark: '#064e3b',
    taglinePrefix: 'Bring your',
    taglineAccent: 'best game.',
    features: [
      {
        icon: 'psychology',
        title: 'Mental Focus',
        description:
          'Pre-match routines and in-game techniques to quiet your mind and sharpen court awareness.',
      },
      {
        icon: 'air',
        title: 'Breathing Exercises',
        description:
          'Guided breathwork for pre-match calm, mid-game composure, and post-match recovery.',
      },
      {
        icon: 'edit_note',
        title: 'Match Journal',
        description:
          'Log your matches, mental state, and breakthroughs to track your mindset progress over time.',
      },
    ],
  },
];
