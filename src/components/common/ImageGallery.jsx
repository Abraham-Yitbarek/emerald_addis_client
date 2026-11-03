import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
export default function ImageGallery({ images = [], title = 'Property images' }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  if (!images.length) return null;
  const move = step => setActive(current => (current + step + images.length) % images.length);
  return <div className="ea-gallery"><div className="ea-gallery-main">
    <img src={images[active].src || images[active]} alt={images[active].alt || title} onClick={() => setZoom(true)}/>
    {images.length > 1 && <><button onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft/></button><button onClick={() => move(1)} aria-label="Next image"><ChevronRight/></button></>}
    <span>{active + 1} / {images.length}</span></div>
    {images.length > 1 && <div className="ea-gallery-thumbs">{images.map((img,i)=><button key={i} className={active===i?'active':''} onClick={()=>setActive(i)}><img src={img.src || img} alt={img.alt || `${title} ${i+1}`}/></button>)}</div>}
    {zoom && <div className="ea-gallery-lightbox" onClick={()=>setZoom(false)}><button aria-label="Close image"><X/></button><img src={images[active].src || images[active]} alt={title}/></div>}
  </div>;
}
