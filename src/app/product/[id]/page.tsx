export default async function ProductView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  console.log("params",await params)

  return (
    <div className="bg-purple-300 p-10">
      <h2>Products View/Edit</h2>
    </div>
  );
}
