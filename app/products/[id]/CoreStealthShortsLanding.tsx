import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/core-stealth-product.json';
import schema from '../../../data/core-stealth-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './white-compression.css';
import './core-stealth.css';
export default function CoreStealthShortsLanding() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} /><div dangerouslySetInnerHTML={{ __html: content.html }} /><BuyerLearningPath family="trainingShorts" /></>;
}
