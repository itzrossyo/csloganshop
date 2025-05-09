export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of Product",

        },
        {
            name: "images",
            type: "array",
            title: "Product Images",
            of: [{ type: "image" }],

        },
        {
            name: "author",
            type: "string",
            title: "Author of Product",
        },
        {
            name: "description",
            type: "text",
            title: "Description of Product",
        },
        {
            name: "slug",
            type: "slug",
            title: "product slug",
            options: {
                source: "name",

            },
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string',
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [{ type: "category" }],

        }


    ]
}