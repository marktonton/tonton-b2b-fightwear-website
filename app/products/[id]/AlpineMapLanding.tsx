import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/alpine-map-product.json';
import schema from '../../../data/alpine-map-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function AlpineMapLanding() {
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} /><div dangerouslySetInnerHTML={{ __html: content.html }} /><BuyerLearningPath family="rashGuard" /></>;
}
