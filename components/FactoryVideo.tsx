'use client';

import { useRef, useState } from 'react';

type Props = {
  src: string;
  lighterSrc?: string;
  poster: string;
  label: string;
  width: number;
  height: number;
  preload?: 'none' | 'metadata';
};

export default function FactoryVideo({ src, lighterSrc, poster, label, width, height, preload = 'metadata' }: Props) {
  const [lighter, setLighter] = useState(Boolean(lighterSrc));
  const [failed, setFailed] = useState(false);
  const activeSrc = lighter && lighterSrc ? lighterSrc : src;
  const player = useRef<HTMLVideoElement>(null);
  const resume = useRef<{ time: number; playing: boolean } | null>(null);
  function changeQuality(nextLighter: boolean) {
    if (nextLighter === lighter) return;
    const video = player.current;
    resume.current = video ? { time: video.currentTime, playing: !video.paused && !video.ended } : null;
    setLighter(nextLighter);
    setFailed(false);
  }

  return <div className="factory-video-player">
    {lighterSrc && <div className="factory-video-quality" role="group" aria-label={`${label} quality`}>
      <button type="button" aria-pressed={!lighter} onClick={() => changeQuality(false)}>1080p HD</button>
      <button type="button" aria-pressed={lighter} onClick={() => changeQuality(true)}>720p · Faster loading</button>
    </div>}
    <video ref={player} key={activeSrc} controls playsInline muted preload={resume.current ? 'metadata' : preload} poster={poster}
      width={width} height={height} aria-label={label} data-factory-video
      onLoadedMetadata={(event) => {
        const previous = resume.current;
        if (!previous) return;
        resume.current = null;
        const video = event.currentTarget;
        video.currentTime = Math.min(previous.time, Math.max(0, video.duration - 0.1));
        if (previous.playing) void video.play().catch(() => { /* Native play controls remain available. */ });
      }}
      onError={() => setFailed(true)}
      onPlay={(event) => {
        document.querySelectorAll<HTMLVideoElement>('video[data-factory-video]').forEach((video) => {
          if (video !== event.currentTarget) video.pause();
        });
      }}>
      <source src={activeSrc} type="video/mp4" />
      <a href={activeSrc}>Open video</a>
    </video>
    {lighterSrc && <p className="factory-video-help">720p is selected by default. Select 1080p for extra detail. Quality changes keep your playback position.</p>}
    {failed && <p className="factory-video-help" role="status">Video could not load. {lighterSrc && !lighter ? 'Try 720p or ' : ''}<a href={activeSrc} target="_blank" rel="noreferrer">open the video directly</a>.</p>}
  </div>;
}
