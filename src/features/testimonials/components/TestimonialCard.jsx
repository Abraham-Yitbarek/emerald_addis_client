import React from 'react';
import { Quote } from 'lucide-react';
export default function TestimonialCard({ testimonial }) {
 return <article className="ea-testimonial"><Quote/><blockquote>“{testimonial.quote}”</blockquote><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></article>;
}
