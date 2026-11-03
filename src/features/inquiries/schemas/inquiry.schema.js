export function validateInquiry(values) {
 const errors = {};
 if(!values.name?.trim()) errors.name='Please enter your name.';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email||'')) errors.email='Enter a valid email address.';
 if(!values.message?.trim()) errors.message='Please tell us how we can help.';
 return errors;
}
