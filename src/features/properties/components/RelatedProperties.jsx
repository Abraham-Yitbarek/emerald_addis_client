import React from 'react';
import SectionHeading from '../../../components/common/SectionHeading';
import PropertyGrid from './PropertyGrid';
export default function RelatedProperties({ properties = [] }) {
  if(!properties.length) return null;
  return <section className="ea-section"><SectionHeading eyebrow="You may also like" title="More places to discover"/><PropertyGrid properties={properties.slice(0,3)}/></section>;
}
