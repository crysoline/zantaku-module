/**
 * Fetches releasing episodes data.
 * https://docs.zantaku.com/modules/discover/releasingEpisodes#return-value
 */

import { type Content } from "../types";

export async function releasingEpisodes(): Promise<Content[]> {
	return [
		{
			id: "12345",
			title: {
				english: "Example Content",
			},
			coverImage: "https://example.com/cover.jpg",
			nsfw: false,
			episodes: {
				num: 12,
			},
		},
	];
}
