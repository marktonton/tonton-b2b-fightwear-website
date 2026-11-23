import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/dazzle-vector-product.json';
import schema from '../../../data/dazzle-vector-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function DazzleVectorLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="mmaShorts"/></>;}
