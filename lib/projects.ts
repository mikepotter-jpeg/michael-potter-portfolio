export interface Project {
  slug: string
  title: string
  description: string
  categories: string[]
  coverImage?: string
  content?: string
}

export const projects: Project[] = [
  {
    slug: 'export-service',
    title: 'Export Service',
    description: 'Account and access platform for Australia\'s export industry. I led end-to-end design serving 2,000+ regulated businesses, reducing registration times and simplifying compliance.',
    categories: ['Enterprise', 'Government', 'Identity'],
    coverImage: '/images/export-service.jpg',
    content: `
      <h2>Overview</h2>
      <p>Export Service is the Department of Agriculture's digital platform that enables Australian exporters to register, manage their accounts, and maintain compliance with export regulations.</p>
      
      <h2>The Challenge</h2>
      <p>The existing system was fragmented across multiple legacy applications, causing confusion for exporters and inefficiencies for staff. Registration times were lengthy, and compliance tracking was manual and error-prone.</p>
      
      <h2>My Role</h2>
      <p>As the lead product designer, I was responsible for:</p>
      <ul>
        <li>End-to-end design of the new unified platform</li>
        <li>User research with exporters and internal staff</li>
        <li>Creating and maintaining the design system</li>
        <li>Collaborating with engineering on implementation</li>
      </ul>
      
      <h2>Outcomes</h2>
      <p>The redesigned platform reduced registration times by 60% and improved user satisfaction scores significantly. The new self-service capabilities reduced the burden on support staff.</p>
    `,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export const recommendations = [
  {
    quote: `<p>I highly recommend Michael for any role requiring a thoughtful and technically adept and user focused interaction designer.</p><p>Throughout our time working together, Michael consistently demonstrated a deep commitment to advocating for the customer. He skillfully balanced user needs with technical constraints, often negotiating solutions that elevated both the experience and the feasibility of delivery. His ability to understand and adapt to technical limitations made him an invaluable bridge between design and engineering…</p>`,
    name: 'Emma-Grace Turek',
    role: 'Senior Specialist at Microsoft (formerly Director, Digital Identity and Account, DAFF)',
  },
  {
    quote: `<p>I had the pleasure of working alongside Michael while he was in a product team and I was in the design system team. Our paths crossed often, as I supported with design system advice and governance while also offering suggestions for the products he was working on.</p><p>Michael was an excellent design system practitioner. He consistently followed governance, actively participated in design community sessions, and had a sharp eye for spotting bugs or opportunities to improve the system. His feedback and contributions made a real difference to the quality and growth of the design system…</p>`,
    name: 'Paul Maher',
    role: 'UX Designer, Design System Lead, DAFF',
  },
]
