import type { CaseSection } from "@/components/case-study/case-study";
import type { AttestVisualName } from "@/components/case-study/attest-visuals";
import type { FadarhyVisualName } from "@/components/case-study/fadarhy-visuals";

export interface CaseStudyFact {
  label: string;
  value: string;
}

type CaseStudyParagraph = string | { text: string; strong: string };

export type CaseStudyBlock =
  | { type: "text"; title?: string; paragraphs: CaseStudyParagraph[] }
  | { type: "callout"; tone: "evidence" | "boundary" | "extension"; title: string; text: string }
  | { type: "table"; title: string; head: string[]; rows: string[][] }
  | { type: "rows"; title?: string; variant?: "stacked"; rows: [string, string][] }
  | { type: "list"; title?: string; ordered?: boolean; items: CaseStudyParagraph[] }
  | { type: "steps"; steps: { title: string; text: string }[] }
  | {
      type: "figure";
      src: string;
      alt: string;
      caption?: string;
      variant?: "wide" | "mobile" | "compact";
    } // A project-specific illustrated/interactive figure, rendered in the shared figure frame.
  | { type: "video"; src: string; poster?: string; label: string; caption?: string }
  | { type: "visual"; name: FadarhyVisualName | AttestVisualName }
  // Owner notes for evidence still to be added — never rendered publicly.
  | { type: "placeholder"; title: string; needed: string };

export interface CaseStudySectionData {
  introduction?: { heading?: string; text: string; label: string; value: string; caption: string };
  id: string;
  label: string;
  title: string;
  blocks: CaseStudyBlock[];
}

export interface CaseStudy {
  slug: string;
  name: string;
  /** Short sidebar/overlay subtitle, e.g. "Client Redesign & UI Kit". */
  subtitle: string;
  title?: string;
  lede?: string;
  liveUrl?: string;
  showcase?: { src: string; poster: string; label: string };
  facts: CaseStudyFact[];
  /** Optional chip-style header details (as on the Jia case study); replaces `facts` in the header when set. */
  details?: { label: string; values: string[]; span?: 1 | 2 | 3 }[];
  contribution?: { mine: string[]; notMine: string[] };
  sections: CaseStudySectionData[];
}

export function caseSections(study: CaseStudy): CaseSection[] {
  return study.sections.map(({ id, label }) => ({ id, label }));
}

export const dwellinn: CaseStudy = {
  slug: "dwellinn",
  name: "Dwellinn",
  subtitle: "Client Redesign & UI Kit",
  title: "From client app redesign to design system foundations",
  lede: "Dwellinn is an online travel agency focused on accommodation in Kenya. I was responsible for the application's UI kits and contributed to its redesign. This case study separates that client work from a new, independent engineering extension that turns the kit into tokens and React components.",
  facts: [
    { label: "Role", value: "UI/UX Designer, UI kit owner" },
    { label: "Client work", value: "UI kits · app redesign" },
    { label: "Date", value: "September 2023" },
    { label: "Extension", value: "React · TypeScript · design tokens (2026, independent)" },
  ],
  contribution: {
    mine: [
      "Designed the application's UI kits",
      "Contributed to the redesign of the application's screens",
      "Built the coded component extension (independent, 2026)",
    ],
    notMine: [
      "Engineering of the client's production application",
      "Any adoption of the coded extension by the client's developers — not claimed",
    ],
  },
  sections: [
    {
      id: "context",
      label: "Context",
      title: "Redesigning an existing booking product for a clearer path from search to stay.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Dwellinn was a real client project: the redesign of an existing accommodation-booking application. In my original presentation I described it as “an online travel agency that simplifies a user’s travel experience. It makes it easy for users to access a wide range of accommodation options and curated packages and activities.”",
            "The redesigned web app greets users with a destination-led entry point — “Where are you planning to stay first?” — and moves into navigation, search and filters for cities, dates and guests.",
          ],
        },
        {
          type: "rows",
          title: "Redesign objectives",
          rows: [
            [
              "Make search the first action",
              "A persistent search bar for city, check-in/check-out and guests, visible from the first screen.",
            ],
            [
              "Lead with destinations",
              "Destination cards with hotel counts help people start from a place, not a form.",
            ],
            [
              "Give the product a recognisable voice",
              "Local photography and copy (“nyama choma and tusker beer”) distinguish the brand from generic booking sites.",
            ],
          ],
        },
      ],
    },
    {
      id: "role",
      label: "Role",
      title: "I owned the UI kits; the redesign was a shared effort.",
      blocks: [
        {
          type: "list",
          title: "Responsibilities",
          items: [
            "Defining the visual foundations the kit was built on: colour, type and spacing",
            "Designing reusable components and their variants for the redesign",
            "Contributing redesigned application screens built from those components",
          ],
        },
      ],
    },
    {
      id: "challenges",
      label: "Challenges",
      title: "Rich imagery and dense booking controls on the same screen.",
      blocks: [
        {
          type: "rows",
          rows: [
            [
              "Legibility over photography",
              "Destination cards and copy sit directly on a full-bleed landscape photo; controls need solid surfaces to stay readable.",
            ],
            [
              "Compressing the search",
              "City, date range and guest count must fit one horizontal bar without hiding what each field does.",
            ],
            [
              "Brand colour vs. readable text",
              "The signature teal is strong as a colour but needs care when used behind or as small text.",
            ],
          ],
        },
      ],
    },
    {
      id: "foundations",
      label: "Foundations",
      title: "Visual foundations: teal for action, coral for emphasis, blush for calm.",
      blocks: [
        {
          type: "rows",
          title: "Colour (sampled from the published presentation)",
          rows: [
            ["Teal #2D9B90", "Brand colour — wordmark, city names, the search button."],
            ["Coral #F36D52", "Emphasis — section headings and highlighted words."],
            ["Blush #FDEFEE", "Presentation background, a warm neutral."],
            ["Ink #0B0B0B", "Primary text."],
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Typography is a geometric sans-serif with bold uppercase display headings and regular-weight body text. Spacing follows generous, rounded containers around search and cards.",
          ],
        },
      ],
    },
    {
      id: "system",
      label: "Coded extension",
      title: "Extending the UI kit into a coded design system.",
      blocks: [
        {
          type: "callout",
          tone: "extension",
          title: "New, independent work — not a client deliverable",
          text: "Everything in this section was built in 2026 for this portfolio, using the original design as visual reference. It was not commissioned by the client and there is no claim that the client’s developers used it.",
        },
        {
          type: "text",
          paragraphs: [
            "The extension translates the kit into design tokens and React + TypeScript components, exposing decisions a static file can leave implicit — focus states, disabled logic, minimum and maximum values, and colour contrast for text.",
          ],
        },
      ],
    },
    {
      id: "lessons",
      label: "Lessons",
      title: "A UI kit is a design decision made reusable.",
      blocks: [
        {
          type: "list",
          items: [
            "Owning the kit taught me that consistency is a product of naming and structure, not only of visual taste.",
            "Translating the kit into code exposed decisions a static file can leave implicit — focus states, disabled logic, minimum and maximum values, and colour contrast for text.",
            "Sampled brand colours do not automatically meet WCAG contrast; semantic tokens let me keep the brand palette while choosing accessible values for text-bearing surfaces.",
          ],
        },
      ],
    },
  ],
};

export const fadarhy: CaseStudy = {
  slug: "fadarhy",
  name: "FadäRhy",
  subtitle: "Founding Design & Engineering",
  showcase: {
    src: "/videos/fadarhy-showcase.mp4",
    poster: "/videos/fadarhy-showcase-poster.jpg",
    label: "FadäRhy product showcase",
  },
  details: [
    { label: "Role", values: ["Co-founder – Design Engineer"] },
    { label: "Year", values: ["2026"] },
    {
      label: "Project type",
      values: ["AI ecosystem navigator", "Life sciences", "Hackathon winner", "Live beta"],
      span: 1,
    },
    {
      label: "Focus",
      values: ["Product design", "Design system", "AI-assisted frontend", "Product evals"],
      span: 3,
    },
  ],
  facts: [
    { label: "Role", value: "Design Founder, UI/UX, AI-assisted frontend" },
    { label: "Team", value: "Collaborative hackathon team" },
    { label: "Outcome", value: "Hackathon winner · live product" },
    { label: "Live", value: "app.fadarhy.ch" },
  ],
  sections: [
    {
      id: "background",
      label: "Company background",
      title: "Designing and building Basel life-sciences ecosystem navigator.",
      blocks: [
        {
          type: "video",
          src: "/videos/fadarhy-loop.mp4",
          poster: "/videos/fadarhy-loop-poster.jpg",
          label: "FadäRhy product loop",
        },
        {
          type: "text",
          paragraphs: [
            "FadäRhy helps founders describe what their team needs in English, German, French or Baseldütsch and returns matched labs, investors, partners and experts, each with a reason and a source, plus a 12-month plan.",
            "I co-founded this project at Hack am Rhein 2026, where our five-person team won, and have continued working on FadäRhy since.",
          ],
        },
      ],
    },
    {
      id: "problem",
      label: "Process",
      title: "Making the ecosystem discovery **understandable, trustworthy and actionable**.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Rather than presenting founders with complex filters and unexplained recommendations, we structured the experience around three steps: Describe, Check and Act.",
          ],
        },
        {
          type: "figure",
          src: "/images/fadarhy/fadarhy-process.png",
          alt: "FadäRhy Describe, Check profile and Matches and plan workflow, showing a founder’s needs, editable team profile, sourced lab-space match and an introduction draft requiring approval.",
        },
      ],
    },
    {
      id: "checks",
      label: "Design system governance",
      title: "Making AI-generated interfaces consistent.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I translated design decisions into shared rules for AI-assisted development and interface review.",
          ],
        },
        { type: "visual", name: "fadarhy-rules" },
        { type: "visual", name: "fadarhy-tokens" },
      ],
    },
    {
      id: "design-system",
      label: "Design system",
      title: "",
      blocks: [
        {
          type: "figure",
          src: "/images/fadarhy/fadarhy-ui-kit.png",
          alt: "FadäRhy design patterns: buttons, inputs, filter chips, segmented controls, navigation and reusable actions.",
        },
      ],
    },
    {
      id: "evals",
      label: "Evals",
      title: "Testing trust beyond the interface",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "A consistent interface doesn't guarantee reliable recommendations. For FadäRhy, trust depends on whether founders receive relevant, explainable and actionable guidance.",
            { text: "Three questions behind trust.", strong: "Three questions behind trust." },
            "I defined an evaluation plan around three questions:",
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              text: "Understand. Does the app correctly capture the founder's needs?",
              strong: "Understand",
            },
            {
              text: "Explain. Are recommendations relevant and supported by sources?",
              strong: "Explain",
            },
            { text: "Act. Are the suggested next steps realistic and useful?", strong: "Act" },
          ],
        },
        { type: "visual", name: "fadarhy-scenarios" },
      ],
    },
    {
      id: "outcome",
      label: "Outcome",
      title: "A team win, and lessons about pace",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The design system keeps FadäRhy consistent in how it looks and behaves everywhere. The founder journey gives that consistency a purpose. Evals connect the two. They check whether a component follows the rules, and also whether the founder using it understands the match and knows what to do next.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "AI assistance sped up the build too, but only when I knew exactly what I wanted, because vague prompts produced vague interfaces. And showing sources and letting founders edit their profile turned out to be more than features. They were design decisions about trust, and they’re how founders came to trust the matches.",
          ],
        },
      ],
    },
  ],
};

export const attest: CaseStudy = {
  slug: "attest",
  name: "Donot Fraud AI",
  subtitle: "Security UX / Adaptive onboarding",
  title: "Verification without unnecessary friction.",
  lede: "An interaction design exploration of how onboarding can remain simple for legitimate users while asking for stronger identity checks when they are genuinely required.",
  facts: [
    {
      label: "Onboarding Workflows",
      value: "Swiss AI Weeks 2026 / Swisscom challenge",
    },
    {
      label: "Hackathon role",
      value: "UI design",
    },
    {
      label: "Exploration",
      value: "Security UX / adaptive onboarding",
    },
    {
      label: "Status",
      value: "Post-hackathon concept",
    },
  ],
  details: [
    {
      label: "Role",
      values: ["Design Engineer"],
    },
    {
      label: "Project Header",
      values: ["Onboarding Workflows"],
    },
    {
      label: "Focus",
      values: ["Security UX", "Adaptive onboarding"],
    },
    {
      label: "Year",
      values: ["2026"],
    },
  ],
  sections: [
    {
      id: "context",
      label: "Context and problem",
      title: "Security should protect users, not slow them down.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "At Swiss AI Weeks 2026, the Swisscom challenge explored identity verification in response to emerging AI-enabled fraud.",
            {
              text: "I developed Donot Fraud AI, where I focused on a specific design problem: reducing onboarding friction while preserving essential security requirements. My contribution centred on frontend development and UX design, working alongside a team of developers.",
              strong: "reducing onboarding friction while preserving essential security requirements.",
            },
          ],
        },
        {
          type: "text",
          title: "The problem",
          paragraphs: [
            { text: "Too many steps. Too much uncertainty.", strong: "Too many steps. Too much uncertainty." },
            "Identity verification can require repeated actions, switching between applications and navigating unfamiliar security checks. These interactions can create unnecessary effort for legitimate users. The challenge was to simplify the experience without removing the checks needed to establish trust.",
          ],
        },
      ],
    },
    {
      id: "exploration",
      label: "Design exploration",
      title: "A familiar interaction is not automatically a simpler journey.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            {
              text: "To explore how onboarding could be simplified, I examined a phone-first verification concept presented separately during the hackathon. It removed the need for an authenticator app, but introduced new friction such as waiting, interruptions, and network dependence. This led to a more useful direction: an adaptive verification flow that fits the user’s need",
              strong: "an adaptive verification flow that fits the user’s need",
            },
          ],
        },
        {
          type: "figure",
          src: "/images/donot-fraud/verification-comparison.png",
          alt: "Comparison of phone-first and adaptive verification. Phone-first avoids app setup but adds waiting, network dependence and accessibility barriers. Adaptive verification offers suitable methods and requests additional evidence only when required, with clear next steps.",
        },

      ],
    },
    {
      id: "experience",
      label: "Proposed experience",
      title: "One clear decision at a time.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The concept simplifies the visible journey without treating convenience as a substitute for security. Required identity proofing still takes place; the design removes redundant interactions around it.",
          ],
        },
        {
          type: "video",
          src: "/videos/donot-fraud/onboarding-walkthrough.mp4",
          poster: "/videos/donot-fraud/onboarding-walkthrough-poster.jpg",
          label: "Donot Fraud AI onboarding walkthrough",
        },
      ],
    },
    {
      id: "interaction",
      label: "Interaction system",
      title: "Uncertainty needs a next step, not just a warning.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The component system focuses on the moments when users are most likely to hesitate: choosing a method, understanding an extra check and recovering from failure. Consistent language and states support the flow more than additional decoration.",
          ],
        },
        {
          type: "visual",
          name: "attest-states",
        },
        {
          type: "list",
          title: "Each state answers three questions",
          ordered: true,
          items: ["What is happening?", "What do I need to do?", "What happens next?"],
        },
        {
          type: "text",
          paragraphs: [
            "States use semantic colour tokens, text labels, keyboard-accessible controls and visible error messages. Colour alone never communicates the result.",
          ],
        },
      ],
    },
    {
      id: "evaluation",
      label: "Evaluation plan",
      title: "Less friction. Same security requirements.",
      blocks: [
        {
          type: "text",
          paragraphs: ["To evaluate the proposed experience, I would compare a fixed onboarding journey with the adaptive design using identical tasks and identity assurance requirements. The goal is to determine whether the interface reduces unnecessary effort while maintaining essential security checks."],
        },
        { type: "visual", name: "attest-evaluation-plan" },
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      title: "Designing for trust, without unnecessary friction.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            {
              text: "The key insight from this exploration was that reducing friction isn't simply about removing steps. It's about understanding which checks are necessary, when they are required and how clearly they are communicated.",
              strong: "which checks are necessary, when they are required and how clearly they are communicated.",
            },
            {
              text: "Make verification effortless where possible, stronger where necessary and understandable at every step.",
              strong: "Make verification effortless where possible, stronger where necessary and understandable at every step.",
            },
          ],
        },
        {
          type: "text",
          title: "What comes next",
          paragraphs: [
            "The next step is to test the proposed experience with users and validate its security requirements with identity specialists.",
            {
              text: "The goal remains simple: reduce unnecessary onboarding effort without compromising trust or security.",
              strong: "reduce unnecessary onboarding effort without compromising trust or security.",
            },
          ],
        },
      ],
    },
  ],
};
