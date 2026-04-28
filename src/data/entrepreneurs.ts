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
    name: 'נחום אוהרון',
    startup: '',
    field: '',
    avatar: 'https://ui-avatars.com/api/?name=נ+א&background=6366f1&color=fff&size=128',
    bio: '',
    whatsapp: '972538878899',
    linkedin: 'https://www.linkedin.com/in/nahum-oharon-73089a172/',
    canHelp: [],
    needsHelp: [],
  },
];
