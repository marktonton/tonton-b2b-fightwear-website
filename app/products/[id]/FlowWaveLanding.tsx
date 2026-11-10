import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/flow-wave-product.json';
import schema from '../../../data/flow-wave-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function FlowWaveLanding() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} /><div dangerouslySetInnerHTML={{ __html: content.html }} /><BuyerLearningPath family="rashGuard" /></>;
}
