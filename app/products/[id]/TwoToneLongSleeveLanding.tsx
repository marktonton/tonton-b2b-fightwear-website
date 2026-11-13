import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/two-tone-long-sleeve-product.json';
import schema from '../../../data/two-tone-long-sleeve-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function TwoToneLongSleeveLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="rashGuard"/></>;}
