import ClientComponent from "@/app/_component/client-component";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  console.log("props :", searchParams);
  return (
    <div>
      Search 페이지 {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
