import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/tactical-olive-product.json';
import schema from '../../../data/tactical-olive-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function TacticalOliveLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="rashGuard"/></>;}
