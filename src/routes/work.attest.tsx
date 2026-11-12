import { createFileRoute } from "@tanstack/react-router";
import { ContextualPreviewProvider } from "@/components/contextual-preview-overlay";
import {
  CaseStudySidebar,
  MobileCaseNav,
  useActiveSection,
} from "@/components/case-study/case-study";
import { CaseStudyContent } from "@/components/case-study/generic-case-study";
import { attest, caseSections } from "@/content/case-studies";
const logo = "/images/donot-fraud/logo.png";

export const Route = createFileRoute("/work/attest")({
  head: () => ({
    meta: [
      { title: "Donot Fraud AI — Verification without unnecessary friction" },
      {
        name: "description",
        content:
          "A security UX exploration of adaptive onboarding and recoverable verification, following the Swiss AI Weeks 2026 Swisscom identity-fraud challenge.",
      },
      {
        property: "og:title",
        content: "Donot Fraud AI — Verification without unnecessary friction",
      },
      {
        property: "og:description",
        content:
          "Exploring suitable verification methods, justified additional checks and recoverable failure.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/attest" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work/attest" }],
  }),
  component: AttestCaseStudyPage,
});

const sections = caseSections(attest);
const ids = sections.map((s) => s.id);

function AttestCaseStudyPage() {
  const active = useActiveSection(ids);
  return (
    <ContextualPreviewProvider>
      <div className="jia-full-page min-h-screen bg-background px-6 pb-16 pt-0 text-foreground sm:px-10 lg:pt-12">
        <MobileCaseNav sections={sections} active={active} />
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[27%_1fr] lg:gap-16">
          <CaseStudySidebar
            sections={sections}
            active={active}
            thumb={logo}
            title={attest.name}
            subtitle={attest.subtitle}
          />
          <main>
            <CaseStudyContent study={attest} />
          </main>
        </div>
      </div>
    </ContextualPreviewProvider>
  );
}
