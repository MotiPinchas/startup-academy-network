import Image from 'next/image';
import LinkedInIcon from '@/components/LinkedInIcon';
import { Lecture } from '@/data/lectures';

export default function LectureCard({ lecture }: { lecture: Lecture }) {
  return (
    <div className="snap-start shrink-0 w-52 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="relative">
        <Image
          src={lecture.thumbnail}
          alt={lecture.title}
          width={208}
          height={117}
          className="w-full object-cover"
        />
        <span className="absolute top-2 left-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-full">
          {lecture.duration}
        </span>
        {lecture.watched && (
          <span className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
            נצפה
          </span>
        )}
      </div>
      <div className="p-2.5">
        <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">{lecture.title}</p>
        <div className="flex items-center gap-1 mt-1">
          <a
            href={`https://linkedin.com/search/results/people/?keywords=${encodeURIComponent(lecture.speaker)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={12} />
          </a>
          <p className="text-xs text-gray-400">{lecture.speaker}</p>
        </div>
        <a
          href={lecture.url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-1.5 w-full text-xs bg-red-600 hover:bg-red-700 text-white py-1.5 rounded-lg transition-colors font-medium"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <polygon points="2,1 9,5 2,9" />
          </svg>
          לצפייה
        </a>
      </div>
    </div>
  );
}
