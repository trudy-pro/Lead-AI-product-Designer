import { createFileRoute } from "@tanstack/react-router";
import { ContextualPreviewProvider } from "@/components/contextual-preview-overlay";
import { CaseStudySidebar, MobileCaseNav, useActiveSection } from "@/components/case-study/case-study";
import { CaseStudyContent } from "@/components/case-study/generic-case-study";
import { caseSections, dwellinn } from "@/content/case-studies";

export const Route = createFileRoute("/work/dwellinn")({
  head: () => ({
    meta: [
      { title: "Dwellinn — Client Redesign & UI Kit Case Study" },
      { name: "description", content: "A client redesign of a Kenyan accommodation-booking app, where Namutebi Gertrude owned the UI kits and later extended them into a coded design system." },
      { property: "og:title", content: "Dwellinn — Client Redesign & UI Kit Case Study" },
      { property: "og:description", content: "From client app redesign to design system foundations: UI kits, visual foundations and a coded React extension." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/dwellinn" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work/dwellinn" }],
  }),
  component: DwellinnCaseStudyPage,
});

const sections = caseSections(dwellinn);
const ids = sections.map((s) => s.id);

function DwellinnCaseStudyPage() {
  const active = useActiveSection(ids);
  return (
    <ContextualPreviewProvider>
      <div className="jia-full-page min-h-screen bg-background px-6 pb-16 pt-0 text-foreground sm:px-10 lg:pt-12">
        <MobileCaseNav sections={sections} active={active} />
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[27%_1fr] lg:gap-16">
          <CaseStudySidebar sections={sections} active={active} title={dwellinn.name} subtitle={dwellinn.subtitle} />
          <main>
            <CaseStudyContent study={dwellinn} />
          </main>
        </div>
      </div>
    </ContextualPreviewProvider>
  );
}
