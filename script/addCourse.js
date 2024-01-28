export default async function addCourse(data, dataBase) {
	try {
		const url = `http://localhost:3000/${dataBase}`;
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
