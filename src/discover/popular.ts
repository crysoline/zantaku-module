/**
 * Fetches popular content data.
 * https://docs.zantaku.com/modules/discover/popularContent#return-value
 */

import { type Content } from "../types";

export async function popularContent(): Promise<Content[]> {
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
