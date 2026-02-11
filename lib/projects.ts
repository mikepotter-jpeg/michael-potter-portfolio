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
      { id: 'constraints', title: 'Constraints' },
      { id: 'designing-the-checkout', title: 'Designing the checkout' },
      { id: 'designing-the-staff-portal', title: 'Designing the staff portal' },
      { id: 'impact', title: 'Impact' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `<p>The surge in online ordering during COVID-19 created an opportunity for Dan Murphy's to reimagine how customers discover wine. The business wanted to deepen engagement with its My Dan's loyalty members through a curated subscription service, giving customers a reason to return each month while introducing them to wines they wouldn't normally choose.</p>

<p>As a design consultant from <a href="https://www.contino.io/" target="_blank" rel="noopener noreferrer">Contino<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>, I partnered with the product manager to design the end-to-end experience across two audiences: customers subscribing and managing their account, and internal staff curating monthly wine selections.</p>

<h3>What we built</h3>
<ul>
  <li><strong>Subscription checkout wizard</strong> guiding customers through plan selection, delivery preferences, and payment in a single focused flow</li>
  <li><strong>Digital wallet</strong> enabling users to save, switch, and manage payment methods for recurring charges</li>
  <li><strong>Staff curation portal</strong> giving the Dan Murphy's team control over monthly selections, descriptions, and stock adjustments</li>
</ul>

<h3>Role</h3>
<p>I owned the design process from early wireframes through to production specifications. I ran regular critique sessions with Dan Murphy's internal design team and presented progress to stakeholders fortnightly. I advocated for a phased release strategy, launching first to a friends-and-family group before the wider rollout to 500,000+ members, incorporating feedback iteratively to reduce risk.</p>`,
      },
      {
        id: 'constraints',
        title: 'Constraints',
        content: `<p>This project operated under several pressures that shaped the design approach throughout.</p>

<p><strong>Speed to market.</strong> The subscription needed to launch while online ordering demand was high. Every design decision was weighed against delivery timeline. This meant working closely with developers to understand what was feasible within each sprint, and sometimes simplifying flows to ship a solid experience rather than a perfect one.</p>

<p><strong>New payment platform.</strong> The business was integrating a recurring payment provider it hadn't used before. The checkout and wallet had to accommodate the platform's capabilities and limitations, which weren't always clear upfront. I worked with the engineering team to map technical constraints early so we could design around them rather than discover issues late in development.</p>

<p><strong>Consultant access.</strong> As an external consultant, I had limited direct access to existing customer research and behavioural data. I leaned on the product manager and internal team for context, and used stakeholder critique sessions to pressure-test assumptions I couldn't validate with data directly.</p>

<p><strong>Two audiences, one timeline.</strong> The customer-facing subscription experience and the internal staff portal needed to ship together. Both had to work well, but the staff tool was at risk of being deprioritised. I made the case that a poor curation experience would undermine the quality of the customer-facing product.</p>`,
      },
      {
        id: 'designing-the-checkout',
        title: 'Designing the checkout',
        content: `<p>The core challenge was designing a checkout flow for a commitment that felt unfamiliar to most customers. Unlike a one-off wine purchase, a subscription asks users to hand over payment details for recurring charges with wines they haven't chosen themselves. The flow needed to build trust at every step.</p>

<h3>Digital wallet and saved cards</h3>
<p>The trickiest interaction design problem was the digital wallet. Customers needed to add, remove, and switch between payment methods — but the mental model for managing saved cards in a subscription context is different from a standard e-commerce checkout. Users aren't just paying once; they're trusting that the right card will be charged next month.</p>

<p>I designed the wallet to make the active payment method visually prominent, with clear confirmation when switching cards. Removing a card that was linked to an active subscription triggered a warning and guided the user to select a replacement before confirming, preventing accidental failed charges. Each state — adding, editing, removing, switching — was mapped and documented so developers could implement edge cases consistently.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/ZLluDzThN6hfyGWAxvLB4c98QqU.png" alt="Subscription checkout wizard showing plan selection and payment steps" class="rounded-2xl w-full" />
</figure>

<h3>Wizard structure</h3>
<p>I structured the checkout as a step-by-step wizard rather than a single long form. Each step had a focused task: choose your plan, set delivery preferences, enter payment. This reduced cognitive load and gave users a sense of progress. A persistent summary sidebar showed selections so far, reinforcing confidence as they moved through the flow.</p>

<p>The wizard also needed to handle returning users who wanted to modify their subscription. Rather than forcing them back through the full flow, I designed direct entry points to individual steps — change your plan, update delivery, swap payment — accessible from the subscription dashboard.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/ndC8308WUM4XjjQK7X5lTbGyHag.png" alt="Design iterations showing checkout flow progression and refinement" class="rounded-2xl w-full" />
</figure>`,
      },
      {
        id: 'designing-the-staff-portal',
        title: 'Designing the staff portal',
        content: `<p>The subscription's value depended on the quality of each month's wine selection. If staff couldn't curate efficiently, the customer experience would suffer — so the internal portal wasn't a back-office afterthought but a core part of the product.</p>

<h3>What staff needed</h3>
<p>Through conversations with the Dan Murphy's team, the clearest need was flexibility. Staff needed to swap wines in and out of a selection quickly — whether because of stock shortages, seasonal availability, or a last-minute quality decision. The original assumption was a simple list-based picker, but feedback revealed that staff also needed to adjust descriptions, reorder selections, and handle edge cases like a wine being discontinued after a selection was already built.</p>

<p>I designed the curation interface around a card-based layout where each wine in a selection could be individually edited, reordered, or replaced without disrupting the rest. A status indicator showed whether a selection was in draft, ready for review, or published, giving staff confidence about what customers would see and when.</p>

<h3>Connecting the two experiences</h3>
<p>A key design decision was making the staff portal preview match the customer-facing display as closely as possible. Staff could see exactly how their curation would appear to subscribers, which reduced back-and-forth with the product team and caught layout or copy issues before they reached customers. This tight feedback loop between the internal tool and the customer experience was something I pushed for early because it directly improved the quality of what shipped each month.</p>`,
      },
      {
        id: 'impact',
        title: 'Impact',
        content: `<h3>Delivery</h3>
<p>Over 8 months, the team shipped a complete subscription product — checkout wizard, digital wallet, recurring payments, and staff curation portal — on schedule and within the market window the business needed. The phased release to a friends-and-family group before the full rollout caught usability issues early and gave the team confidence in the payment integration before it reached the wider member base.</p>

<h3>Product quality</h3>
<p>The digital wallet's handling of card management edge cases — switching, removing, and replacing active payment methods — meant fewer failed charges and support tickets at launch. The staff portal's preview functionality reduced the gap between what was curated internally and what customers received, leading to faster monthly turnaround and fewer last-minute corrections.</p>

<h3>Approach</h3>
<p>Advocating for the phased release strategy and investing in the staff portal early were the two decisions that shaped the project's outcome most. Both required making the case to stakeholders that short-term effort would reduce long-term risk — a pattern I've carried into subsequent projects.</p>

<figure class="my-8">
  <img src="https://framerusercontent.com/images/WFTCLQ2dT6CqacggV7JodMfAnok.png" alt="The launched Dan Picked subscription product" class="rounded-2xl w-full" />
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
