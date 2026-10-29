import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/cyber-gradient-product.json';
import schema from '../../../data/cyber-gradient-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './white-compression.css';
export default function CyberGradientShortsLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="trainingShorts"/></>;}
