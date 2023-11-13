import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import * as chrono from 'chrono-node';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const name = data.name as string;

	const date = chrono.parseDate(name);
	const now = new Date();

	if (date.getTime() - now.getTime() <= 1800000) {
		return json({ today: false });
	}

	if (
		date.getFullYear() === now.getFullYear() &&
		date.getMonth() === now.getMonth() &&
		date.getDate() === now.getDate()
	) {
		return json({ today: true });
	}

	return json({ today: false });
};
