import PageIntro from '../components/layout/PageIntro';
import VideoCard from '../components/ui/VideoCard';
import { media, mediaKey } from '../data/media';
import { useVideoPlayer } from '../hooks/useOverlays';
import usePageMeta from '../hooks/usePageMeta';

const MediaPage = () => {
  const [play, player] = useVideoPlayer();

  usePageMeta({
    title: 'Media & Videos · Omar Zerhouni',
    description:
      'TV reports, interviews and official coverage of Omar Zerhouni and Team Morocco at WorldSkills Shanghai 2026.',
    path: '/media',
  });

  return (
    <>
      <PageIntro
        backTo="media"
        eyebrow="Media"
        title="Media & Videos"
        lead="TV reports, interviews and official coverage of Team Morocco's journey to WorldSkills Shanghai 2026."
      />
      <section className="container section--tight-top section" aria-label="All videos">
        <div className={`video-grid${media.length < 3 ? ' video-grid--few' : ''}`}>
          {media.map((item) => (
            <VideoCard key={mediaKey(item)} item={item} onPlay={play} />
          ))}
        </div>
      </section>
      {player}
    </>
  );
};

export default MediaPage;
