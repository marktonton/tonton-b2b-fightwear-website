import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/cosmic-blast-product.json';
import schema from '../../../data/cosmic-blast-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function CosmicBlastLanding() {
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} /><div dangerouslySetInnerHTML={{ __html: content.html }} /><BuyerLearningPath family="rashGuard" /></>;
}
