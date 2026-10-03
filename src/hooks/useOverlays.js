import { useState } from 'react';
import Lightbox from '../components/ui/Lightbox';
import VideoPlayer from '../components/ui/VideoPlayer';

/** `const [open, lightbox] = useLightbox(photos)` → call open(index), render {lightbox}. */
export function useLightbox(photos) {
  const [index, setIndex] = useState(null);

  const element =
    index === null ? null : (
      <Lightbox photos={photos} index={index} onIndexChange={setIndex} onClose={() => setIndex(null)} />
    );

  return [setIndex, element];
}

/** `const [play, player] = useVideoPlayer()` → call play(item), render {player}. */
export function useVideoPlayer() {
  const [item, setItem] = useState(null);
  const element = item && <VideoPlayer item={item} onClose={() => setItem(null)} />;
  return [setItem, element];
}
