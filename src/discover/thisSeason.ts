/**
 * Fetches this season content data.
 * https://docs.zantaku.com/modules/discover/thisSeasonContent#return-value
 */

import { type Content } from "../types";

export async function thisSeasonContent(): Promise<Content[]> {
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
