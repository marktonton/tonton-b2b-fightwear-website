import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/dual-tone-product.json';
import schema from '../../../data/dual-tone-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function DualToneLanding() {
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} /><div dangerouslySetInnerHTML={{ __html: content.html }} /><BuyerLearningPath family="rashGuard" /></>;
}
