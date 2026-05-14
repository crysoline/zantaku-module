/**
 * Fetches search results from your source.
 * https://docs.zantaku.com/modules/content/searchResults
 */

import { type ContentCard } from "../types";
import { apiHeaders, BASE_URL } from "../utils/api";

export async function searchResults(query: string): Promise<ContentCard[]> {
	const results: ContentCard[] = [];

	try {
		const response = await fetch(
			`${BASE_URL}/search?q=${encodeURIComponent(query)}`,
			{ headers: apiHeaders() },
		);
		const data = await response.json();

		for (const item of data) {
			results.push({
				id: item.id,
				title: {
					english: item.title.english || item.title.romaji || "",
					romanji: item.title.romaji || undefined,
					native: item.title.native || undefined,
				},
				coverImage: item.image?.large || item.image?.medium || "",
				isAdult: false,
				format: item.metadata?.format || undefined,
				episodes: {
					num: item.totalEpisodes || 0,
				},
			});
		}

		return results;
	} catch (err) {
		console.error("Error fetching search results:", err);
		return results;
	}
}
