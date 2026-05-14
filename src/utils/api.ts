export const API_KEY = "YOUR_API_KEY_HERE";
export const BASE_URL = "https://api.crysoline.moe/api/v1/anime/anizone";
export const MAPPER_URL = "https://api.crysoline.moe/api/v1/mapper/map";

export function apiHeaders(): Record<string, string> {
	return { "x-api-key": API_KEY };
}

/**
 * Accepts either an AniList ID (numeric string) or an Anizone ID (alphanumeric).
 * If it's an AniList ID it calls the mapper and returns the Anizone ID.
 */
export async function resolveAnizoneId(id: string): Promise<string> {
	if (!/^\d+$/.test(id)) return id;

	const response = await fetch(
		`${MAPPER_URL}?id=${id}&provider=anizone`,
		{ headers: apiHeaders() },
	);
	const data = await response.json();

	if (!data.found) throw new Error(`No Anizone mapping found for AniList ID: ${id}`);
	return data.idMap as string;
}
