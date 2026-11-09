import { createFileRoute } from "@tanstack/react-router";
import { ContextualPreviewProvider } from "@/components/contextual-preview-overlay";
import { ProjectOverlay } from "@/components/project-overlay";
import { JiaCaseStudyContent, jiaSections } from "@/components/case-study/jia-case-study";
import { CaseStudyContent } from "@/components/case-study/generic-case-study";
import { attest, caseSections, dwellinn, fadarhy } from "@/content/case-studies";
import { AiProjectPreview } from "@/components/ai-project-preview";
import donotfraudLogo from "@/assets/donotfraud-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Namutebi Gertrude — UX Designer" },
      { name: "description", content: "Namutebi Gertrude is a designer working across visual communication, UX design and frontend development." },
      { property: "og:title", content: "Namutebi Gertrude — UX Designer" },
      { property: "og:description", content: "Visual communication, UX design and frontend development across healthcare, fintech and digital products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const workHistory = [
  ["Duda Build", "Design Engineer", "Product & Digital (Freelance)", "Dec 2020 – Present"],
  ["HGK Basel (FHNW) — Master’s", "Design Researcher", "", "Sept 2025 – Sept 2027"],
  ["FadäRhy (Hackathon, Winning Team)", "Cofounder", "Life Sciences & Startup Ecosystem (AI)", "Oct 2026 – Present"],
  ["Donot Fraud AI (Swisscom Challenge)", "Design Lead, AI Builder", "Fintech, IT & Digital Trust (Identity Fraud, AI)", "Sept 2026"],
  ["FHNW · Institute of Interactive Technologies", "Research Associate, HCI & XR", "AI", "Sep 2024 – Sep 2025"],
  ["Jia", "Product Designer", "Fintech (Lending)", "Jun 2022 – Jun 2023"],
  ["ClinicMaster INTERNATIONAL", "Creative Designer | Digital Marketing Manager", "Healthcare (HealthTech)", "Jan 2020 – Jul 2021"],
];

const B = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="font-semibold text-foreground underline-offset-4 hover:underline">{children}</a>
);

function Index() {
  return (
    <ContextualPreviewProvider>
    <main className="min-h-screen bg-background px-6 py-12 text-[16px] leading-[27px] text-foreground sm:px-11">
      <div className="max-w-[580px] space-y-6">
        <p>Hello, I'm <B>Gertrude</B>, a design engineer who thinks in systems, with an eye for visual detail and a curiosity about how things work.</p>
        <p>I've worked with clients and interdisciplinary teams on websites, digital applications and interactive experiences. At <AiProjectPreview project="jia" image="/images/jia/lending-dashboard.png"><ProjectOverlay trigger="Jia" title="Jia" subtitle="Loan App — UI/UX case study" iconSrc="/images/jia/jia-logo.svg" sections={jiaSections} fullPageHref="/work/jia"><JiaCaseStudyContent showNextNav={false} overlay /></ProjectOverlay></AiProjectPreview>, I contributed to UX research, user flows, wireframes and interface design. For <AiProjectPreview project="dwellinn"><ProjectOverlay trigger="Dwellinn" title="Dwellinn" subtitle="Client Redesign & UI Kit" sections={caseSections(dwellinn)} fullPageHref="/work/dwellinn"><CaseStudyContent study={dwellinn} showNextNav={false} overlay /></ProjectOverlay></AiProjectPreview>, I redesigned an existing application and developed its UI kits.</p>
        <p>More recently, I led design as a founding designer on the hackathon-winning <AiProjectPreview project="fadarhy"><ProjectOverlay trigger="FadäRhy" title="FadäRhy" subtitle="Founding Design & Engineering" sections={caseSections(fadarhy)} fullPageHref="/work/fadarhy"><CaseStudyContent study={fadarhy} showNextNav={false} overlay /></ProjectOverlay></AiProjectPreview> team, contributing to frontend development. I also designed the identity-verification interface for <AiProjectPreview project="attest" image={donotfraudLogo.url}><ProjectOverlay trigger="Donot Fraud AI" title="Donot Fraud AI" subtitle="Security UX & Interaction Design" iconSrc={donotfraudLogo.url} sections={caseSections(attest)} fullPageHref="/work/attest"><CaseStudyContent study={attest} showNextNav={false} overlay /></ProjectOverlay></AiProjectPreview> during Swiss AI Weeks 2026.</p>
        <p>At FHNW's Institute of Interactive Technologies, I worked on interdisciplinary projects involving web applications, 3D, XR and AI.</p>
        <p>I am currently a <B>Design Researcher</B> at <B>HGK (Basel)</B> and a <B>Designer Engineer</B>, combining design research, visual communication, and frontend development to make complex systems easier to understand and use.</p>
      </div>
      <section className="mt-20 max-w-[1080px]" aria-label="Contact and work history">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[16px] leading-[27px]" aria-label="Contact links">
          {([
            ["Email", "mailto:gnamutebi7@gmail.com"],
            ["LinkedIn", "https://www.linkedin.com/in/gertrude-mirriam-89913470/"],
            ["X", ""],
            ["GitHub", "https://github.com/trudy-pro"],
            ["Resume", ""],
          ] as const).map(([label, href]) =>
            href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="underline underline-offset-4 hover:text-muted-foreground">{label}</a>
            ) : (
              <span key={label} className="underline underline-offset-4" title="Link not supplied yet">{label}</span>
            ),
          )}
        </div>
        <div className="mt-10">
          <h2 className="text-[16px] font-normal italic">Where I have worked</h2>
          <ul className="mt-8 space-y-6">
            {workHistory.map(([workplace, role, industry, date]) => (
              <li key={workplace} className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 text-[16px] leading-[27px]">
                <p>
                  {workplace}
                  <span className="text-muted-foreground"> — {role}{industry ? ` · ${industry}` : ""}</span>
                </p>
                <p className="shrink-0 tabular-nums text-muted-foreground">{date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
    </ContextualPreviewProvider>
  );
}
