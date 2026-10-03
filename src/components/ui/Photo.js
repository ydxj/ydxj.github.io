/** Responsive gallery image with intrinsic size reserved to avoid layout shift. */
const Photo = ({ photo, sizes, className, priority = false, ...rest }) => (
  <img
    className={className}
    src={photo.src}
    srcSet={photo.srcSet}
    sizes={sizes}
    width={photo.width}
    height={photo.height}
    alt={photo.alt}
    loading={priority ? 'eager' : 'lazy'}
    decoding={priority ? 'sync' : 'async'}
    fetchPriority={priority ? 'high' : undefined}
    {...rest}
  />
);

export default Photo;
