/**
 * Fetches featured content data. ( for the carousel )
 * https://docs.zantaku.com/modules/discover/featuredContent
 */

import { type Content } from "../types";

export async function featuredContent(): Promise<Content[]> {
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
