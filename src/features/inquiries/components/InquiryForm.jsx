import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Input, Textarea, Select, Button } from '../../../components/ui';
import useInquiryForm from '../hooks/useInquiryForm';
export default function InquiryForm({ compact = false, initialService = '' }) {
 const form=useInquiryForm();
 const update=(key,value)=>form.update(key,value);
 React.useEffect(()=>{if(initialService)update('service',initialService)},[initialService]);
 return <form className="ea-inquiry-form" onSubmit={form.submit} noValidate>
  <div className="ea-form-grid"><Input label="Your name" name="name" autoComplete="name" required placeholder="Full name" value={form.values.name} onChange={e=>update('name',e.target.value)} error={form.errors.name}/>
  <Input label="Email address" name="email" type="email" autoComplete="email" required placeholder="you@example.com" value={form.values.email} onChange={e=>update('email',e.target.value)} error={form.errors.email}/>
  {!compact&&<Input label="Phone number" name="phone" autoComplete="tel" placeholder="+251 ..." value={form.values.phone} onChange={e=>update('phone',e.target.value)}/>}
  <Select label="What can we help with?" name="service" value={form.values.service} onChange={e=>update('service',e.target.value)} options={[{value:'',label:'Choose a service'},{value:'Buying a property',label:'Buying a property'},{value:'Renting a property',label:'Renting a property'},{value:'Selling a property',label:'Selling a property'},{value:'Property sales',label:'Property sales'},{value:'Property rentals',label:'Property rentals'},{value:'Property advisory',label:'Property advisory'},{value:'Property management',label:'Property management'},{value:'Property marketing',label:'Property marketing'},{value:'Investment consultation',label:'Investment consultation'},{value:'Property enquiry',label:'Property enquiry'},{value:'Project enquiry',label:'Project enquiry'},{value:'Other',label:'Other'}]}/></div>
  <Textarea label="Your message" name="message" required rows={compact?4:5} placeholder="Tell us a little about what you are looking for..." value={form.values.message} onChange={e=>update('message',e.target.value)} error={form.errors.message}/>
  {form.notice&&<p className={`ea-form-notice ea-form-notice--${form.status}`}>{form.status==='success'&&<CheckCircle2 size={17}/>} {form.notice}</p>}
  <Button type="submit" loading={form.status==='loading'}><Send size={15}/> Send enquiry</Button>
  <small className="ea-form-disclaimer">Your information will only be used to respond to your enquiry.</small>
 </form>;
}
