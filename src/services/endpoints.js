const API = process.env.NEXT_PUBLIC_API_ENTRY_POINT;
const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE_ENTRY_POINT;

export const home = `${API}/home`;
export const theme = `${API}/theme`;
export const about = `${API}/about`;
export const clients = `${API}/clients`;
export const contact = `${API}/contact`;
export const careers = `${API}/careers`;
export const notfound = `${API}/notfound`;
export const portfolio = `${API}/portfolio`;

export const projects = `${API}/projects`;
export const testimonials = `${API}/testimonials`;
export const compatibilities = `${API}/compatibilities`;
export const projectCategories = `${API}/project-categories`;
export const projectTechnologies = `${API}/project-technologies`;

export const enquiry = `${API}/inquiry`;
export const careersApplication = `${API}/careers-application`;
export const compatibilitiesApplication = `${API}/compatibilities-application`;
export const projectSingle = `${API}/project?slug=`;
export const ogImage = `${OG_IMAGE}/og-image?title=`;
