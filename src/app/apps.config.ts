export interface AppFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AppConfig {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  iconImage?: string;
  screenshots?: string[];
  playStoreUrl?: string;
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
    description: 'Stay in the zone with focused work sessions and smart break reminders.',
    category: 'Productivity',
    icon: 'timer',
    accent: '#d97706',
    accentLight: '#fef3c7',
    accentDark: '#78350f',
    taglinePrefix: 'Stay in',
    taglineAccent: 'the zone.',
    features: [
      {
        icon: 'filter_center_focus',
        title: 'Deep Focus Mode',
        description:
          'Customizable work intervals that adapt to your natural rhythm and block digital distractions.',
      },
      {
        icon: 'self_improvement',
        title: 'Smart Break Reminders',
        description:
          'Science-backed break intervals prevent mental fatigue and keep you performing at your peak.',
      },
      {
        icon: 'analytics',
        title: 'Focus Analytics',
        description:
          'Track sessions, streaks, and energy patterns to discover when you do your best work.',
      },
    ],
  },
  {
    slug: 'pomo-timer',
    name: 'Pomo Timer',
    description: 'Boost your output with the classic Pomodoro technique — simple, proven, effective.',
    category: 'Productivity',
    icon: 'alarm',
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
    description: 'A clean, offline Sudoku experience built for all platforms.',
    category: 'Puzzle',
    icon: 'grid_on',
    accent: '#2563eb',
    accentLight: '#dbeafe',
    accentDark: '#1e3a8a',
    taglinePrefix: 'Pure logic,',
    taglineAccent: 'pure pleasure.',
    features: [
      {
        icon: 'wifi_off',
        title: 'Fully Offline',
        description: 'No internet required. Play puzzles anywhere, anytime — on any platform or device.',
      },
      {
        icon: 'signal_cellular_alt',
        title: 'Multiple Difficulties',
        description: 'Beginner to expert — always find a challenge perfectly matched to your skill level.',
      },
      {
        icon: 'lightbulb',
        title: 'Smart Hints',
        description:
          "Stuck? Use hints sparingly to learn techniques without spoiling the joy of solving.",
      },
    ],
  },
  {
    slug: 'life-mathematics',
    name: 'Life Mathematics',
    description: 'A beautiful everyday calculator for bills, tips, budgets, and beyond.',
    category: 'Tools',
    icon: 'calculate',
    iconImage: '/apps/life-mathematics/icon.jpg',
    screenshots: [
      '/apps/life-mathematics/screenshot-dark.jpg',
      '/apps/life-mathematics/screenshot-light.jpg',
    ],
    playStoreUrl: 'https://play.google.com/apps/testing/com.nextjedi.lifemathematics',
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
    description: 'Bring mental clarity and mindfulness to your tennis game and performance.',
    category: 'Wellness',
    icon: 'sports_tennis',
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
