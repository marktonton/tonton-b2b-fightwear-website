import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/white-compression-product.json';
import schema from '../../../data/white-compression-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './white-compression.css';

// Fixed, reviewed product copy. Server rendering keeps the entire page readable without JavaScript.
export default function WhiteCompressionLanding() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} />
    <div dangerouslySetInnerHTML={{ __html: content.html }} />
    <BuyerLearningPath family="rashGuard" />
  </>;
}
