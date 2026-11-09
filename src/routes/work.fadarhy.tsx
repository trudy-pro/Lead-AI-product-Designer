import { createFileRoute } from "@tanstack/react-router";
import { ContextualPreviewProvider } from "@/components/contextual-preview-overlay";
import { CaseStudySidebar, MobileCaseNav, useActiveSection } from "@/components/case-study/case-study";
import { CaseStudyContent } from "@/components/case-study/generic-case-study";
import { caseSections, fadarhy } from "@/content/case-studies";

export const Route = createFileRoute("/work/fadarhy")({
  head: () => ({
    meta: [
      { title: "FadäRhy — Founding Design & Engineering Case Study" },
      { name: "description", content: "How a hackathon-winning team built FadäRhy, a navigator for the Basel life-sciences ecosystem — founding design and AI-assisted frontend by Namutebi Gertrude." },
      { property: "og:title", content: "FadäRhy — Founding Design & Engineering Case Study" },
      { property: "og:description", content: "Designing and building an award-winning ecosystem navigator: Describe → Check → Act, with AI-assisted frontend development." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/fadarhy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work/fadarhy" }],
  }),
  component: FadarhyCaseStudyPage,
});

const sections = caseSections(fadarhy);
const ids = sections.map((s) => s.id);

function FadarhyCaseStudyPage() {
  const active = useActiveSection(ids);
  return (
    <ContextualPreviewProvider>
      <div className="jia-full-page min-h-screen bg-background px-6 pb-16 pt-0 text-foreground sm:px-10 lg:pt-12">
        <MobileCaseNav sections={sections} active={active} />
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[27%_1fr] lg:gap-16">
          <CaseStudySidebar sections={sections} active={active} title={fadarhy.name} subtitle={fadarhy.subtitle} />
          <main>
            <CaseStudyContent study={fadarhy} />
          </main>
        </div>
      </div>
    </ContextualPreviewProvider>
  );
}
