export type Kpi = { value: string; label: string; detail: string };
export type Tool = { name: string; icon?: string; why: string };
export type Block = { title: string; text: string };
export type Deliverable = {
  title: string;
  text: string;
  status: 'achieved' | 'partial' | 'missed';
};

export type Experience = {
  slug: string;
  name: string;
  color: string;
  period: string;
  subtitle: string;
  role: string;
  kpis: Kpi[];
  mission: string;
  tools: Tool[];
  difficulties: Block[];
  deliverables: Deliverable[];
  openings: string;
};

export const experiences: Experience[] = [
  {
    slug: 'loreal',
    name: "L'Oréal",
    color: '#ff7ab8',
    period: '2026',
    subtitle: 'A one-line description of the mission goes here.',
    role: 'One sentence about what you did personally goes here.',
    kpis: [
      { value: 'XX%', label: 'First key figure', detail: 'What this number measures.' },
      { value: 'XX', label: 'Second key figure', detail: 'What this number measures.' },
      { value: 'XX', label: 'Third key figure', detail: 'What this number measures.' },
    ],
    mission: 'A short paragraph presenting the mission goes here.',
    tools: [
      { name: 'Python', icon: 'siPython', why: 'Why this tool was used goes here.' },
      { name: 'Git', icon: 'siGit', why: 'Why this tool was used goes here.' },
      { name: 'Internal tool', why: 'A tool without a public icon shows its initial.' },
    ],
    difficulties: [
      { title: 'First difficulty', text: 'What happened, and how you solved it.' },
      { title: 'Second difficulty', text: 'What happened, and how you solved it.' },
    ],
    deliverables: [],
    openings: '',
  },
  {
    slug: 'expleo',
    name: 'Expleo',
    color: '#a78bfa',
    period: '4 months - 2024',
    subtitle: 'A one-line description of the mission goes here.',
    role: 'One sentence about what you did personally goes here.',
    kpis: [
      { value: 'XX%', label: 'First key figure', detail: 'What this number measures.' },
      { value: 'XX', label: 'Second key figure', detail: 'What this number measures.' },
      { value: 'XX', label: 'Third key figure', detail: 'What this number measures.' },
    ],
    mission: 'A short paragraph presenting the mission goes here.',
    tools: [],
    difficulties: [],
    deliverables: [],
    openings: '',
  },
  {
    slug: 'dassault-systemes',
    name: 'Dassault Systèmes',
    color: '#3b82f6',
    period: '1 month - 2023',
    subtitle: 'A one-line description of the mission goes here.',
    role: 'One sentence about what you did personally goes here.',
    kpis: [
      { value: 'XX%', label: 'First key figure', detail: 'What this number measures.' },
      { value: 'XX', label: 'Second key figure', detail: 'What this number measures.' },
      { value: 'XX', label: 'Third key figure', detail: 'What this number measures.' },
    ],
    mission: 'A short paragraph presenting the mission goes here.',
    tools: [],
    difficulties: [],
    deliverables: [],
    openings: '',
  },
];