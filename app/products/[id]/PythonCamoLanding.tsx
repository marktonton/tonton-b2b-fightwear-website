import BuyerLearningPath from '../../../components/BuyerLearningPath';
import content from '../../../data/python-camo-product.json';
import schema from '../../../data/python-camo-schema.json';
import { serializeStructuredData } from '../../../lib/structured-data';
import './dual-tone.css';
export default function PythonCamoLanding(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeStructuredData(schema)}}/><div dangerouslySetInnerHTML={{__html:content.html}}/><BuyerLearningPath family="rashGuard"/></>;}
