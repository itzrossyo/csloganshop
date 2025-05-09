import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import ProductPurchase from "@/app/components/ProductPurchase";
import { Star } from "lucide-react";


async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0]{
        _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id,
    }`;

    const data = await client.fetch(query, { slug });
    return data;
}

export default async function ProductPage({ params,
}: { params: { slug: string }; }) {
    const data: fullProduct = await getData(params.slug);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />
                    <div className="md:py-8 ">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">
                                {data.categoryName}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                        </div>
                        <div className="mb_6 flex items-center gap-3 md:mb-10">
                            <Button className="rounded-full gap-2">
                                {/* might add this or take it out  */}
                                <span className="text-sm">
                                    4.2
                                </span>
                                <Star className="h-6 w-5" />
                            </Button>
                            {/* might add this or take it out  */}
                            <span className="text-sm text-gray-500 transition duration-100">
                                56 Ratings
                            </span>
                        </div>



                        <ProductPurchase data={data} />

                        <p className="mt-12 text-base text-gray-500 tracking-wide">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}