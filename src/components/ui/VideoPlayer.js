import Modal from './Modal';
import './VideoPlayer.css';

/** Plays a media item in an overlay. The YouTube iframe only exists while open. */
const VideoPlayer = ({ item, onClose }) => (
  <Modal label={item.title} variant="media" onClose={onClose}>
    <div className="video-player">
      <div className="video-player__frame">
        {item.type === 'youtube' ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={item.src} poster={item.thumbnail} controls autoPlay playsInline />
        )}
      </div>
      <div className="video-player__meta">
        <p className="video-player__title">{item.title}</p>
        <p className="video-player__source">{item.source}</p>
      </div>
    </div>
  </Modal>
);

export default VideoPlayer;
