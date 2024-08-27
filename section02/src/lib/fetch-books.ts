import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/book`;
  if (q) {
    url += `/search?q=${q}`;
  }

  console.log("url", url);

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
