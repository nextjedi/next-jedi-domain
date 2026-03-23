export interface AppConfig {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export const APPS: AppConfig[] = [
  {
    slug: 'flowtimer',
    name: 'Flow Timer',
    description: 'Stay in the zone with focused work sessions and smart break reminders.',
    category: 'Productivity',
  },
  {
    slug: 'pomo-timer',
    name: 'Pomo Timer',
    description: 'Boost your output with the classic Pomodoro technique — simple, proven, effective.',
    category: 'Productivity',
  },
  {
    slug: 'sudoku',
    name: 'Sudoku',
    description: 'A clean, offline Sudoku experience built for all platforms.',
    category: 'Puzzle',
  },
  {
    slug: 'life-mathematics',
    name: 'Life Mathematics',
    description: 'Visualize your time and life milestones through the lens of numbers.',
    category: 'Wellness',
  },
  {
    slug: 'mindful-tennis',
    name: 'Mindful Tennis',
    description: 'Bring mental clarity and mindfulness to your tennis game and performance.',
    category: 'Wellness',
  },
];
