"use client";

import { useState, useEffect } from "react";
import { debounce } from "lodash";

// const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const TMDB_API_KEY = "9c5abf0e8c038652db89b7534ed902b4";

export default function SearchBar({ onResults }) {
    const [query, setQuery] = useState("");

    const bounce = debounce(async (value) => {
        if (!value.trim()) return;

        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
                    value
                )}&language=en-US`
            );
            const data = await res.json();
            onResults(data.results || []);
        } catch (error) {
            console.error("TMDB search failed:", error);
            onResults([]);
        }
    }, 500);

    useEffect(() => {
        bounce(query);
        return bounce.cancel;
    }, [query]);

    return (
        <div style={{ paddingTop: "50px" }} className="w-screen px-4">
            <input
                type="text"
                placeholder="Search movies..."
                style={{ width: "100%", borderRadius: "10px" }}
                className="bg-white px-5 py-3 rounded-full text-gray-900 placeholder-gray-400 outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}
