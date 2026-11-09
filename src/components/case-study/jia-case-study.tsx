import {
  CaseStudyImage, CaseStudyVideo, EditorialContentSection, NextProjectNavigation, Prose, Reveal, type CaseSection,
} from "@/components/case-study/case-study";

export const jiaSections: CaseSection[] = [
  { id: "background", label: "Company background" },
  { id: "introduction", label: "Jia rewards borrowers" },
  { id: "onboarding", label: "Business onboarding" },
  { id: "reflection", label: "Reflection" },
];

function ProjectDetail({ label, values, className = "" }: { label: string; values: string[]; className?: string }) {
  return (
    <div className={className}>
      <dt className="text-[13px] font-normal leading-5 text-muted-foreground">{label}</dt>
      <dd className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => (
          <span key={value} className="rounded-lg bg-foreground/[0.055] px-2.5 py-1 text-[13px] font-normal leading-[21px] text-foreground/75">{value}</span>
        ))}
      </dd>
    </div>
  );
}

/** The full Jia editorial case study body, shared by the /work/jia page and the home-page project overlay. */
export function JiaCaseStudyContent({ showNextNav = true, overlay = false }: { showNextNav?: boolean; overlay?: boolean }) {
  return (
    <>
      <header className={overlay ? "project-editorial-header" : undefined}>
        <CaseStudyVideo className="jia-cover-video" src="/videos/jia-showcase.mp4" poster="/videos/jia-showcase-poster.jpg" label="Showcase video of the Jia loan app's final screens" />
        <div className="mt-16 grid gap-12">
          <div>
            <h1 className="text-[64px] font-semibold leading-none tracking-[-0.03em] sm:text-[96px]">Jia</h1>
          </div>
        </div>
        <Reveal className="mt-10">
          <dl className="jia-project-details grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pb-4 pt-10 sm:grid-cols-[135px_75px_minmax(0,1fr)] sm:gap-x-12">
            <ProjectDetail label="Role" values={["UX designer"]} />
            <ProjectDetail label="Year" values={["2023"]} />
            <ProjectDetail label="Project type" values={["Mobile loan app", "UX case study", "Fintech", "UX Research", "Product Design"]} className="col-span-2 sm:col-span-1" />
            <ProjectDetail label="Scope" values={["80+ screens", "1.5 years"]} className="col-span-2" />
            <ProjectDetail label="Process" values={["End-to-end UX process — from research to usability testing"]} className="col-span-2 sm:col-span-1" />
            <ProjectDetail label="Tools" values={["Figma", "Miro", "Notion"]} className="col-span-2 sm:col-span-3" />
          </dl>
        </Reveal>
      </header>

      <EditorialContentSection id="background" index={1} label="Company background" title="Designing Jia's Digital Lending Experience from the Ground Up">
          <CaseStudyImage src="/images/jia/lending-dashboard.png" alt="Jia business lending dashboard showing onboarding progress, loan terms, repayment balance and rewards" />
          <Prose>
            <p>Jia is a fintech company founded in 2022 to make financing more accessible to small businesses in emerging markets.</p>
            <p>I helped design Jia's digital product from the ground up, leading UX research, defining user flows and information architecture, and designing interfaces to simplify onboarding and make financial services easier to navigate.</p>
            <p>In May 2023, Jia raised $4.3 million in seed funding, alongside a $1 million on-chain liquidity commitment, to support its expansion.</p>
          </Prose>
      </EditorialContentSection>

      <EditorialContentSection id="introduction" index={2} label="Jia rewards borrowers" title="Making good borrowing pay off">
        <CaseStudyImage className="jia-rewards-preview" src="/images/jia/borrower-rewards.png" alt="Jia rewards program showing activity history and Silver, Platinum and Gold reward tiers with borrowing and supplier benefits" />
        <Prose>
          <p>Lending apps in Kenya treat every loan as a one-off transaction. A small business owner who repays on time gets nothing for it: limits stay as low as KES 1,000, repayment windows stay at 30 days, and interest stays high. With no reason to stay, borrowers don't. And the people who keep the lending system healthy are the ones it rewards least.</p>
          <p>I designed Jia, a loan app that treats good borrowers like owners. Repaying on time, referring friends and acting as a guarantor earn Jia tokens. The tokens unlock what business owners told me they needed to grow: lower interest, higher loan limits, a 7-day grace period and access to cheaper suppliers.</p>
        </Prose>
      </EditorialContentSection>

      <EditorialContentSection id="onboarding" index={3} label="Business onboarding" title="Reducing friction in business onboarding">
        <CaseStudyImage className="jia-onboarding-crop" src="/images/jia/business-onboarding.png" alt="Jia onboarding screen for choosing credit amount, payment term and rewards benefits, with a payment summary" />
        <Prose>
          <p>Jia provides growth financing to small businesses, but onboarding requires entrepreneurs to navigate several steps and provide information about their businesses. My focus was on simplifying this journey, making the process easier to understand and complete.</p>
          <p>I contributed to UX research, examining the existing onboarding experience to identify friction points, confusing information and opportunities to improve the user journey. I mapped user flows, explored alternative ways to structure the process and developed wireframes to clarify the sequence of steps and information presented to users.</p>
          <p>I translated these decisions into interface designs, refining form layouts, visual hierarchy and navigation to make onboarding more intuitive. My contribution connected research findings to practical design improvements, helping Jia create a clearer, more consistent onboarding experience.</p>
        </Prose>
      </EditorialContentSection>

      <EditorialContentSection id="reflection" index={4} label="Reflection" title="What I learned">
        <CaseStudyImage className="jia-credit-terms-crop" src="/images/jia/credit-terms-preview.png" alt="Jia credit terms preview showing purchase and payment details, terms agreement and confirmation" />
        <Prose>
          <p>Rewards only motivate when they're clear. Testers liked Jia tokens but kept asking how to earn them, so the next version would show progress and the next step after every action.</p>
          <p>Who you interview shapes what you hear. Colour preferences seemed to differ by gender, but my sample was too small to tell. Next time I'd recruit a wider mix of people.</p>
          <p>Users wanted more than a loan. Requests for bookkeeping and cheaper suppliers showed me Jia's real opportunity is supporting how a small business runs.</p>
        </Prose>
      </EditorialContentSection>

      {showNextNav && <NextProjectNavigation />}
    </>
  );
}
