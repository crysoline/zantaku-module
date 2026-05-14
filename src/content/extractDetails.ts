/**
 * Fetches content details from your source.
 * https://docs.zantaku.com/modules/content/extractDetails
 */

import { type ContentInfo } from "../types";
import { apiHeaders, BASE_URL, resolveAnizoneId } from "../utils/api";

export async function extractDetails(id: string): Promise<ContentInfo | { error: any }> {
	try {
		const anizoneId = await resolveAnizoneId(id);
		const response = await fetch(
			`${BASE_URL}/info/${anizoneId}`,
			{ headers: apiHeaders() },
		);
		const data = await response.json();

		const totalEpisodes = data.totalEpisodes || 0;
		const status = data.metadata?.status || "Unknown";
		const year = data.metadata?.year || "";
		const format = data.metadata?.type || "TV";

		return {
			id: data.id,
			title: {
				english: data.title.english || data.title.romaji || "",
				romanji: data.title.romaji || undefined,
			},
			subtitle: data.title.romaji || "",
			description: data.description || "",
			isAdult: false,
			genres: [],
			type: format,
			metachips: {
				status: status,
				rating: "N/A",
			},
			cta: {
				totalContent: totalEpisodes,
			},
			infoStats: {
				duration: "Unknown",
				episodes: totalEpisodes,
				season: year,
			},
			moreFromSection: [],
			relatedSection: [],
			info: {
				format: format,
				startDate: year,
				episodes: totalEpisodes,
			},
		};
	} catch (e) {
		return { error: e };
	}
}
