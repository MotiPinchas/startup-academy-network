export interface Mentor {
  id: string;
  name: string;
  title: string;
  expertise: string;
  avatar: string;
  available: boolean;
  linkedin?: string;
  whatsapp?: string;
  bio?: string;
}

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'מוטי פנחס',
    title: 'מנהל הקהילה ואיש האופרציה',
    expertise: 'Tech & Product',
    avatar: '/moti-pinchas.png',
    available: true,
    linkedin: 'https://www.linkedin.com/in/motipinchas/',
    whatsapp: '972506979963',
    bio: 'מנהל קהילת Startup Academic Network, אחראי על האופרציה, הטכנולוגיה והמוצר של הרשת.',
  },
  {
    id: '2',
    name: 'טל כתרן',
    title: 'Startup & Accelerators Guru',
    expertise: 'Business & Sales',
    avatar: '/tal-catran.png',
    available: true,
    whatsapp: '972505349858',
    bio: 'מנטור סדרתי שליווה מעל 2,000 סטארטאפים בתוכניות האצה — מגייס הון, בונה מנועי מכירות ועוזר ליזמים להפוך רעיונות למוצרים משני מציאות.',
  },
];
