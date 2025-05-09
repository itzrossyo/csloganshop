// app/shop/page.tsx
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { allProductsQuery } from "@/app/lib/queries"; // ✅ Corrected import

export default async function ShopPage() {
    const products = await client.fetch(allProductsQuery);

    return (
        <div className="bg-white py-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Shop All Books</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product: any) => (
                    <div
                        key={product._id}
                        className="group relative border rounded-lg overflow-hidden"
                    >
                        <Link href={`/product/${product.slug}`}>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.categoryName}</p>
                                <p className="text-md font-bold text-gray-900 mt-2">£{product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
