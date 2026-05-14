/**
 * Fetches episodes from your source.
 * https://docs.zantaku.com/modules/content/extractEpisodes
 */

import { type Episode } from "../types";
import { apiHeaders, BASE_URL, resolveAnizoneId } from "../utils/api";

export async function extractEpisodes(id: string): Promise<Episode[]> {
	const results: Episode[] = [];

	try {
		const anizoneId = await resolveAnizoneId(id);
		const response = await fetch(
			`${BASE_URL}/episodes/${anizoneId}`,
			{ headers: apiHeaders() },
		);
		const data = await response.json();

		for (const ep of data) {
			results.push({
				id: ep.id,
				title: ep.title || `Episode ${ep.number}`,
				number: ep.number,
				url: anizoneId, // Anizone anime ID stored here so extractStreamUrl can use it
			});
		}

		return results;
	} catch (err) {
		console.error("Error fetching episodes:", err);
		return results;
	}
}
