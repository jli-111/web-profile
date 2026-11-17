// Brand copy, navigation, services, and process steps live here.
export const brand = {
  tagline: 'Build a brand people understand, remember, and choose.',
  demoNotice: 'Brand website concept · Replace sample company details before launch',
};
export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'service', label: 'Service' },
  { id: 'contact', label: 'Contact' },
];
export const services = [
  {
    title: 'Brand Strategy',
    en: 'BRAND STRATEGY',
    lead: 'Find your distinction. Build lasting brand value.',
    text: 'We clarify your positioning, value proposition, and voice around your business goals, giving every brand interaction a clear direction.',
    tags: ['Positioning', 'Visual Identity', 'Brand Story'],
    num: '01',
  },
  {
    title: 'Digital Experience',
    en: 'DIGITAL EXPERIENCE',
    lead: 'Make every interaction feel unmistakably yours.',
    text: 'We bring your brand into websites and digital touchpoints through thoughtful content, visual design, and intuitive interaction.',
    tags: ['Websites', 'Interaction Design', 'Content Design'],
    num: '02',
  },
  {
    title: 'Growth Marketing',
    en: 'GROWTH MARKETING',
    lead: 'Reach the right people and grow with intention.',
    text: 'We shape content and campaigns around your audience, building a clear path from discovery to inquiry and improving it with real feedback.',
    tags: ['Content Strategy', 'Campaigns', 'Conversion'],
    num: '03',
  },
];
export const processSteps = [
  ['Discover', 'We learn about your goals, business, audience, and challenges to find the problem worth solving.'],
  ['Create', 'Together, we turn a clear direction into strategy, design, and content you can experience.'],
  ['Deliver', 'We refine the details and bring your brand to life across real digital touchpoints.'],
  ['Evolve', 'We learn from feedback and make each iteration more effective than the last.'],
].map(([title, description]) => ({ title, description }));
