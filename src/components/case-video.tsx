"use client";

import { useEffect, useRef } from "react";

/**
 * Видео-запись проекта в кейсе (десктоп). Не грузим и не проигрываем, пока
 * кадр не появился в зоне видимости — экономим трафик и не тянем ~1 МБ за
 * пределами экрана (важно для Core Web Vitals и мобильных сетей СНГ).
 */
export function CaseVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
