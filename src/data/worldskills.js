import manifest from './gallery-manifest.json';

// ---------------------------------------------------------------------------
// WorldSkills Shanghai 2026 photo gallery
//
// To add photos:
//   1. Drop the originals in src/assets/Worldskills/
//   2. Run `npm run images` (generates responsive WebP + gallery-manifest.json)
//   3. Add an entry below using the file name (lower-case, dashes) as `slug`.
//      Photos that are processed but not listed still appear at the end of the
//      full gallery with a generic caption, so nothing gets lost.
//
// `featured` photos fill the bento grid on the home page (first 8, in order).
// ---------------------------------------------------------------------------

export const credly = {
  badgeId: 'f04dd193-7f96-4ee9-9fbb-840c5360d933',
  url: 'https://www.credly.com/badges/f04dd193-7f96-4ee9-9fbb-840c5360d933/public_url',
};

export const competition = {
  name: 'WorldSkills Shanghai 2026',
  edition: '48th WorldSkills Competition',
  skill: 'Web Technologies',
  country: 'Morocco',
  dates: '22–26 September 2026',
};

export const categories = ['Competition', 'Team Morocco', 'Ceremonies', 'Shanghai'];

const photoList = [
  {
    slug: 'competition-day',
    alt: 'Omar Zerhouni in the Morocco team shirt reviewing a screen next to a fellow competitor at WorldSkills Shanghai 2026',
    caption: 'Competition day in the Web Technologies workshop',
    category: 'Competition',
    featured: true,
  },
  {
    slug: 'web-technologies-competitors',
    alt: 'Web Technologies competitors from many countries gathered for a group photo inside the competition hall',
    caption: 'Web Technologies competitors from around the world',
    category: 'Competition',
    featured: true,
  },
  {
    slug: 'opening-ceremony',
    alt: 'Moroccan delegation in traditional white djellabas walking in the opening ceremony parade',
    caption: 'Team Morocco at the opening ceremony',
    category: 'Ceremonies',
    featured: true,
  },
  {
    slug: 'worldskills-shanghai-sign',
    alt: 'Moroccan team members in red jackets lined up in front of the WorldSkills Shanghai 2026 sign',
    caption: 'Team Morocco at the WorldSkills Shanghai 2026 venue',
    category: 'Team Morocco',
    featured: true,
  },
  {
    slug: 'competition-focus',
    alt: 'Omar Zerhouni wearing headphones and typing at his competition workstation',
    caption: 'Heads-down at the workstation',
    category: 'Competition',
    featured: true,
  },
  {
    slug: 'team-flag-night',
    alt: 'Moroccan team holding the national flag outside the venue at night',
    caption: 'Flying the flag in Shanghai',
    category: 'Team Morocco',
    featured: true,
  },
  {
    slug: 'competitors-exchange',
    alt: 'Omar Zerhouni talking with another competitor in the competition hall',
    caption: 'Exchanging with fellow competitors',
    category: 'Competition',
    featured: true,
  },
  {
    slug: 'huangpu-river-team',
    alt: 'Moroccan team on a boat on the Huangpu River with the Shanghai skyline behind',
    caption: 'Huangpu River, Shanghai',
    category: 'Shanghai',
    featured: true,
  },
  {
    slug: 'competition-workstation',
    alt: 'Omar Zerhouni focused on his monitor during a competition module',
    caption: 'Working through a competition module',
    category: 'Competition',
  },
  {
    slug: 'competition-coding',
    alt: 'Omar Zerhouni coding at his workstation with headphones on',
    caption: 'Building under time pressure',
    category: 'Competition',
  },
  {
    slug: 'workstation-review',
    alt: 'Omar Zerhouni leaning over a workstation with other people looking at the screen',
    caption: 'A moment at the workstation',
    category: 'Competition',
  },
  {
    slug: 'web-technologies-hall',
    alt: 'Wide view of Web Technologies competitors and experts posing in the exhibition hall',
    caption: 'The Web Technologies hall',
    category: 'Competition',
  },
  {
    slug: 'opening-ceremony-flag',
    alt: 'Moroccan delegation waving and carrying the national flag during the opening ceremony',
    caption: 'Carrying the Moroccan flag at the opening ceremony',
    category: 'Ceremonies',
  },
  {
    slug: 'traditional-dress-team',
    alt: 'Moroccan delegation in traditional dress posing with the national flag before the ceremony',
    caption: 'Team Morocco in traditional dress',
    category: 'Ceremonies',
  },
  {
    slug: 'traditional-dress-stairs',
    alt: 'Moroccan delegation in white djellabas and red fez lined up on a staircase',
    caption: 'Getting ready for the ceremony',
    category: 'Ceremonies',
  },
  {
    slug: 'traditional-dress-backstage',
    alt: 'Moroccan delegation in traditional dress backstage holding a Morocco placard',
    caption: 'Backstage before the parade',
    category: 'Ceremonies',
  },
  {
    slug: 'team-venue',
    alt: 'Moroccan team in red jackets lined up at the competition venue entrance',
    caption: 'Arriving at the venue',
    category: 'Team Morocco',
  },
  {
    slug: 'team-arrival',
    alt: 'Moroccan team posing together on an escalator',
    caption: 'Team Morocco on the way in',
    category: 'Team Morocco',
  },
  {
    slug: 'team-arrival-wide',
    alt: 'Moroccan team gathered on an escalator, wide shot',
    caption: 'Team Morocco on the way in',
    category: 'Team Morocco',
  },
  {
    slug: 'delegation-arrival',
    alt: 'Moroccan delegation holding the national flag in an arrivals hall',
    caption: 'The delegation lands in Shanghai',
    category: 'Team Morocco',
  },
  {
    slug: 'airport-departure',
    alt: 'Moroccan team members holding the flag at the airport before departure',
    caption: 'Departure from Morocco',
    category: 'Team Morocco',
  },
  {
    slug: 'team-selfie-flag',
    alt: 'Selfie of the Moroccan team holding the national flag',
    caption: 'Team selfie with the flag',
    category: 'Team Morocco',
  },
  {
    slug: 'team-bus-to-venue',
    alt: 'Moroccan team members seated on a bus heading to the venue',
    caption: 'On the bus to the venue',
    category: 'Team Morocco',
  },
  {
    slug: 'huangpu-river-skyline',
    alt: 'Moroccan team on the Huangpu River with Shanghai skyscrapers in the background',
    caption: 'Shanghai skyline from the river',
    category: 'Shanghai',
  },
];

// ---------------------------------------------------------------------------

const galleryFiles = require.context('../assets/gallery', false, /\.webp$/);

/** Responsive sources for a processed photo: { src, srcSet, full, width, height }. */
function photoSources(slug, preferredWidth = 1280) {
  const meta = manifest[slug];
  if (!meta) return null;

  const url = (width) => galleryFiles(`./${slug}-${width}.webp`);
  const src = meta.widths.find((w) => w >= preferredWidth) || meta.widths[meta.widths.length - 1];

  return {
    src: url(src),
    srcSet: meta.widths.map((w) => `${url(w)} ${w}w`).join(', '),
    full: url(meta.widths[meta.widths.length - 1]),
    width: meta.width,
    height: meta.height,
  };
}

const listed = new Set(photoList.map((photo) => photo.slug));

const unlisted = Object.keys(manifest)
  .filter((slug) => !listed.has(slug))
  .map((slug) => ({
    slug,
    alt: 'Team Morocco at WorldSkills Shanghai 2026',
    caption: '',
    category: 'Team Morocco',
  }));

export const photos = [...photoList, ...unlisted]
  .filter((photo) => manifest[photo.slug])
  .map((photo) => ({ ...photo, ...photoSources(photo.slug) }));

export const featuredPhotos = photos.filter((photo) => photo.featured).slice(0, 8);

export const getPhoto = (slug) => photos.find((photo) => photo.slug === slug);
