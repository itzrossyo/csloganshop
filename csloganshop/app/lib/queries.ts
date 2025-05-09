// app/lib/queries.ts

export const allProductsQuery = `*[_type == "product"] | order(_createdAt desc){
  _id,
  name,
  price,
  "slug": slug.current,
  "imageUrl": images[0].asset->url,
  "categoryName": category->name
}`;
