// Confirmed sponsors, shown on both the home page and the Sponsors page.
// Logo paths are relative to the site base (files live in public/logos/).

export type Sponsor = { name: string; url: string; logo?: string; blurb?: string };

export type SponsorTier = {
  tier: 'diamond' | 'gold' | 'silver';
  label: string;
  // Total slots offered at this level; omit to hide the availability count.
  slots?: number;
  sponsors: Sponsor[];
};

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    tier: 'diamond',
    label: 'Diamond',
    slots: 2,
    sponsors: [
      { name: 'Google', url: 'https://www.google.com/', logo: 'logos/google.png' },
    ],
  },
  {
    tier: 'gold',
    label: 'Gold',
    sponsors: [],
  },
  {
    tier: 'silver',
    label: 'Silver',
    sponsors: [
      { name: 'ADIA Lab', url: 'https://www.adialab.ae/', logo: 'logos/adia.png' },
    ],
  },
];

// e.g. "1 of 2 slots available"; null when the tier has no slot limit.
export function slotsAvailable(t: SponsorTier): string | null {
  if (t.slots === undefined) return null;
  const open = Math.max(t.slots - t.sponsors.length, 0);
  return `${open} of ${t.slots} slots available`;
}

export function sponsorTier(tier: SponsorTier['tier']): SponsorTier {
  return SPONSOR_TIERS.find((t) => t.tier === tier)!;
}
