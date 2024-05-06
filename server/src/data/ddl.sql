-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/gVAAND
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "ordertbl" (
    "order_id" varchar(25)   NOT NULL,
    "order_total" int   NOT NULL,
    "order_product_ids" varchar(75)   NOT NULL,
    "customer_id" int   NOT NULL,
    CONSTRAINT "pk_order" PRIMARY KEY (
        "order_id"
     )
);

CREATE TABLE "customer" (
    "customer_id" int   NOT NULL,
    "customer_name" varchar(50)   NOT NULL,
    "customer_phone" varchar(15)   NOT NULL,
    "customer_address_id" int   NOT NULL,
    CONSTRAINT "pk_customer" PRIMARY KEY (
        "customer_id"
     )
);

CREATE TABLE "product" (
    "product_id" varchar(25)   NOT NULL,
    "product_name" varchar(100)   NOT NULL,
    "product_manufacturer" varchar   NOT NULL,
    "product_qty_remaining" int   NOT NULL,
    "product_price" numeric(10,2)   NOT NULL,
    "product_category" varchar(25)   NOT NULL,
    "product_img_url" varchar(200)   NOT NULL,
    CONSTRAINT "pk_product" PRIMARY KEY (
        "product_id"
     )
);

CREATE TABLE "delivery_address" (
    "delivery_address_id" int   NOT NULL,
    "delivery_address_1" varchar(50)   NOT NULL,
    "delivery_address_2" varchar(50)   NOT NULL,
    "delivery_address_state" varchar(2)   NOT NULL,
    "delivery_address_city" varchar(50)   NOT NULL,
    "delivery_address_zip" int   NOT NULL,
    "delivery_address_country" varchar(3)   NOT NULL,
    CONSTRAINT "pk_delivery_address" PRIMARY KEY (
        "delivery_address_id"
     )
);

ALTER TABLE "ordertbl" ADD CONSTRAINT "fk_order_customer_id" FOREIGN KEY("customer_id")
REFERENCES "customer" ("customer_id");

ALTER TABLE "customer" ADD CONSTRAINT "fk_customer_customer_address_id" FOREIGN KEY("customer_address_id")
REFERENCES "delivery_address" ("delivery_address_id");