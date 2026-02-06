export interface Project {
  slug: string
  title: string
  client: string
  years: string
  description: string
  categories: string[]
  coverImage: string
  tableOfContents?: { id: string; title: string }[]
  sections: { id: string; title: string; content: string }[]
}

export const projects: Project[] = [
  {
    slug: 'export-service',
    title: 'Export Service',
    client: 'Department of Agriculture, Fisheries and Forestry (DAFF)',
    years: '2022–2025',
    description: 'Account and access platform for Australia\'s export industry. I led end-to-end design serving 2,000+ regulated businesses, reducing registration times and simplifying compliance.',
    categories: ['Product', 'Design Systems', 'Government'],
    coverImage: 'https://framerusercontent.com/images/CvXpoQTp5MB9iFXaiJgtActjIY.png',
    tableOfContents: [
      { id: 'overview', title: 'Overview' },
      { id: 'constraints', title: 'Constraints' },
      { id: 'designing-for-efficiency-and-clarity', title: 'Designing for efficiency and clarity' },
      { id: 'designing-for-secure-access', title: 'Designing for secure access' },
      { id: 'impact', title: 'Impact' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `<p>Australia's export industry depends on government certification at every step. But the systems exporters used to manage that relationship were fragmented across multiple departments, each with its own login, its own forms, and no shared view of status. For the 2,000+ businesses that rely on timely approvals, delays meant cargo sitting in port.</p>

<p>A centralised platform was needed, but consolidating protected business data and replacing legacy systems introduced real security challenges. The core tension throughout this project was balancing security requirements with usability.</p>
        
<h3>What we built</h3>
<p>The Export Service provides a single platform for exporters to manage documentation and regulatory obligations. Users can onboard, set communication preferences, verify business authorisations, manage staff permissions, update account details, and track application status, streamlining previously fragmented workflows.</p>

<h3>Role</h3>
<p>I was design lead on a 16-person delivery team for three years, reporting to the Director of Digital Identity and Account. I owned the end-to-end design process, from early wireframes tested with exporters through to production specifications built within the <a href="https://design-system.agriculture.gov.au/about" target="_blank" rel="noopener noreferrer">Agriculture Design System<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>.</p>

<p>I shaped the product roadmap through research. Usability findings directly influenced which features were prioritised across quarters. I worked with business analysts to map complex journeys, with content designers to translate regulatory language into plain English, and with developers to resolve implementation gaps in the Azure B2C authentication layer.</p>

<p>I delivered responsive, WCAG 2.1 conforming interfaces aligned to the <a href="https://www.digital.gov.au/policy/digital-experience/digital-service-standard" target="_blank" rel="noopener noreferrer">Digital Service Standard<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>, and contributed new components back to the <a href="https://design-system.agriculture.gov.au/about" target="_blank" rel="noopener noreferrer">Agriculture Design System<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>.</p>`,
      },
      {
        id: 'constraints',
        title: 'Constraints',
        content: `<p>This project operated within several layers of government requirements. All interfaces had to conform to WCAG 2.1 AA, the <a href="https://www.digital.gov.au/policy/digital-experience/digital-service-standard" target="_blank" rel="noopener noreferrer">Digital Service Standard<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>, and the Information Security Manual including Essential Eight security controls.</p>

<p>The authentication UI had to be built in HTML and CSS because Azure B2C (the white-label authentication solution) couldn't use the Design System's React component library. This meant creating detailed design documentation and working closely with developers to maintain visual consistency and accessibility without our usual tooling.</p>

<p>Business verification required integration with the Relationship Authorisation Manager (RAM), a whole-of-government service. The linking process involved multiple redirects between government applications, which could easily disorient users.</p>`,
      },
      {
        id: 'designing-for-efficiency-and-clarity',
        title: 'Designing for efficiency and clarity',
        content: `<p>Users needed a way to avoid repetitive data entry. Guided by the government principle of 'tell us once', the account enables centralised profile management. Details entered once are reused seamlessly across forms and system integrations.</p>

<p>Before committing to code, I used the department's Agriculture Design System to create Figma prototypes for concept validation and testing. Because business units manage relationships with exporters, we began by validating early concepts with them.</p>

<p>Next, we developed a research script and ran moderated usability sessions with exporters to gather feedback. Participants were recruited through Askable, giving us direct access to real users and ensuring insights reflected actual user needs.</p>

<h3>Navigation</h3>
<p>Users managing a single business didn't need a context switcher cluttering their interface, but users managing five entities needed to change context constantly. The challenge was supporting both without compromising either.</p>

<p>I designed a dropdown component that shows which business the user is acting on behalf of, accessible from persistent navigation across the platform. For single-business users, the switcher stays out of the way. For multi-business users, it's always within reach. Testing confirmed that surfacing the active business context reduced errors and gave users more confidence in their actions.</p>

<p>This component was contributed back to the <a href="https://design-system.agriculture.gov.au/components/dropdown-menu" target="_blank" rel="noopener noreferrer">Agriculture Design System<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a> and is now used across other areas of the department.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/0cqVpzxBz6niSB5Rzl8bV6Klzo.png" alt="Navigation design showing business context switcher" class="rounded-2xl w-full" />
</figure>

<h3>Sign in with email</h3>
<p>We expected most users to choose Digital ID since it offered fuller access to services. In testing, users reached for email sign-in first. It felt more familiar and less risky.</p>

<p>The problem was that both options sat side by side with no indication of what each unlocked. Users assumed they were equal. Rather than pushing users toward Digital ID, we redesigned the sign-in screen with clear callouts explaining what additional access Digital ID would provide. We also worked with content designers to create help articles that walked users through the difference.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/gk5YVikymwVEBC9Q9d7uu215OiM.png" alt="Email sign-in interface with Digital ID callout" class="rounded-2xl w-full" />
</figure>

<p>I translated the multi-factor authentication journey into screen designs, which were implemented using Microsoft Azure B2C (a white-label authentication solution).</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/TZrWYbpQmDPu45zxMCTyIH5NSQ.png" alt="Multi-factor authentication user journey map" class="rounded-2xl w-full" />
</figure>

<p>Since we couldn't use the Design System's React UI library, the interface had to be built in HTML and CSS. I created detailed design documentation to guide development. The solution initially produced inconsistent layouts and elements, so I worked closely with developers, providing specific feedback to refine visual hierarchy, improve usability, and strengthen accessibility.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/DNjkjYV8VmRb9N1TxkFDcNGQ.png" alt="Multi-factor authentication screen designs" class="rounded-2xl w-full" />
</figure>`,
      },
      {
        id: 'designing-for-secure-access',
        title: 'Designing for secure access',
        content: `<p>While onboarding, business managers needed a way to seamlessly verify their business while preventing unauthorised access. We introduced a task overview to set expectations and guide them through the verification process.</p>

<p><strong>Other key user requirements:</strong></p>
<ul>
  <li>Enter business details once and reuse them across the service.</li>
  <li>Provide managers with simple controls for team permissions and access.</li>
  <li>Enable users to manage multiple businesses or entities from a single account.</li>
</ul>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/68b9tVXIbMnGf8nTAxdqc6Wx0zc.png" alt="Business verification and linking interface" class="rounded-2xl w-full" />
</figure>

<h3>Content strategy</h3>
<p>Clear guidance was critical to this project's success. Security requirements in regulatory environments are often frustrating and complex for users. By providing the right information at the right moment, we helped users understand that security controls are valuable business tools not just obstacles to government services.</p>

<p>I collaborated with content designers to create 20+ help articles that translated technical requirements into plain language.</p>

<h3>Form validation and designing for errors</h3>
<p><strong>As a security requirement, invited users had to verify their invitation with an email code rather than a clickable link.</strong> Several issues could occur when redeeming a code: it might be expired, cancelled by the sender, or already used.</p>

<p>Error messages needed to strike a careful balance: general enough to avoid exposing system vulnerabilities to bad actors, while still being specific enough to help legitimate users resolve the issue.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/wF3bDlQX34jUrjpkBOWKYuUmxw.png" alt="Error message design for invitation codes" class="rounded-2xl w-full" />
</figure>

<p>Error states fell into two categories: system-generated or user-generated. This classification informed how we wrote and displayed each message, ensuring we balanced security with helpful guidance.</p>

<p>Our front-end developers preferred having error state mockups positioned directly next to the main user flow designs in Figma. We also documented these rules and messages in detailed build tickets to support implementation and testing.</p>`,
      },
      {
        id: 'impact',
        title: 'Impact',
        content: `<h3>Business impact</h3>
<p>The Export Service now serves over 2,000 regulated businesses. Secure onboarding and access pathways reduced department processing by over 40%, and registration times dropped from weeks to days.</p>

<h3>Design influence</h3>
<p>Navigation components I designed were adopted platform-wide. Several components I contributed to the Agriculture Design System are used by other areas of the department. Accessibility practices I introduced were picked up by the development team and applied to ongoing work.</p>

<h3>Growth</h3>
<p>When the Product Manager left the program, I stepped into the Experience Lead role, setting priorities and managing workflow across the 16-person delivery team. Over three years I went from Interaction Designer to leading the experience design function.</p>`,
      },
    ],
  },
  {
    slug: 'dan-picked',
    title: 'Dan Picked wine subscriptions',
    client: 'Dan Murphy\'s',
    years: '2021–2022',
    description: 'Wine subscription service launched to 500,000+ My Dan\'s members. I designed the end-to-end customer experience and an internal portal for staff to curate monthly selections.',
    categories: ['E-commerce', 'Visual Design', 'Product'],
    coverImage: 'https://framerusercontent.com/images/IqYIH7nyFzuZ6wqTIJRVd9BCQXE.png',
    tableOfContents: [
      { id: 'overview', title: 'Overview' },
      { id: 'impact', title: 'Impact' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `<p>The surge in online ordering during COVID-19 created an opportunity for Dan Murphy's to reimagine how customers discover wine. The business needed a digital solution to engage loyal customers and make wine selection more intuitive and enjoyable.</p>

<p>As a design consultant from <a href="https://www.contino.io/" target="_blank" rel="noopener noreferrer">Contino<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>, I partnered with the product manager to refine design concepts, creating wireframes and developing detailed design specifications.</p>

<p>With a focus on speed to market, I worked to understand both staff needs and customer desires while delivering an innovative subscription product. This included the added challenge of integrating a new recurring payment platform.</p>

<h3>What we built</h3>
<ul>
  <li><strong>New checkout wizard</strong> designed specifically for subscription purchases</li>
  <li><strong>Digital wallet</strong> enabling users to securely save and manage payment methods</li>
  <li><strong>Recurring payment system</strong> for subscription management</li>
</ul>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/ZLluDzThN6hfyGWAxvLB4c98QqU.png" alt="Subscription checkout wizard interface" class="rounded-2xl w-full" />
</figure>

<h3>My approach</h3>
<ul>
  <li>Ran regular critique sessions with the internal design team and presented to stakeholders fortnightly</li>
  <li>Advocated for a phased release strategy, launching first to friends and family for real-world testing</li>
  <li>Incorporated feedback iteratively to reduce risk before public launch</li>
</ul>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/ndC8308WUM4XjjQK7X5lTbGyHag.png" alt="Design iteration process" class="rounded-2xl w-full" />
</figure>`,
      },
      {
        id: 'impact',
        title: 'Impact',
        content: `<p>Over 8 months, my team delivered a subscription checkout with integrated recurring payments that met tight market deadlines. The phased release reduced risk and ensured the solution worked for both staff and customers.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/WFTCLQ2dT6CqacggV7JodMfAnok.png" alt="Final subscription product" class="rounded-2xl w-full" />
</figure>`,
      },
    ],
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
    linkedinUrl: 'https://www.linkedin.com/in/michael-potter/#recommendations',
  },
  {
    quote: `<p>I had the pleasure of working alongside Michael while he was in a product team and I was in the design system team. Our paths crossed often, as I supported with design system advice and governance while also offering suggestions for the products he was working on.</p><p>Michael was an excellent design system practitioner. He consistently followed governance, actively participated in design community sessions, and had a sharp eye for spotting bugs or opportunities to improve the system. His feedback and contributions made a real difference to the quality and growth of the design system…</p>`,
    name: 'Paul Maher',
    role: 'UX Designer, Design System Lead, DAFF',
    linkedinUrl: 'https://www.linkedin.com/in/michael-potter/#recommendations',
  },
]
