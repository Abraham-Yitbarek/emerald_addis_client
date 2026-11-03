import { useState } from 'react';
import { validateInquiry } from '../schemas/inquiry.schema';
import { submitInquiry } from '../services/inquiryService';
const initial={name:'',email:'',phone:'',subject:'',service:'',message:''};
export default function useInquiryForm() {
 const [values,setValues]=useState(initial),[errors,setErrors]=useState({}),[status,setStatus]=useState('idle'),[notice,setNotice]=useState('');
 const update=(key,value)=>setValues(current=>({...current,[key]:value}));
 const submit=async event=>{
  event?.preventDefault();
  const nextErrors=validateInquiry(values);setErrors(nextErrors);
  if(Object.keys(nextErrors).length)return;
  setStatus('loading');setNotice('');
  try { const result=await submitInquiry(values);setStatus('success');setNotice(result?.message || 'Thank you. Your message has been received.');setValues(initial); }
  catch(error){setStatus('error');setNotice(error.message || 'Something went wrong. Please try again.');}
 };
 return {values,errors,status,notice,update,submit,reset:()=>{setValues(initial);setErrors({});setStatus('idle');setNotice('');}};
}
