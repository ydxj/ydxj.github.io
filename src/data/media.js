// Videos for the "Media & Videos" section and the /media page.
//
// Supported `type` values:
//   youtube  → `id` is the YouTube video id; thumbnail is derived automatically
//   video    → `src` points to a local file (import it) or a direct .mp4 URL
//   external → `url` opens in a new tab (news sites, TV replays, …)
//
// Optional: `thumbnail` (overrides the default), `duration` ("m:ss"),
// `date`, `featured` (shown on the home page, max 4).

export const media = [
  {
    title: "Les candidats de l'OFPPT en route vers WorldSkills Shanghai 2026",
    type: 'youtube',
    id: '24ni-ardJGE',
    source: 'OFPPT',
    duration: '1:31',
    context: "Report on Morocco's delegation flying out to Shanghai: 14 competitors across 12 skills.",
    featured: true,
  },
  {
    title: "Déclaration de la Directrice Générale sur la participation de l'OFPPT à WorldSkills",
    type: 'youtube',
    id: 'xb6_wV68t9s',
    source: 'OFPPT',
    duration: '5:34',
    context: 'Official statement on the OFPPT team at the opening of the 48th WorldSkills Competition.',
    featured: true,
  },
];

export const featuredMedia = media.filter((item) => item.featured).slice(0, 4);

export function mediaThumbnail(item) {
  if (item.thumbnail) return item.thumbnail;
  if (item.type === 'youtube') return `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;
  return null;
}

export function mediaUrl(item) {
  if (item.type === 'youtube') return `https://www.youtube.com/watch?v=${item.id}`;
  return item.url || item.src;
}
