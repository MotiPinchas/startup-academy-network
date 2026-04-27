export interface Mentor {
  id: string;
  name: string;
  title: string;
  expertise: string;
  avatar: string;
  available: boolean;
  linkedin?: string;
  bio?: string;
}

export const mentors: Mentor[] = [
  { id: '1', name: 'מוטי פנחס', title: 'מנהל הקהילה ואיש האופרציה', expertise: 'Tech & Product', avatar: '/moti-pinchas.png', available: true, linkedin: 'https://www.linkedin.com/in/motipinchas/', bio: 'מנהל קהילת Startup Academic Network, אחראי על האופרציה, הטכנולוגיה והמוצר של הרשת.' },
  { id: '2', name: 'ד"ר שרה מנדל', title: 'מנהלת קרן YVC', expertise: 'Fundraising & VC', avatar: 'https://i.pravatar.cc/150?img=45', available: true },
  { id: '3', name: 'יוסי פרידמן', title: 'Serial Entrepreneur x3', expertise: 'GTM & Sales', avatar: 'https://i.pravatar.cc/150?img=22', available: false },
  { id: '4', name: 'הילה דרור', title: 'VP Marketing, Wix', expertise: 'Branding & Growth', avatar: 'https://i.pravatar.cc/150?img=49', available: true },
  { id: '5', name: 'אלי זיו', title: 'Angel Investor', expertise: 'Legal & IP', avatar: 'https://i.pravatar.cc/150?img=11', available: false },
];
