import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/spec-ops-jungle-product.json';
import schema from '../../../data/spec-ops-jungle-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
import './dazzle-vector.css';
export default function SpecOpsJungleLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="rashGuard"/></>;}
