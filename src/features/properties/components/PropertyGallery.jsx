import React from 'react';
import ImageGallery from '../../../components/common/ImageGallery';
export default function PropertyGallery({ property }) {
  const images = (property?.images?.length ? property.images : [property?.image]).filter(Boolean).map((src,i)=>({src,alt:`${property.title} view ${i+1}`}));
  return <ImageGallery images={images} title={property?.title}/>;
}
