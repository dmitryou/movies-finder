'use client';

import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { Search } from 'lucide-react';

// const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const TMDB_API_KEY = '9c5abf0e8c038652db89b7534ed902b4';

export default function SearchBar({ onResults }) {
  const [query, setQuery] = useState('');

  const bounce = debounce(async (value) => {
    if (!value.trim()) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(value)}&language=en-US`
      );
      const data = await res.json();
      onResults(data.results || []);
    } catch (error) {
      console.error('TMDB search failed:', error);
      onResults([]);
    }
  }, 500);

  useEffect(() => {
    bounce(query);
    return bounce.cancel;
  }, [query]);

  return (
    <div className="w-full">
      <div className="flex items-center w-full border border-white/30 rounded-full px-5 py-3 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md">
        {/* <Search className="w-5 h-5 mr-3 text-gray-300" /> */}
        <input
          type="text"
          placeholder="Search movies..."
        //   className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
		  className="w-full bg-gray-100 px-4 py-2 rounded-md outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
