import { useEffect, useState } from 'react';
import projectService from '../services/projectService';
export default function useProjects() {
  const [projects,setProjects]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState('');
  useEffect(()=>{let active=true;projectService.getAll().then(data=>{if(active)setProjects(Array.isArray(data)?data:data?.data||[])}).catch(e=>{if(active)setError(e.message)}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[]);
  return {projects,loading,error};
}
