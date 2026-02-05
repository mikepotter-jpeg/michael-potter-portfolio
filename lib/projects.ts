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
      { id: 'designing-for-efficiency-and-clarity', title: 'Designing for efficiency and clarity' },
      { id: 'designing-for-secure-access', title: 'Designing for secure access' },
      { id: 'impact', title: 'Impact' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `<p>Exporters struggled with fragmented department systems that required multiple logins, duplicate forms, and offered limited visibility into application status. This created frequent support calls and administrative burden for both exporters and department staff, who found it difficult to validate information and make timely decisions. A centralised platform was needed, but consolidating protected business data and updating legacy systems introduced security challenges.</p>
        
<h3>What we built</h3>
<p>The Export Service provides a single platform for exporters to manage documentation and regulatory obligations. Users can onboard, set communication preferences, verify business authorisations, manage staff permissions, update account details, and track application status, streamlining previously fragmented workflows.</p>

<h3>Role and responsibilities</h3>
<p>As design lead for a 16+ person multidisciplinary team, I drove product innovation through collaboration with business units and digital specialists:</p>
<ul>
  <li>Created UI designs supporting user testing and development handover</li>
  <li>Led research that defined build requirements through user feedback and data</li>
  <li>Prioritised design backlogs with the product manager to align with business objectives</li>
  <li>Facilitated stakeholder collaboration to maintain platform consistency and product vision</li>
</ul>

<p>The core challenge was balancing security requirements with usability. Working with user researchers and business analysts, I produced wireframes and prototypes tested with exporters and department stakeholders. Insights directly informed iterations and shaped the product roadmap.</p>

<p>I delivered responsive, WCAG 2.1 conforming interfaces using the <a href="https://design-system.agriculture.gov.au/about" target="_blank" rel="noopener noreferrer">Agriculture Design System</a> aligned to the <a href="https://www.digital.gov.au/policy/digital-experience/digital-service-standard" target="_blank" rel="noopener noreferrer">Digital Service Standard</a>. I contributed to the design and developer community through forums and guilds, sharing concepts and incorporating peer feedback.</p>`,
      },
      {
        id: 'designing-for-efficiency-and-clarity',
        title: 'Designing for efficiency and clarity',
        content: `<p>Users needed a way to avoid repetitive data entry. Guided by the government principle of 'tell us once', the account enables centralised profile management. Details entered once are reused seamlessly across forms and system integrations.</p>

<p>Before committing to code, I used the department's Agriculture Design System to create Figma prototypes for concept validation and testing. Because business units manage relationships with exporters, we began by validating early concepts with them.</p>

<p>Next, we developed a research script and ran moderated usability sessions with exporters to gather feedback. Participants were recruited through Askable, giving us direct access to real users and ensuring insights reflected actual user needs.</p>

<h3>Navigation</h3>
<p>The user's profile and account settings are always accessible via persistent navigation in the top-right corner of the interface. I designed new components to support this, including a <a href="https://design-system.agriculture.gov.au/components/dropdown-menu" target="_blank" rel="noopener noreferrer">Dropdown menu</a> for switching between multiple businesses and a navigation system that remains consistent across the platform.</p>

<p>Because the platform is context-driven, users needed to clearly see which business they were acting on behalf of when making decisions or completing tasks. This visibility helps reduce errors and builds confidence in their actions.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/0cqVpzxBz6niSB5Rzl8bV6Klzo.png" alt="Navigation design showing business context switcher" class="rounded-2xl w-full" />
</figure>

<h3>Sign in with email (known as Email sign-in)</h3>
<p><strong>User feedback showed people needed an alternative to Digital ID for signing in or creating accounts.</strong> While the department wanted to offer this secondary option, it created confusion—users assumed both sign-in methods gave them equal access to services.</p>

<p><strong>Our solution:</strong> We added clear callouts and help content explaining that Digital ID unlocks access to more services within the Export Service than the alternative method.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/gk5YVikymwVEBC9Q9d7uu215OiM.png" alt="Email sign-in interface with Digital ID callout" class="rounded-2xl w-full" />
</figure>

<p>To deliver the 'Email sign-in' feature, I worked with a business analyst in Mural to map out the multi-factor authentication user journey and ensure it met essential security requirements. To do this we baselined it against the product offered by Microsoft Azure B2C.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/TZrWYbpQmDPu45zxMCTyIH5NSQ.png" alt="Multi-factor authentication user journey map" class="rounded-2xl w-full" />
</figure>

<p><strong>I translated the multi-factor authentication journey into screen designs, which were implemented using Microsoft Azure B2C (a white-label authentication solution).</strong></p>

<p>Since we couldn't use the Design System's React UI library, the interface had to be built in HTML and CSS. I created detailed design documentation to guide development. The solution initially produced inconsistent layouts and elements, so I worked closely with developers—providing specific feedback to refine visual hierarchy, improve usability, and strengthen accessibility.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/DNjkjYV8VmRb9N1TxkFDcNGQ.png" alt="Multi-factor authentication screen designs" class="rounded-2xl w-full" />
</figure>`,
      },
      {
        id: 'designing-for-secure-access',
        title: 'Designing for secure access',
        content: `<p>While onboarding, business managers needed a way to seamlessly verify their business while preventing unauthorised access. Our solution integrates with the whole-of-government capability, Relationship Authorisation Manager (RAM). Because the business linking process involves multiple redirects between government applications, which could easily disorient users, we introduced a task overview to set expectations and guide them through the process.</p>

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
<p><strong>As a security requirement, invited users had to verify their invitation with an email code rather than a clickable link.</strong> Several issues could occur when redeeming a code—it might be expired, cancelled by the sender, or already used.</p>

<p>Error messages needed to strike a careful balance: general enough to avoid exposing system vulnerabilities to bad actors, while still being specific enough to help legitimate users resolve the issue.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/wF3bDlQX34jUrjpkBOWKYuUmxw.png" alt="Error message design for invitation codes" class="rounded-2xl w-full" />
</figure>

<p><strong>To design effective error handling, I worked with the technical team to catalogue all possible error states and classify them as either system-generated or user-generated.</strong> This classification informed how we wrote and displayed each message.</p>

<p>Our front-end developers preferred having error state mockups positioned directly next to the main user flow designs in Figma. We also documented these rules and messages in detailed build tickets to support implementation and testing.</p>`,
      },
      {
        id: 'impact',
        title: 'Impact',
        content: `<p>Our team delivered a comprehensive web and mobile solution that transformed how exporters interact with government services. Exporters now have a single login and centralised profile management, eliminating the frustration of managing multiple accounts. Businesses can onboard faster and operate with confidence.</p>

<p>The department gains digital assurance, while regulators have secure access to verified, up-to-date user information. This enables faster onboarding, more efficient service delivery, and higher user satisfaction.</p>`,
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

<p>As a design consultant from <a href="https://www.contino.io/" target="_blank" rel="noopener noreferrer">Contino</a>, I partnered with the product manager to refine design concepts, creating wireframes and developing detailed design specifications.</p>

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
