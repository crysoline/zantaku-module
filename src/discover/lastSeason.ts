/**
 * Fetches last season content data.
 * https://docs.zantaku.com/modules/discover/lastSeasonContent
 */

import { type Content } from "../types";

export async function lastSeasonContent(): Promise<Content[]> {
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
