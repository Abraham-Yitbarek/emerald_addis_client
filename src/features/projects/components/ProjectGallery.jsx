import React from 'react';
import ImageGallery from '../../../components/common/ImageGallery';
export default function ProjectGallery({ project }) {
  const images=(project?.images||[project?.image]).filter(Boolean);
  return <ImageGallery images={images} title={project?.name}/>;
}
