import React from 'react';
import { HeartHandshake, ShieldCheck, Lightbulb, Users } from 'lucide-react';
const values=[['People first',HeartHandshake,'We listen carefully and put each client’s needs at the centre.'],['Integrity',ShieldCheck,'We value transparency, accountability and clear communication.'],['Thoughtfulness',Lightbulb,'We pay attention to the details that make decisions easier.'],['Local understanding',Users,'We build knowledge through our connection to the city and its communities.']];
export default function CompanyValues() {
 return <div className="ea-values-grid">{values.map(([title,Icon,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>;
}
