import { projects as sourceProjects } from '../../../data';
import { slugify } from '../../../lib/utils';
export const projectData = sourceProjects.map((project,index)=>({
  ...project, id:index+1, slug:slugify(project.name),
  images:[project.image,project.image,project.image],
  overview:project.text,
  highlights:['Thoughtful design','Connected neighbourhood','Quality-focused development','Spaces for community'],
  timeline:[{label:'Planning',status:'complete'},{label:'Development',status:'current'},{label:'Handover',status:'upcoming'}],
}));
export default projectData;
