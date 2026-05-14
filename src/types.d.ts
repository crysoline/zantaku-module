/**
 * Type structure for content data returned by discover module functions.
 * https://docs.zantaku.com/modules/types
 */

type Title = {
	english: string;
	romanji?: string;
	native?: string;
}

export type ContentCard = {
	id: string;
	malId?: number;
	title: Title;
	coverImage: string;
	isAdult: boolean;
	format?: string;                 // Not required but highly recommended
	averageDuration?: string;        // Not required but highly recommended
	rating?: string;                 // Not required but highly recommended
	episodes?: {
		num: number;                 // Total Episodes
		sub?: number;                // Total Episodes with Subtitles
		dub?: number;                // Total Episodes with Dubs
	}
}

export type ContentInfo = {
	id: string;
	malId?: number;
	title: Title;
	subtitle: string;               // Can put something like japanese title, or studio here.
	description: string;
	coverImage?: string;
	ageRating?: string;
	isAdult: boolean;
	genres: string[];
	type: string;
	metachips: {
		status: string;             // e.g. "Ongoing", "Completed", "Hiatus", etc.
		rating: string;             // e.g. 8.3
		popularity?: string;
	};
	cta: {
		totalContent: number;
	};
	infoStats: {
		duration: string;
		episodes?: number;          // Either episodes, chapters, or volumes must be provided
		chapters?: number;          // Either episodes, chapters, or volumes must be provided
		volumes?: number;           // Either episodes, chapters, or volumes must be provided
		season: string;
	}
	moreFromSection?: ContentCard[];
	relatedSection?: ContentCard[];
	characters?: [];
	info?: {
		format: string;
		countryOfOrigin?: string;
		startDate?: string;
		endDate?: string;
		studios?: string[];
		meanScore?: string;
		episodes?: number;          // Either episodes, chapters, or volumes must be provided
		chapters?: number;          // Either episodes, chapters, or volumes must be provided
		volumes?: number;           // Either episodes, chapters, or volumes must be provided
	}
}

export type Episode = {
	id: string;
	title: string;
	number: number;
	url: string;
}

export type Stream = {
	type: string;
	streamUrl: string;
	headers: Record<string, string>;
}

export type StreamingEpisode = {
	streams: Stream[];
	subtitles: Subtitles[];
}

export type Subtitles = {
	url: string;
	kind: string;
	lang?: string;
	label?: string;
}

export type Content = {
	id: string;
	malId: number;
	title: Title;
	format: string;
	episodes?: Episode[];       // Either episodes or pages must be provided
	pages?: [ url: string ];    // Either episodes or pages must be provided
}
