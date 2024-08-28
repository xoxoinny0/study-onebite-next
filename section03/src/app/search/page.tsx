export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  console.log("props :", searchParams);
  return <div>Search 페이지 {searchParams.q}</div>;
}
