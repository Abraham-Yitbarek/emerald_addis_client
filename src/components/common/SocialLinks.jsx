import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
const socials = [{name:'Instagram',href:'https://instagram.com',Icon:Instagram},{name:'Facebook',href:'https://facebook.com',Icon:Facebook},{name:'LinkedIn',href:'https://linkedin.com',Icon:Linkedin}];
export default function SocialLinks() {
  return <div className="ea-socials">{socials.map(({name,href,Icon}) => <a key={name} href={href} aria-label={name} target="_blank" rel="noreferrer"><Icon size={17}/></a>)}</div>;
}
