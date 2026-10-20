'use client';

import { useState } from 'react';

type Props = {
  src: string;
  lighterSrc?: string;
  poster: string;
  label: string;
  width: number;
  height: number;
};

export default function FactoryVideo({ src, lighterSrc, poster, label, width, height }: Props) {
  const [lighter, setLighter] = useState(Boolean(lighterSrc));
  const [failed, setFailed] = useState(false);
  const activeSrc = lighter && lighterSrc ? lighterSrc : src;

  return <div className="factory-video-player">
    {lighterSrc && <div className="factory-video-quality" role="group" aria-label={`${label} quality`}>
      <button type="button" aria-pressed={!lighter} onClick={() => { setLighter(false); setFailed(false); }}>1080p HD</button>
      <button type="button" aria-pressed={lighter} onClick={() => { setLighter(true); setFailed(false); }}>720p · Faster loading</button>
    </div>}
    <video key={activeSrc} controls playsInline muted preload="metadata" poster={poster}
      width={width} height={height} aria-label={label} data-factory-video
      onError={() => setFailed(true)}
      onPlay={(event) => {
        document.querySelectorAll<HTMLVideoElement>('video[data-factory-video]').forEach((video) => {
          if (video !== event.currentTarget) video.pause();
        });
      }}>
      <source src={activeSrc} type="video/mp4" />
      <a href={activeSrc}>Open video</a>
    </video>
    {lighterSrc && <p className="factory-video-help">720p loads first. Select 1080p for extra detail, then press play.</p>}
    {failed && <p className="factory-video-help" role="status">Video could not load. {lighterSrc && !lighter ? 'Try 720p or ' : ''}<a href={activeSrc} target="_blank" rel="noreferrer">open the video directly</a>.</p>}
  </div>;
}
