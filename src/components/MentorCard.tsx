'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LinkedInIcon from '@/components/LinkedInIcon';
import { Mentor } from '@/data/mentors';

export default function MentorCard({ mentor }: { mentor: Mentor }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/profile/mentor/${mentor.id}`)}
      className="snap-start shrink-0 w-48 bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex flex-col items-center gap-2 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative">
        <Image
          src={mentor.avatar}
          alt={mentor.name}
          width={64}
          height={64}
          className="rounded-full object-cover ring-2 ring-blue-100"
        />
        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${mentor.available ? 'bg-green-400' : 'bg-gray-300'}`} />
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
          <p className="text-sm font-semibold text-gray-800 leading-tight">{mentor.name}</p>
          <a
            href={mentor.linkedin ?? `https://linkedin.com/search/results/people/?keywords=${encodeURIComponent(mentor.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            aria-label="LinkedIn"
            onClick={e => e.stopPropagation()}
          >
            <LinkedInIcon size={13} />
          </a>
        </div>
        <p className="text-xs text-blue-600 leading-tight">{mentor.expertise}</p>
        <p className="text-xs text-gray-400 mt-0.5 leading-tight">{mentor.title}</p>
      </div>

      {/* Bio — 1 line truncated */}
      {mentor.bio && (
        <p className="text-xs text-gray-500 text-center w-full truncate px-1">{mentor.bio}</p>
      )}

      {/* Expertise bubbles */}
      <div className="flex flex-wrap justify-center gap-1 w-full">
        {mentor.expertise.split('&').map(tag => (
          <span key={tag} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
            {tag.trim()}
          </span>
        ))}
      </div>

      {/* Book button pinned to bottom */}
      <div className="mt-auto w-full pt-1">
        <button
          className={`w-full text-xs py-1.5 rounded-lg transition-colors font-medium ${
            mentor.available
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!mentor.available}
          onClick={e => e.stopPropagation()}
        >
          {mentor.available ? 'לקביעת פגישה' : 'לא זמין'}
        </button>
      </div>
    </div>
  );
}
