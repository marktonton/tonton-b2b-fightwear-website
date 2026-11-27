import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/concrete-grey-product.json';
import schema from '../../../data/concrete-grey-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
import './dazzle-vector.css';
export default function ConcreteGreyLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="mmaShorts"/></>;}
