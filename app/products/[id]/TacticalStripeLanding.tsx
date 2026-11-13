import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/tactical-stripe-product.json';
import schema from '../../../data/tactical-stripe-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function TacticalStripeLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="mmaShorts"/></>;}
