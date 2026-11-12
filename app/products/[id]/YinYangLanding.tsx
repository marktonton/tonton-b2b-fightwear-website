import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/yin-yang-product.json';
import schema from '../../../data/yin-yang-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function YinYangLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="mmaShorts"/></>;}
