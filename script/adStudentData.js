import getData from './getdata.js';

export default async function adData(data) {
	try {
		const url = 'http://localhost:3000/students';
		const db = await fetch(url, {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const response = await db.json();

		return await response;
	} catch (error) {
		throw new Error(error);
	}
}
