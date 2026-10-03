import { FiExternalLink, FiPlay } from 'react-icons/fi';
import { mediaThumbnail, mediaUrl } from '../../data/media';
import './VideoCard.css';

/** Thumbnail card. Plays in an overlay via `onPlay`, or links out for `external` items. */
const VideoCard = ({ item, onPlay }) => {
  const thumbnail = mediaThumbnail(item);
  const external = item.type === 'external';

  const media = (
    <span className="video-card__media">
      {thumbnail && <img src={thumbnail} alt="" loading="lazy" decoding="async" width="480" height="360" />}
      {item.duration && <span className="video-card__duration">{item.duration}</span>}
      <span className="video-card__play" aria-hidden="true">
        {external ? <FiExternalLink /> : <FiPlay />}
      </span>
    </span>
  );

  const body = (
    <>
      {media}
      <span className="video-card__body">
        <span className="video-card__title">{item.title}</span>
        <span className="video-card__source">{item.source}</span>
        {item.context && <span className="video-card__context">{item.context}</span>}
      </span>
    </>
  );

  return (
    <article className="video-card" data-reveal>
      {external ? (
        <a className="video-card__hit" href={mediaUrl(item)} target="_blank" rel="noopener noreferrer">
          {body}
        </a>
      ) : (
        <button type="button" className="video-card__hit" onClick={() => onPlay(item)} aria-label={`Play video: ${item.title}`}>
          {body}
        </button>
      )}
    </article>
  );
};

export default VideoCard;
