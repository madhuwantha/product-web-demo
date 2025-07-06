import { API_URL } from "@/app/const/variables";
import ProductForm from "@/componets/NavBar/ProductForm/ProductForm";

export default async function ProductView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;
  console.log("id", id);

  const res: Response = await fetch(`${API_URL}/products/${id}`, {
    cache: "no-store",
  });
  const productData = await res.json();
  const product = productData.data;

  

  return (
    <div className="container mx-auto">
      <ProductForm  product={product} isView={true} />
    </div>
  );
}
