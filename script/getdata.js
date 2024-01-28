export default async function getData(dataBase) {
	try {
		const db = await fetch(`http://localhost:3000/${dataBase}`);
		const response = await db.json();
		return response;
	} catch (error) {
		throw new Error(error);
	}
}
