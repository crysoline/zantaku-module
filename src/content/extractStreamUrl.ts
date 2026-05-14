/**
 * Fetches stream urls from your source.
 * https://docs.zantaku.com/modules/content/extractStreamUrl
 */

import { type Episode, type StreamingEpisode, type Subtitles } from "../types";
import { apiHeaders, BASE_URL } from "../utils/api";

export async function extractStreamUrl(episode: Episode): Promise<StreamingEpisode | string> {
	try {
		const animeId = episode.url;       // set in extractEpisodes
		const episodeId = episode.id;

		const response = await fetch(
			`${BASE_URL}/sources?id=${encodeURIComponent(animeId)}&episodeId=${encodeURIComponent(episodeId)}`,
			{ headers: apiHeaders() },
		);
		const data = await response.json();

		const source = data.sources?.[0];
		if (!source) throw new Error("No sources found");

		const streamUrl = source.url;

		const subtitles: Subtitles[] = (data.subtitles || []).map((sub: any) => ({
			url: sub.url,
			kind: "subtitles",
			lang: sub.srcLang || "en",
			label: sub.label || "English",
		}));

		return {
			streams: [
				{
					type: "SUB",
					streamUrl: streamUrl,
					headers: data.headers || {},
				},
			],
			subtitles: subtitles,
		};
	} catch (err) {
		console.error("Error fetching stream URL:", err);
		return "https://error.org/";
	}
}
