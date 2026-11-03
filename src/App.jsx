import React, { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, Search, MapPin, ChevronDown, Building2, Home as HomeIcon, KeyRound, Trees, ShieldCheck, Handshake, Sparkles, Quote, Check, Phone, Mail, MapPinned, Instagram, Facebook, Linkedin, Menu, BedDouble, MoveUpRight } from 'lucide-react';
import Header from './components/Header';
import Logo from './components/Logo';
import PropertyCard from './components/PropertyCard';
import { properties, projects } from './data';

const categories = [
  { name: 'Apartments', count: 'Explore city living', icon: Building2 },
  { name: 'Houses & Villas', count: 'Room to make your own', icon: HomeIcon },
  { name: 'Commercial', count: 'Spaces for business', icon: KeyRound },
  { name: 'Land & Plots', count: 'Possibilities start here', icon: Trees }
];

const services = [
  { icon: HomeIcon, title: 'Property sales', text: 'Thoughtful guidance from the first conversation to the final handover.' },
  { icon: KeyRound, title: 'Property rentals', text: 'Find a place that fits your lifestyle, timeline and budget.' },
  { icon: Building2, title: 'Property advisory', text: 'Clear, informed support to help you make confident property decisions.' },
  { icon: Trees, title: 'Property management', text: 'Reliable care and considered oversight for property owners.' }
];

function SectionHeading({ eyebrow, title, text, link, href = '#properties', centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
    {link && <a className="text-link" href={href}>{link}<ArrowUpRight size={17}/></a>}
  </div>;
}

function Hero() {
  const [purpose, setPurpose] = useState('Buy');
  const [kind, setKind] = useState('Any property');
  const [location, setLocation] = useState('');
  const submit = (e) => {
    e.preventDefault();
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };
  return <section className="hero" id="home">
    <div className="container hero-content">
      <div className="hero-kicker"><span></span> A better way to find your place</div>
      <h1>Find a place<br/>to <em>belong.</em></h1>
      <p className="hero-description">Discover thoughtfully selected properties and new possibilities across Addis Ababa.</p>
      <form className="search-panel" onSubmit={submit}>
        <div className="search-tabs">{['Buy','Rent'].map(p => <button type="button" key={p} className={purpose === p ? 'active' : ''} onClick={() => setPurpose(p)}>{p}</button>)}</div>
        <div className="search-fields">
          <label className="search-field location-field"><span>Location</span><div><MapPin size={17}/><input value={location} onChange={e => setLocation(e.target.value)} placeholder="Where would you like to live?"/></div></label>
          <label className="search-field"><span>Property type</span><div><Building2 size={17}/><select value={kind} onChange={e => setKind(e.target.value)}><option>Any property</option><option>Apartment</option><option>Villa</option><option>House</option><option>Commercial</option></select><ChevronDown size={15}/></div></label>
          <button className="button button-green search-submit" type="submit"><Search size={17}/> Search properties</button>
        </div>
      </form>
      <div className="hero-footnote"><span>01 / 03</span><span className="hero-line"></span><span>Curated homes. Considered living.</span></div>
    </div>
    <div className="hero-side-note">ADDIS ABABA · ETHIOPIA</div>
  </section>;
}

function Stats() {
  return <section className="stats-strip"><div className="container stats-grid">
    <div><strong>01</strong><span>Personalised<br/>property guidance</span></div>
    <div><strong>02</strong><span>Spaces for every<br/>stage of life</span></div>
    <div><strong>03</strong><span>Local insight,<br/>considered service</span></div>
    <div className="stats-note">A thoughtful approach<br/>to finding what’s next.</div>
  </div></section>;
}

function Categories() {
  return <section className="section categories-section"><div className="container">
    <SectionHeading eyebrow="Explore possibilities" title="Find your kind of space" text="From a first apartment to a place to grow your business, start with what matters to you."/>
    <div className="category-grid">{categories.map(({name,count,icon:Icon},i) => <a className="category-card" href="#properties" key={name}><span className="category-number">0{i+1}</span><span className="category-icon"><Icon size={25} strokeWidth={1.5}/></span><h3>{name}</h3><p>{count}</p><span className="category-arrow"><ArrowUpRight size={19}/></span></a>)}</div>
  </div></section>;
}

function FeaturedProperties() {
  const [saved, setSaved] = useState([]);
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => filter === 'All' ? properties.slice(0,3) : properties.filter(p => p.type === filter).slice(0,3), [filter]);
  const toggle = id => setSaved(current => current.includes(id) ? current.filter(x => x !== id) : [...current,id]);
  return <section className="section featured-section" id="properties"><div className="container">
    <SectionHeading eyebrow="The property edit" title="Spaces worth discovering" text="A considered selection of homes and spaces in Addis Ababa." link="View all properties" href="#contact"/>
    <div className="filter-row"><div className="filter-pills">{['All','For sale','For rent'].map(f=><button key={f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><span className="results-note">A selection from our portfolio</span></div>
    <div className="property-grid">{visible.length ? visible.map(p=><PropertyCard key={p.id} property={p} onFavorite={toggle} saved={saved.includes(p.id)}/>) : <p className="empty-state">No properties in this category just yet. Please check back soon.</p>}</div>
    <div className="mobile-view-all"><a className="button button-outline" href="#contact">Explore properties <ArrowRight size={17}/></a></div>
  </div></section>;
}

function About() {
  return <section className="about-section section" id="about"><div className="container about-grid">
    <div className="about-visual"><img src="" alt="Warm contemporary living space" loading="lazy"/><div className="about-stamp"><span>THE ART OF</span><strong>finding<br/>your place.</strong><span>EMERALD ADDIS</span></div><div className="about-image-caption">Spaces that feel like they belong to you.</div></div>
    <div className="about-copy"><span className="eyebrow">A little about us</span><h2>Real estate is<br/>about <em>people.</em></h2><p className="about-lead">The right space can change how you live, work and imagine what comes next.</p><p>At Emerald Addis, we believe finding a property should feel considered, clear and personal. We bring together local understanding and a thoughtful approach to help people discover spaces that make sense for their lives and ambitions.</p><a className="button button-dark" href="#contact">Get to know us <ArrowUpRight size={17}/></a><div className="about-signature"><span className="signature-mark">E.</span><span><strong>Emerald Addis</strong><small>Property, thoughtfully considered.</small></span></div></div>
  </div></section>;
}

function Projects() {
  return <section className="section projects-section" id="projects"><div className="container">
    <SectionHeading eyebrow="Beyond the address" title="Places taking shape" text="Explore selected developments and places designed around the way we want to live." link="Discuss a project" href="#contact"/>
    <div className="project-grid">{projects.map((p,i)=><article className={`project-card project-${i+1}`} key={p.name}><img src={p.image} alt={p.name} loading="lazy"/><div className="project-overlay"></div><div className="project-content"><span className="project-status">{p.status}</span><h3>{p.name}</h3><p>{p.text}</p><div className="project-bottom"><span><MapPin size={14}/>{p.place}</span><a href="#contact" aria-label={`Enquire about ${p.name}`}><ArrowUpRight size={19}/></a></div></div></article>)}</div>
  </div></section>;
}

function Services() {
  return <section className="section services-section" id="services"><div className="container">
    <SectionHeading eyebrow="How we can help" title="A considered service, at every step" text="Whether you are buying, renting or looking after a property, we are here to make the process feel simpler."/>
    <div className="services-grid">{services.map(({icon:Icon,title,text},i)=><div className="service-item" key={title}><span className="service-index">0{i+1}</span><span className="service-icon"><Icon size={25} strokeWidth={1.5}/></span><h3>{title}</h3><p>{text}</p><a href="#contact">Explore service <ArrowUpRight size={16}/></a></div>)}</div>
  </div></section>;
}

function Values() {
  return <section className="values-section"><div className="container values-grid">
    <div className="values-intro"><span className="eyebrow eyebrow-light">The Emerald difference</span><h2>Good decisions<br/>start with <em>trust.</em></h2><p>Property decisions are significant. We believe the experience should be built on clarity, care and a genuine understanding of what matters to you.</p><a className="button button-light" href="#contact">Start a conversation <ArrowUpRight size={17}/></a></div>
    <div className="values-list">
      <div><span><ShieldCheck size={23}/></span><section><h3>Clarity at every step</h3><p>Helpful information and straightforward guidance, without the noise.</p></section></div>
      <div><span><Handshake size={23}/></span><section><h3>People-first service</h3><p>We take time to understand your priorities before recommending a direction.</p></section></div>
      <div><span><Sparkles size={23}/></span><section><h3>Quality with purpose</h3><p>Thoughtfully selected spaces and a focus on the details that make a difference.</p></section></div>
    </div>
  </div></section>;
}

function Testimonial() {
  return <section className="section testimonial-section"><div className="container testimonial-inner"><span className="eyebrow">Kind words</span><Quote className="quote-icon" size={34}/><blockquote>“The process felt personal from the very beginning. We had clear guidance, thoughtful options and the confidence to make the right decision for our family.”</blockquote><div className="testimonial-author"><span className="author-avatar">A</span><span><strong>Alexandra M.</strong><small>Property client · Addis Ababa</small></span></div><span className="testimonial-disclaimer">Illustrative testimonial — replace with an approved customer review before launch.</span></div></section>;
}

function Contact() {
  const [sent,setSent] = useState(false);
  const [form,setForm] = useState({name:'',email:'',phone:'',interest:'Buying a property',message:''});
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => { e.preventDefault(); setSent(true); };
  return <section className="contact-section section" id="contact"><div className="container contact-grid">
    <div className="contact-copy"><span className="eyebrow eyebrow-light">Your next chapter starts here</span><h2>Let’s find<br/>what’s <em>next.</em></h2><p>Tell us a little about what you are looking for. Our team would be happy to start a conversation.</p>
      <div className="contact-details"><a href="tel:+251000000000"><span><Phone size={18}/></span><div><small>Call us</small><strong>+251 (0) 00 000 0000</strong></div></a><a href="mailto:hello@emeraldaddis.com"><span><Mail size={18}/></span><div><small>Email us</small><strong>hello@emeraldaddis.com</strong></div></a><div><span><MapPinned size={18}/></span><div><small>Find us</small><strong>Addis Ababa, Ethiopia</strong></div></div></div>
    </div>
    <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>GET IN TOUCH</span><h3>Tell us what you have in mind.</h3></div>
      {sent ? <div className="form-success"><span><Check size={24}/></span><h3>Thank you for reaching out.</h3><p>Your message has been prepared in this demo. Connect this form to your backend to receive real inquiries.</p><button type="button" className="text-link" onClick={()=>setSent(false)}>Send another message</button></div> : <>
      <div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Full name" required/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label></div>
      <div className="form-row"><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+251 ..." /></label><label>I'm interested in<select name="interest" value={form.interest} onChange={update}><option>Buying a property</option><option>Renting a property</option><option>Selling a property</option><option>Property management</option><option>Project enquiry</option><option>Something else</option></select></label></div>
      <label>Message<textarea name="message" value={form.message} onChange={update} placeholder="Share a little about what you are looking for..." rows="4" required/></label>
      <button className="button button-green form-submit" type="submit">Send an enquiry <ArrowUpRight size={17}/></button><small className="form-privacy">By submitting, you agree that Emerald Addis may contact you about your enquiry.</small>
      </>}
    </form>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo light/><p>Thoughtful property guidance.<br/>Spaces to make your own.</p><div className="social-links"><a href="#contact" aria-label="Instagram"><Instagram size={17}/></a><a href="#contact" aria-label="Facebook"><Facebook size={17}/></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={17}/></a></div></div>
    <div className="footer-col"><h4>Explore</h4><a href="#properties">Properties</a><a href="#projects">Our projects</a><a href="#services">Our services</a><a href="#about">About us</a></div>
    <div className="footer-col"><h4>Get in touch</h4><a href="mailto:hello@emeraldaddis.com">hello@emeraldaddis.com</a><a href="tel:+251000000000">+251 (0) 00 000 0000</a><span>Addis Ababa, Ethiopia</span></div>
    <div className="footer-note"><span className="eyebrow eyebrow-light">A place to begin</span><h3>Let’s make<br/>room for more.</h3><a href="#contact">Talk to our team <ArrowUpRight size={16}/></a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Emerald Addis. All rights reserved.</span><div><a href="#contact">Privacy policy</a><a href="#contact">Terms of use</a></div><span>Made for living well.</span></div></div></footer>;
}

export default function App() {
  return <><Header/><main><Hero/><Stats/><Categories/><FeaturedProperties/><About/><Projects/><Services/><Values/><Testimonial/><Contact/></main><Footer/></>;
}