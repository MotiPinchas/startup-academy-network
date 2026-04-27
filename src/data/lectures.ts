export interface Lecture {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  thumbnail: string;
  tag: string;
  watched: boolean;
}

export const lectures: Lecture[] = [
  { id: '1', title: 'איך לגייס את הסיד הראשון?', speaker: 'ד"ר שרה מנדל', duration: '42 דק\'', thumbnail: 'https://picsum.photos/seed/lecture1/300/180', tag: 'Fundraising', watched: true },
  { id: '2', title: 'בניית MVP ב-30 יום', speaker: 'פרופ\' רון אביב', duration: '28 דק\'', thumbnail: 'https://picsum.photos/seed/lecture2/300/180', tag: 'Product', watched: false },
  { id: '3', title: 'Customer Discovery 101', speaker: 'הילה דרור', duration: '35 דק\'', thumbnail: 'https://picsum.photos/seed/lecture3/300/180', tag: 'Marketing', watched: false },
  { id: '4', title: 'כיצד לבנות pitch deck מנצח', speaker: 'יוסי פרידמן', duration: '51 דק\'', thumbnail: 'https://picsum.photos/seed/lecture4/300/180', tag: 'Pitch', watched: false },
  { id: '5', title: 'IP ופטנטים לסטארטאפים', speaker: 'אלי זיו', duration: '33 דק\'', thumbnail: 'https://picsum.photos/seed/lecture5/300/180', tag: 'Legal', watched: true },
];
