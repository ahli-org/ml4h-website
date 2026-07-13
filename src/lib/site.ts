// Central place for site-wide data. Edit values here and they update everywhere.

// Astro injects BASE_URL from `base` in astro.config.mjs. It always ends in "/".
const BASE: string = import.meta.env.BASE_URL;

export function url(path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}${clean}/` : BASE;
}

export function currentKey(pathname: string): string {
  return pathname.replace(BASE, '').replace(/^\/+|\/+$/g, '');
}

export const REVIEW_MODE = false;

export const SITE = {
  name: '6th ML4H Symposium',
  shortName: 'ML4H',
  year: '2026',
  tagline: 'Machine Learning for Health',
  dates: 'December 6–7, 2026',
  deadline: 'September 10, 2026',
  location: 'Sydney, Australia',
  email: 'ml4h@ahli.cc',
};

export type NavChild = { label: string; path: string };
export type NavItem = {
  label: string;
  path: string;
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  { label: 'Home', path: '' },
  {
    label: 'About',
    path: 'about',
    children: [
      { label: 'History', path: 'about/history' },
      { label: 'Past Events', path: 'about/past-events' },
      { label: 'Proceedings', path: 'about/proceedings' },
      { label: 'Organizing Committee', path: 'about/organizing-committee' },
      { label: 'Governing Board', path: 'about/governing-board' },
    ],
  },
  { label: 'Sponsors', path: 'sponsors' },
  {
    label: 'Submit',
    path: 'submit',
    children: [
      { label: 'Call for Participation', path: 'submit/call-for-papers' },
      { label: 'Call for Demonstrations', path: 'submit/call-for-demonstrations' },
      { label: 'Mentorship Programs', path: 'submit/mentorship-programs' },
    ],
  },
  {
    label: 'Attend',
    path: 'attend',
    children: [
      { label: 'Schedule', path: 'attend/schedule' },
      { label: 'Speakers', path: 'attend/speakers' },
      { label: 'Research Roundtables', path: 'attend/research-roundtables' },
      { label: 'Plan Your Visit', path: 'attend/plan-your-visit' },
    ],
  },
  {
    label: 'Resources',
    path: 'resources',
    children: [
      { label: 'Writing Guidelines', path: 'resources/writing-guidelines' },
      { label: 'Reviewing Guidelines', path: 'resources/reviewing-guidelines' },
      { label: 'Community Guidelines', path: 'resources/community-guidelines' },
      { label: 'Code of Conduct', path: 'resources/code-of-conduct' },
      { label: 'Review Policy', path: 'resources/review-policy' },
      { label: 'Publication Ethics', path: 'resources/publication-ethics' },
      { label: 'FAQs', path: 'resources/faqs' },
    ],
  },
];
