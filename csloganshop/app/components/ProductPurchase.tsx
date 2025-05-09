"use client";

import { useState } from "react";
import AddToBag from "./AddToBag";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

export default function ProductPurchase({ data }: { data: any }) {
    const [format, setFormat] = useState("hardcopy");

    const isPdf = format === "pdf";
    const displayPrice = isPdf ? 0 : 9.99;
    const priceId = isPdf
        ? "price_TEST_PDF" // ✅ REPLACE with your PDF Stripe Price ID
        : data.price_id;

    return (
        <>
            <div className="flex gap-2 mb-4">
                <label className="text-sm">Choose format:</label>
                <select
                    className="border px-3 py-2 rounded"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                >
                    <option value="hardcopy">Hard Copy (£9.99)</option>
                    <option value="pdf">PDF (Free)</option>
                </select>
            </div>

            <div className="flex items-end gap-2 mb-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    £{displayPrice}
                </span>
                {!isPdf && (
                    <span className="mb-0.5 text-red-500 line-through">
                        £{displayPrice + 3}
                    </span>

                )}

            </div>
            <div className="mb-4">
                <span className="text-sm text-gray-500">
                    Incl. VAT plus shipping
                </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck />
                <span className="text-sm">
                    2-4 Day shipping
                </span>
            </div>


            <div className="flex gap-2.5">
                <AddToBag
                    currency="GBP"
                    description={data.description}
                    image={data.images[0]}
                    name={`${data.name} (${format.toUpperCase()})`}
                    price={displayPrice}
                    price_id={priceId}
                />
                <Button variant={"secondary"}>Checkout now</Button>
            </div>
        </>
    );
}
