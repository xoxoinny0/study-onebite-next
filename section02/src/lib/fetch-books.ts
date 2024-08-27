import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `${process.env.SERVER_URL}/book`;
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
