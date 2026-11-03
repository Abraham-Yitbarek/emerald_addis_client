import { properties as landingProperties } from '../../../data';
import { slugify } from '../../../lib/utils';
export const propertyData = landingProperties.map((property, index) => ({
  ...property,
  slug: slugify(property.title),
  id: property.id ?? index + 1,
  images: [property.image, property.image, property.image],
  features: ['Natural light', 'Secure parking', 'Modern finishes', 'Convenient location'],
  address: property.location,
  yearBuilt: 2022,
  description: property.description,
}));
export default propertyData;
