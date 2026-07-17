export interface LegalBullet {
  label?: string;
  text: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: LegalBullet[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  eyebrow: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

// ---------------------------------------------------------------------------
// Business details — single source of truth for all legal pages.
// TODO(kyc): add `address` (registered business address) and `gstin` here, then
// restore the "Registered Address" section and the GSTIN line in the contact
// doc below. Razorpay's reviewers look for a physical address on Contact Us.
// ---------------------------------------------------------------------------
export const BUSINESS = {
  legalName: 'Next Jedi',
  proprietor: 'Arunabh Priyadarshi',
  type: 'Sole Proprietorship',
  email: 'arunabh@nextjedi.com',
  hours: 'Monday to Friday, 10:00 AM – 6:00 PM IST',
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  terms: {
    slug: 'terms',
    title: 'Terms & Conditions',
    eyebrow: 'Legal',
    lastUpdated: 'July 17, 2026',
    intro: `These Terms & Conditions govern your use of the websites, applications, and digital products offered by ${BUSINESS.legalName} ("we", "us", "our"), a ${BUSINESS.type} based in India. By accessing our sites or purchasing our products, you agree to these terms.`,
    sections: [
      {
        heading: '1. About Us',
        paragraphs: [
          `${BUSINESS.legalName} is a ${BUSINESS.type} that builds and sells digital products, including mobile applications and related digital services. You can reach us at ${BUSINESS.email}.`,
        ],
      },
      {
        heading: '2. Products & Services',
        paragraphs: [
          'We offer digital products such as mobile applications, in-app purchases, subscriptions, and related digital services. Product descriptions, features, and prices are shown on the respective product page and are subject to change without prior notice.',
        ],
      },
      {
        heading: '3. Pricing & Payment',
        paragraphs: [
          'All prices are listed in Indian Rupees (₹) unless stated otherwise and are inclusive of applicable taxes unless noted. Payments are processed securely through our payment gateway partner, Razorpay. We do not store your card or banking details on our servers.',
        ],
      },
      {
        heading: '4. Licence to Use',
        paragraphs: [
          'On purchase, you receive a personal, non-exclusive, non-transferable licence to use the product for its intended purpose. You may not resell, redistribute, decompile, or reverse-engineer our products except as permitted by law.',
        ],
      },
      {
        heading: '5. Acceptable Use',
        paragraphs: [
          'You agree not to misuse our products or services, attempt to gain unauthorised access, disrupt the service, or use it for any unlawful purpose.',
        ],
      },
      {
        heading: '6. Intellectual Property',
        paragraphs: [
          `All content, trademarks, logos, and software associated with our products are the property of ${BUSINESS.legalName} and are protected by applicable intellectual property laws.`,
        ],
      },
      {
        heading: '7. Limitation of Liability',
        paragraphs: [
          'Our products are provided on an "as is" basis. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from the use of our products.',
        ],
      },
      {
        heading: '8. Governing Law',
        paragraphs: [
          'These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts located in our registered place of business.',
        ],
      },
      {
        heading: '9. Contact',
        paragraphs: [
          `For any questions about these terms, email us at ${BUSINESS.email}. We respond within 1–2 business days.`,
        ],
      },
    ],
  },

  refund: {
    slug: 'refund',
    title: 'Refund & Cancellation Policy',
    eyebrow: 'Legal',
    lastUpdated: 'July 17, 2026',
    intro: `This policy explains cancellations and refunds for purchases made from ${BUSINESS.legalName}. Because we sell digital products, please read this carefully before purchasing.`,
    sections: [
      {
        heading: '1. Nature of Our Products',
        paragraphs: [
          'We sell digital goods and services (mobile applications, in-app purchases, subscriptions, and digital content). These are delivered electronically and are not physical goods.',
        ],
      },
      {
        heading: '2. Cancellations',
        paragraphs: [
          'You may cancel a recurring subscription at any time from your account or by emailing us. On cancellation, your subscription remains active until the end of the current billing period, and you will not be charged for the next cycle.',
        ],
      },
      {
        heading: '3. Refunds',
        paragraphs: [
          'As our products are digital and delivered immediately, purchases are generally non-refundable once access has been granted. However, we will consider a refund in the following cases:',
        ],
        bullets: [
          { label: 'Duplicate charge', text: '— you were accidentally charged more than once for the same purchase.' },
          { label: 'Non-delivery', text: '— you were charged but did not receive access to the product due to a technical fault on our side.' },
          { label: 'Verified defect', text: '— the product is materially non-functional and we are unable to resolve the issue within a reasonable time.' },
        ],
      },
      {
        heading: '4. How to Request a Refund',
        paragraphs: [
          `Email ${BUSINESS.email} within 7 days of the transaction with your order/payment ID and a description of the issue. We will review and respond within 3 business days.`,
        ],
      },
      {
        heading: '5. Refund Processing Time',
        paragraphs: [
          'Approved refunds are issued to the original payment method via Razorpay and typically reflect in your account within 5–7 business days, depending on your bank or card issuer.',
        ],
      },
      {
        heading: '6. Contact',
        paragraphs: [
          `Questions about a refund or cancellation? Email ${BUSINESS.email} and we will respond within 1–2 business days.`,
        ],
      },
    ],
  },

  shipping: {
    slug: 'shipping',
    title: 'Shipping & Delivery Policy',
    eyebrow: 'Legal',
    lastUpdated: 'July 17, 2026',
    intro: `${BUSINESS.legalName} sells digital products only. This policy explains how our products are delivered.`,
    sections: [
      {
        heading: '1. Digital Delivery',
        paragraphs: [
          'All our products are digital. We do not ship any physical goods, so no shipping charges apply.',
        ],
      },
      {
        heading: '2. How You Receive Your Purchase',
        paragraphs: [
          'Access to paid features, subscriptions, or content is granted electronically and is typically available immediately after a successful payment. Depending on the product, this may be delivered:',
        ],
        bullets: [
          { label: 'In-app', text: '— the purchased feature or content unlocks within the application on the account/device used at purchase.' },
          { label: 'By email', text: '— where applicable, access details or a confirmation are sent to the email address provided at checkout.' },
        ],
      },
      {
        heading: '3. Delivery Timeframe',
        paragraphs: [
          'Digital delivery is usually instant. In rare cases of a processing delay, access is granted within 24 hours of a confirmed payment.',
        ],
      },
      {
        heading: '4. Delivery Issues',
        paragraphs: [
          `If you have paid but not received access, contact us at ${BUSINESS.email} with your payment ID and we will resolve it promptly.`,
        ],
      },
    ],
  },

  contact: {
    slug: 'contact',
    title: 'Contact Us',
    eyebrow: 'Support',
    lastUpdated: 'July 17, 2026',
    intro: `We'd love to hear from you. Reach ${BUSINESS.legalName} through any of the channels below.`,
    sections: [
      {
        heading: 'Email',
        paragraphs: [
          BUSINESS.email,
          'This is our primary support channel. We respond to all queries within 1–2 business days.',
        ],
      },
      {
        heading: 'Support Hours',
        paragraphs: [BUSINESS.hours],
      },
      {
        heading: 'Business Details',
        paragraphs: [
          `${BUSINESS.legalName} — ${BUSINESS.type}`,
          `Proprietor: ${BUSINESS.proprietor}`,
        ],
      },
    ],
  },
};
