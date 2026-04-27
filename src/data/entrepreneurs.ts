export interface Entrepreneur {
  id: string;
  name: string;
  startup: string;
  field: string;
  avatar: string;
  bio: string;
  whatsapp?: string;
  linkedin?: string;
  canHelp: string[];
  needsHelp: string[];
}

export const entrepreneurs: Entrepreneur[] = [
  {
    id: '1',
    name: 'יעל כהן',
    startup: 'MedAI',
    field: 'HealthTech',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bio: 'בונה AI לאבחון רפואי מוקדם',
    whatsapp: '972501234567',
    canHelp: ['AI/ML', 'HealthTech', 'Product'],
    needsHelp: ['Fundraising', 'Sales', 'Marketing'],
  },
  {
    id: '2',
    name: 'אבי לוי',
    startup: 'GreenFlow',
    field: 'CleanTech',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'פתרונות אנרגיה ירוקה לעסקים קטנים',
    whatsapp: '972502345678',
    canHelp: ['CleanTech', 'B2B Sales', 'Operations'],
    needsHelp: ['Tech', 'Pitch Deck', 'Investors'],
  },
  {
    id: '3',
    name: 'נועה שפירא',
    startup: 'EduVerse',
    field: 'EdTech',
    avatar: 'https://i.pravatar.cc/150?img=32',
    bio: 'למידה אינטראקטיבית במציאות מדומה',
    whatsapp: '972503456789',
    canHelp: ['EdTech', 'UX Design', 'Community'],
    needsHelp: ['Backend Dev', 'Fundraising', 'Partnerships'],
  },
  {
    id: '4',
    name: 'דן רוזנברג',
    startup: 'FinGuard',
    field: 'FinTech',
    avatar: 'https://i.pravatar.cc/150?img=15',
    bio: 'הגנת סייבר לחשבונות פיננסיים',
    whatsapp: '972504567890',
    canHelp: ['Cybersecurity', 'FinTech', 'Compliance'],
    needsHelp: ['Marketing', 'Storytelling', 'Design'],
  },
  {
    id: '5',
    name: 'מיכל גרין',
    startup: 'AgriBot',
    field: 'AgriTech',
    avatar: 'https://i.pravatar.cc/150?img=44',
    bio: 'רובוטיקה חקלאית לחקלאות קטנה',
    whatsapp: '972505678901',
    canHelp: ['Robotics', 'Hardware', 'AgriTech'],
    needsHelp: ['Software', 'Pitch Practice', 'Distribution'],
  },
  {
    id: '6',
    name: 'עמית ברק',
    startup: 'LogiChain',
    field: 'Supply Chain',
    avatar: 'https://i.pravatar.cc/150?img=18',
    bio: 'בלוקצ\'יין לניהול שרשרת אספקה',
    whatsapp: '972506789012',
    canHelp: ['Blockchain', 'Logistics', 'B2B'],
    needsHelp: ['Product Feedback', 'UX', 'LLM Integration'],
  },
];
