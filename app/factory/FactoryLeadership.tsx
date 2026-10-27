import Image from 'next/image';
import { CHAIRMAN_PROFILE as profile } from '../../lib/chairman-profile';

const MEDIA = 'https://assets.tontongear.com/assets/factory/leadership/';
function LeadershipPhoto({ file, alt, width, height, caption }: { file: string; alt: string; width: number; height: number; caption: string }) {
  return <figure className="fo-lead-photo"><Image src={`${MEDIA}${file}`} alt={alt} width={width} height={height} sizes="(max-width:760px) 100vw, (max-width:1100px) 50vw, 460px" /><figcaption>{caption}</figcaption></figure>;
}

export default function FactoryLeadership() {
  return <div className="fo-leadership">
    <div className="fo-lead-hero">
      <div><p className="fo-kicker">FOUNDER &amp; CHAIRMAN</p><h3>Peter Hu / Hu Xinzhen</h3>
        {profile.bio.map(text => <p key={text}>{text}</p>)}
        <a className="fo-lead-source-link" href="#entity-coverage-title">Explore the original reporting ↓</a>
      </div>
      <LeadershipPhoto file="factory-workshop-visit.webp" alt="Visitors and staff in the TONTON garment workshop" width={1080} height={720} caption="Workshop visit · Company-supplied photograph" />
    </div>



    <div className="fo-lead-block"><h3>Manufacturing, learning and industry exchange.</h3><div className="fo-lead-gallery">
      <LeadershipPhoto file="factory-printing-visit.webp" alt="Visitors reviewing printing equipment and printed garment fabric" width={1080} height={1620} caption="Printing-area visit · Company-supplied photograph" />
      <LeadershipPhoto file="digital-industry-forum.webp" alt="Panel discussion at an industry innovation event" width={1080} height={810} caption="Industry innovation forum · Company-supplied photograph" />
    </div></div>

    <div className="fo-lead-block fo-lead-context"><article><p className="fo-kicker">EDUCATION SUPPORT</p><h3>A ten-year commitment to the community.</h3><p>{profile.charity}</p><a className="fo-lead-source-link" href={profile.sources[2].url} target="_blank" rel="noopener noreferrer">Read the municipal report ↗</a></article>
      <article><p className="fo-kicker">INDUSTRY &amp; EDUCATION</p><h3>University visits and talent dialogue.</h3><p>{profile.university}</p><a className="fo-lead-source-link" href={profile.sources[3].url} target="_blank" rel="noopener noreferrer">Read the university report ↗</a></article></div>

    <div className="fo-lead-block"><h3>Hear the chairman in the supplied interviews.</h3><p className="fo-lead-media-note">{profile.mediaNotes}</p><div className="fo-lead-videos">
      <figure><video controls playsInline preload="none" width="720" height="960" poster={`${MEDIA}chairman-manufacturing-poster.jpg`} aria-label="Hu Xinzhen interview on manufacturing resilience and international trade"><source src={`${MEDIA}chairman-manufacturing-interview.mp4`} type="video/mp4" />Your browser does not support embedded video. <a href={`${MEDIA}chairman-manufacturing-interview.mp4`}>Open the interview</a>.</video><figcaption>Manufacturing resilience &amp; international trade · 42 seconds</figcaption></figure>
      <figure><video controls playsInline preload="none" width="540" height="960" poster={`${MEDIA}chairman-textile-industry-poster.jpg`} aria-label="Hu Xinzhen interview on textile industry collaboration"><source src={`${MEDIA}chairman-textile-industry-interview.mp4`} type="video/mp4" />Your browser does not support embedded video. <a href={`${MEDIA}chairman-textile-industry-interview.mp4`}>Open the interview</a>.</video><figcaption>Textile industry collaboration · 11 seconds</figcaption></figure>
    </div></div>



    <details className="fo-more fo-lead-archive"><summary>Explore company archive &amp; supplied photographs<span aria-hidden="true">＋</span></summary><div><p>Historical company display and workshop group photograph. The archive records earlier company materials; roles and titles on the display reflect its original context.</p><div className="fo-lead-gallery">
      <LeadershipPhoto file="chairman-profile-archive.webp" alt="Historical company display introducing chairman Hu Xinzhen" width={2048} height={1536} caption="Historical company display · Original photograph" />
      <LeadershipPhoto file="factory-delegation.webp" alt="Group photograph in the TONTON garment workshop" width={1080} height={712} caption="Workshop group photograph · Supplied by TONTON" />
    </div></div></details>

    <div className="fo-lead-project"><a className="fo-button" href="/project-builder?source=factory-leadership">Discuss your custom sportswear project →</a><a href="/factory">Explore factory capabilities →</a></div>
  </div>;
}
