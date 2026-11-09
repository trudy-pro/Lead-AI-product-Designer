export const projects = {
  jia: {
    name: "Jia",
    description:
      "Product designer (Jun 2022 – Jun 2023) on Jia, a fintech lending app helping small business owners apply for loans and earn rewards for repaying on time. Worked across the UX process: 11 user interviews, personas, user flows, wireframes, prototyping and hi-fi interface refinement. Jia raised $4.3M seed funding.",
  },
  dwellinn: {
    name: "Dwellinn",
    description: "Redesigned the client's existing app and developed its UI kits.",
  },
  fhnw: {
    name: "FHNW Institute of Interactive Technologies",
    description:
      "Research Associate in Human Computer Interaction (2024–2025), working on interdisciplinary projects involving web applications, 3D, XR and AI.",
  },
  fadarhy: {
    name: "FadäRhy",
    description:
      "Founding designer and cofounder on the hackathon-winning FadäRhy team in the life sciences and AI startup ecosystem, leading design and contributing to frontend implementation.",
  },
  attest: {
    name: "Donot Fraud AI",
    description:
      "Designed the identity-verification interface for Donot Fraud AI (donotfraud.ai, “Neutralizing AI Fraud Era Threats”) at Swiss AI Weeks 2026 (Swisscom challenge), tackling identity fraud with AI in fintech and digital trust.",
  },
} as const;

export type ProjectKey = keyof typeof projects;
