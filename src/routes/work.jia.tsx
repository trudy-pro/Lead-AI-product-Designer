import { createFileRoute } from "@tanstack/react-router";
import { ContextualPreviewProvider } from "@/components/contextual-preview-overlay";
import { CaseStudySidebar, MobileCaseNav, useActiveSection } from "@/components/case-study/case-study";
import { JiaCaseStudyContent, jiaSections } from "@/components/case-study/jia-case-study";

export const Route = createFileRoute("/work/jia")({
  head: () => ({
    meta: [
      { title: "Jia — Loan App UX Case Study" },
      { name: "description", content: "A UX case study for Jia, a loan app that helps small business owners apply for loans and earn rewards for repaying on time." },
      { property: "og:title", content: "Jia — Loan App UX Case Study" },
      { property: "og:description", content: "Research, personas, flows and final screens for Jia, a rewards-driven loan app for small business owners." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/jia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work/jia" }],
  }),
  component: JiaCaseStudyPage,
});

const ids = jiaSections.map((s) => s.id);

function JiaCaseStudyPage() {
  const active = useActiveSection(ids);
  return (
    <ContextualPreviewProvider>
      <div className="jia-full-page min-h-screen bg-background px-6 pb-16 pt-0 text-foreground sm:px-10 lg:pt-12">
        <MobileCaseNav sections={jiaSections} active={active} />
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[27%_1fr] lg:gap-16">
          <CaseStudySidebar sections={jiaSections} active={active} thumb="/images/jia/jia-logo.svg" title="Jia" subtitle="Loan App — UI/UX case study" />
          <main>
            <JiaCaseStudyContent />
          </main>
        </div>
      </div>
    </ContextualPreviewProvider>
  );
}
