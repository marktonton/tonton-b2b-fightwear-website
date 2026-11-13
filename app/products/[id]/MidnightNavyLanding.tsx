import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/midnight-navy-product.json';
import schema from '../../../data/midnight-navy-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
import './midnight-navy.css';
export default function MidnightNavyLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="mmaShorts"/></>;}
