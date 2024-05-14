export interface Product {
  "product_id": string,
  "product_name": string
  "product_manufacturer": string
  "product_qty_remaining": number,
  "product_price": number,
  "product_category": string,
  "product_img_url": string,
  "product_description": string
}

export interface Filter {
  "name": string,
  "label": string,
}
