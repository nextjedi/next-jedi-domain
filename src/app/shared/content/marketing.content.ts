export interface MarketingSection {
  heading: string;
  paragraphs: string[];
  bullets?: { label?: string; text: string }[];
}

export interface MarketingVerse {
  original: string[];
  transliteration: string[];
  meaning: string;
}

export interface AppMarketingContent {
  headline: string;
  intro: string;
  verse?: MarketingVerse;
  sections: MarketingSection[];
  /** Availability lines, e.g. "Coming soon to Google Play". Never a date until one is fixed. */
  availability: string[];
  contactEmail: string;
}

export const MARKETING_CONTENT: Record<string, AppMarketingContent> = {

  // Karagre — the App Store "Marketing URL". Launch date is undecided: do not name a date or a
  // festival here. Do not advertise features that are not shipping at launch (sunrise /
  // Brahma Muhurta alarms, Dhyana or japa timers).
  'karagre': {
    headline: 'Wake with a verse.',
    intro: 'Karagre is an alarm clock that ends when you recite the Karāgre Vasate Lakṣmī morning shloka. For generations, families have begun the day by looking at their palms and saying these lines. Karagre brings that small ritual back to the first minute of your morning.',
    verse: {
      original: ['कराग्रे वसते लक्ष्मीः करमध्ये सरस्वती।', 'करमूले तु गोविन्दः प्रभाते करदर्शनम्॥'],
      transliteration: ['Karāgre vasate Lakṣmīḥ, karamadhye Sarasvatī,', 'karamūle tu Govindaḥ, prabhāte karadarśanam.'],
      meaning: 'At the tips of the fingers lives Lakṣmī, in the middle of the palm Sarasvatī, and at its base Govinda. So, in the morning, look at your hands.',
    },
    sections: [
      {
        heading: 'How it works',
        paragraphs: [],
        bullets: [
          { label: 'The alarm rings', text: '— a gentle tone that slowly grows, over your lock screen.' },
          { label: 'You recite the verse', text: '— Karagre listens and checks it on your phone. Recognition is lenient, so you don\'t need perfect pronunciation.' },
          { label: 'The morning begins', text: '— a short closing ritual with the Bhoomi vandana, the verse asking Mother Earth\'s forgiveness before your feet touch the ground, with its meaning.' },
        ],
      },
      {
        heading: 'Made for real mornings',
        paragraphs: [],
        bullets: [
          { label: 'Can\'t speak', text: '— someone asleep beside you? Read & tap lets you read the verse line by line and tap as you go.' },
          { label: 'Nitya', text: '— a gentle record of the mornings you have kept.' },
          { label: 'Learn', text: '— the verse line by line, with the meaning of each line, so you can learn it by heart.' },
        ],
      },
      {
        heading: 'Kul — your family\'s voices',
        paragraphs: [
          'Kul is a one-time unlock, and you choose what to pay. With Kul, members of your family record their voices reciting the verse and share them with each other as a .karagre file through the phone\'s share sheet, for example on WhatsApp. A grandparent\'s voice can start your morning. Voices your family sends you are always free to use. Kul also unlocks more verses. There is no subscription.',
        ],
      },
      {
        heading: 'Private by design',
        paragraphs: [
          'No account, no servers, no ads, no analytics. Your recitation is checked on your phone and never leaves it. Your alarms, your mornings and your family\'s voices stay on your device. Karagre works fully offline.',
        ],
      },
    ],
    availability: ['Coming soon to Google Play', 'Coming later to the App Store'],
    contactEmail: 'support@nextjedi.com',
  },

};
