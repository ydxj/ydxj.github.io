import { useRef } from 'react';
import { featuredMedia, media, mediaKey } from '../../data/media';
import { useVideoPlayer } from '../../hooks/useOverlays';
import useReveal from '../../hooks/useReveal';
import SectionHeader from '../ui/SectionHeader';
import VideoCard from '../ui/VideoCard';

const MediaPreview = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const [play, player] = useVideoPlayer();

  if (!featuredMedia.length) return null;

  return (
    <section id="media" className="section section--tight-top" ref={rootRef} aria-labelledby="media-title" tabIndex={-1}>
      <div className="container">
        <SectionHeader
          id="media-title"
          title="Media & Videos"
          subtitle="TV reports, interviews and official coverage of Team Morocco at WorldSkills."
          action={{ to: '/media', label: `View all media (${media.length})` }}
        />
        <div className={`video-grid${featuredMedia.length < 3 ? ' video-grid--few' : ''}`}>
          {featuredMedia.map((item) => (
            <VideoCard key={mediaKey(item)} item={item} onPlay={play} />
          ))}
        </div>
      </div>
      {player}
    </section>
  );
};

export default MediaPreview;
