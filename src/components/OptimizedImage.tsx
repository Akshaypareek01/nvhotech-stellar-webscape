import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

/**
 * Optimized Image Component for Performance
 * - Automatically handles lazy loading
 * - Sets proper aspect ratio
 * - Prioritizes LCP images
 * - Adds decoding="async" for better performance
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{ 
        aspectRatio: `${width}/${height}`,
        ...props.style 
      }}
      {...props}
    />
  );
};
