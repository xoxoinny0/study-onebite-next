import ClientComponent from "@/app/_component/client-component";

export default function Page({ params }: { params: { id: string } }) {
  console.log("params :", params);
  return (
    <>
      book/[id] {params.id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </>
  );
}
