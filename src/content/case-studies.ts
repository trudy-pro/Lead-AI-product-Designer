import type { CaseSection } from "@/components/case-study/case-study";

export interface CaseStudyFact {
  label: string;
  value: string;
}

export type CaseStudyBlock =
  | { type: "text"; paragraphs: string[] }
  | { type: "callout"; tone: "evidence" | "boundary" | "extension"; title: string; text: string }
  | { type: "rows"; title?: string; rows: [string, string][] }
  | { type: "list"; title?: string; items: string[] }
  | { type: "steps"; steps: { title: string; text: string }[] }
  | { type: "figure"; src: string; alt: string; caption?: string; variant?: "wide" | "mobile" }
  // Owner notes for evidence still to be added — never rendered publicly.
  | { type: "placeholder"; title: string; needed: string };

export interface CaseStudySectionData {
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
  title: string;
  lede: string;
  liveUrl?: string;
  facts: CaseStudyFact[];
  contribution: { mine: string[]; notMine: string[] };
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
  lede:
    "Dwellinn is an online travel agency focused on accommodation in Kenya. I was responsible for the application's UI kits and contributed to its redesign. This case study separates that client work from a new, independent engineering extension that turns the kit into tokens and React components.",
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
  title: "Designing and building an award-winning ecosystem navigator",
  lede:
    "FadäRhy helps people describe what their team needs — in English, German, French or Baseldütsch — and returns matched labs, investors, partners and experts, each with a reason and a source, plus a 12-month plan. It began as a collaborative hackathon project; our team won.",
  liveUrl: "https://app.fadarhy.ch/",
  facts: [
    { label: "Role", value: "Design Founder, UI/UX, AI-assisted frontend" },
    { label: "Team", value: "Collaborative hackathon team" },
    { label: "Outcome", value: "Hackathon winner · live product" },
    { label: "Live", value: "app.fadarhy.ch" },
  ],
  contribution: {
    mine: [
      "Founding design role — product concept and interface direction",
      "UI/UX design of the core journey and interface patterns",
      "Frontend implementation contributions using AI coding assistants",
    ],
    notMine: [
      "The whole product — it is a team result",
      "Data collection, matching logic and back-end services unless specifically credited",
    ],
  },
  sections: [
    {
      id: "problem",
      label: "Problem",
      title: "A rich ecosystem is hard to use if you don’t already know who to ask.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The Basel life-sciences ecosystem brings together lab space, investors, pharma partners, service providers, accelerators, research institutes and funding programmes. A founder may need several of these at once — and conventional directories expect you to know what you are looking for before they can help.",
            "FadäRhy starts from the user’s situation instead: describe your team and needs in your own words, then check and act on structured, sourced matches.",
          ],
        },
      ],
    },
    {
      id: "hackathon",
      label: "Hackathon",
      title: "Built under hackathon conditions, as a team.",
      blocks: [
        {
          type: "list",
          title: "Objectives visible in the product",
          items: [
            "Lower the barrier to discovering relevant organisations without prior ecosystem knowledge",
            "Keep the system’s interpretation visible and correctable before matching",
            "Turn matches into action: a 12-month plan and draft introduction emails",
          ],
        },
      ],
    },
    {
      id: "role",
      label: "My role",
      title: "Founding design, close to the code.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "As Design Founder I shaped the product concept and interface direction with the team, designed the user journey and interface, and contributed to the frontend implementation using AI-assisted coding. Product, data and engineering decisions were made collaboratively.",
          ],
        },
      ],
    },
    {
      id: "architecture",
      label: "Information architecture",
      title: "Describe → Check → Act, with a directory underneath.",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Describe",
              text: "Type or speak a few sentences about the team, stage and needs. Input in English, Deutsch, Français or Baseldütsch, with automatic detection.",
            },
            {
              title: "Check",
              text: "The description becomes a structured profile the user can correct before any matching happens.",
            },
            {
              title: "Act",
              text: "Ranked matches with reasons and sources, a 12-month plan and draft introduction emails.",
            },
          ],
        },
        {
          type: "rows",
          title: "Directory categories (live app, November 2026)",
          rows: [
            ["Organisations", "932 in the Basel life-sciences graph"],
            [
              "Categories",
              "Lab space · Investor · Pharma · Service provider · Accelerator · Research institute · Funding programme",
            ],
            ["Filters", "Category, region and focus; list and grid views"],
            ["Shortlist", "Save organisations from any view"],
          ],
        },
      ],
    },
    {
      id: "journeys",
      label: "Interaction",
      title: "Starting with a sentence, not a filter panel.",
      blocks: [
        {
          type: "list",
          title: "Interaction decisions visible in the product",
          items: [
            "Example prompts (‘Researcher planning a spin-off (French)’, ‘Growing biotech before Series A’, ‘Founder moving to Basel (German)’) show what a good description looks like.",
            "Language is a visible segmented control, not a hidden setting — multilingual input is part of the promise.",
            "A ‘browse the ecosystem’ route remains for people who prefer the directory.",
          ],
        },
      ],
    },
    {
      id: "implementation",
      label: "Implementation",
      title: "Reusable patterns across journey and directory.",
      blocks: [
        {
          type: "rows",
          title: "Reusable interface patterns",
          rows: [
            ["Filter chips with counts", "Colour-coded category dot, label and count; selected state inverts."],
            ["Segmented controls", "Language choice and list/grid view share one pill pattern."],
            ["Pill navigation", "Directory and Shortlist as icon + label tabs with a clear active state."],
            ["Row actions", "Consistent secondary ‘Save’ button per organisation."],
            [
              "Accessibility basics",
              "Skip-to-content link, light/dark theme toggle and language switcher in the header.",
            ],
          ],
        },
      ],
    },
    {
      id: "ai",
      label: "AI workflow",
      title: "How I used AI to build the frontend.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I used AI coding assistants to speed up implementation — not to make design decisions. The interface intent, component boundaries and acceptance criteria came first; generated code was a draft that I reviewed, corrected and tested in the browser before it went into the product.",
          ],
        },
        {
          type: "steps",
          steps: [
            {
              title: "Specify",
              text: "Describe the component or screen from the design: structure, states and constraints.",
            },
            { title: "Generate", text: "Use the assistant for a first implementation or a focused change." },
            { title: "Review", text: "Read the code; check semantics, naming and reuse of existing patterns." },
            { title: "Verify", text: "Test in the browser across states, keyboard and viewport sizes; iterate." },
          ],
        },
      ],
    },
    {
      id: "outcome",
      label: "Outcome",
      title: "A team win, and lessons about pace.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Our team won the hackathon, and FadäRhy is live at app.fadarhy.ch. The result belongs to the team.",
          ],
        },
        {
          type: "list",
          title: "Lessons",
          items: [
            "Designing with the code open lets interaction decisions be tested immediately instead of debated.",
            "AI assistance is fastest when the design intent is precise — vague prompts produce vague interfaces.",
            "Showing sources and an editable profile is a design decision about trust, not just a feature.",
          ],
        },
      ],
    },
  ],
};

export const attest: CaseStudy = {
  slug: "attest",
  name: "Donot Fraud AI",
  subtitle: "Security UX & Interaction Design",
  title: "Designing trustworthy digital identity verification",
  lede:
    "Digital onboarding and account recovery now face deepfakes, forged documents, injection attacks and presentation attacks. Attest explored how a verification journey can resist these threats without adding unnecessary friction. I designed the interface; another developer built the technical functionality.",
  facts: [
    { label: "Role", value: "UI Designer" },
    { label: "Event", value: "Swiss AI Weeks 2026" },
    { label: "Implementation", value: "Another developer" },
    { label: "Status", value: "Hackathon prototype, not independently validated" },
  ],
  contribution: {
    mine: [
      "UI design of the mobile verification journey",
      "Guidance, hierarchy and status communication across each step",
    ],
    notMine: [
      "NFC reading, biometric checks, fraud detection or any back-end security",
      "Technical implementation of the prototype",
    ],
  },
  sections: [
    {
      id: "challenge",
      label: "Challenge",
      title: "Fighting identity fraud in the age of AI.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The Swiss AI Weeks 2026 challenge asked how digital identity onboarding and account recovery could resist deepfakes, fraudulent documents, injection attacks and presentation attacks — while minimising unnecessary friction for legitimate users.",
          ],
        },
      ],
    },
    {
      id: "problem",
      label: "Problem",
      title: "Every extra check is a place where people can drop out or get confused.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Stronger verification usually means more steps: photograph a document, read its chip, take a selfie. Each step asks the user to do something unfamiliar with their phone, often without knowing why. The interface problem was to make those steps understandable and recoverable.",
          ],
        },
        {
          type: "rows",
          title: "Security versus friction",
          rows: [
            ["More signals", "More confidence for the system — and more effort for the person."],
            ["Unclear instructions", "Failed captures, retries and abandonment."],
            ["Opaque results", "Users can’t tell whether to retry, wait or seek help."],
          ],
        },
      ],
    },
    {
      id: "role",
      label: "My role",
      title: "UI design — the layer people actually see.",
      blocks: [
        {
          type: "list",
          items: [
            "Designing the screens of the mobile verification journey",
            "Writing and structuring step guidance and status messages in the UI",
            "Defining visual hierarchy so the current action is always the most prominent element",
          ],
        },
        {
          type: "callout",
          tone: "boundary",
          title: "What I did not do",
          text: "I did not implement NFC reading, biometric verification, fraud detection or back-end security. Another developer implemented the technical functionality.",
        },
      ],
    },
    {
      id: "journey",
      label: "Journey",
      title: "A four-step mobile verification journey.",
      blocks: [
        {
          type: "steps",
          steps: [
            { title: "Document capture", text: "Frame the identity document, with guidance on fit, light and glare." },
            { title: "NFC verification", text: "Explain where to hold the phone and what is being read, then show progress." },
            { title: "Selfie capture", text: "A distinct, guided step with a clear frame and instructions." },
            { title: "Result", text: "A plain-language outcome with a next action — retry, wait or continue." },
          ],
        },
      ],
    },
    {
      id: "communication",
      label: "Status & guidance",
      title: "Visual hierarchy, guidance and status communication.",
      blocks: [
        {
          type: "rows",
          title: "Design intentions",
          rows: [
            ["One action per screen", "The current task is the primary element; secondary information stays quiet."],
            ["Show progress", "Users know which step they’re on and how many remain."],
            ["Say why", "A short reason for each check makes an unfamiliar request feel legitimate."],
            ["Recoverable errors", "Failures say what went wrong and what to try next, not only that it failed."],
          ],
        },
      ],
    },
    {
      id: "collaboration",
      label: "Collaboration",
      title: "Designing alongside the developer.",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "I worked with the developer who implemented the prototype’s technical functionality, so that the screens reflected the steps the system actually needed.",
          ],
        },
      ],
    },
    {
      id: "limitations",
      label: "Limitations",
      title: "Limitations and lessons.",
      blocks: [
        {
          type: "callout",
          tone: "boundary",
          title: "Prototype status",
          text: "Attest is a hackathon prototype. It was not independently validated as fraud-resistant, and the interface is not evidence that any document, NFC, biometric or fraud-detection check is effective. All identity data shown in this portfolio is synthetic.",
        },
        {
          type: "list",
          title: "Lessons",
          items: [
            "Security UX is mostly communication: the system’s checks only work if people complete them correctly.",
            "An interface can explain a step, but it cannot substitute for the integrity of the system behind it — and should never imply more assurance than exists.",
          ],
        },
      ],
    },
  ],
};
