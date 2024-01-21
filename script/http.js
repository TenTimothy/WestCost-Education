export default async function getData() {
    try {
      const db = await fetch("http://localhost:3000/course");
      const response = await db.json();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }


 