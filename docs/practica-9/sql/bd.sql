CREATE TABLE users (
  user_id int NOT NULL PRIMARY KEY,
  name varchar,
  email varchar,
  password varchar,
  addres longtext,
  zip_code mediumint,
  created_at datetime
);


CREATE TABLE products (
  product_id int NOT NULL PRIMARY KEY,
  name varchar,
  description text,
  price decimal,
  image_url varchar,
  category varchar,
  stock int,
  created_at datetime
);


CREATE TABLE categories (
  category_id int NOT NULL PRIMARY KEY,
  name varchar,
  description text
);


CREATE TABLE products_x_categories (
  pxc_id int NOT NULL PRIMARY KEY,
  product_id int NOT NULL,
  category_id int NOT NULL
);


CREATE TABLE carts (
  cart_id int NOT NULL PRIMARY KEY,
  user_id int NOT NULL,
  created_at datetime,
  status varchar
);


CREATE TABLE cart_items (
  cart_item_id int NOT NULL PRIMARY KEY,
  cart_id int NOT NULL,
  product_id int,
  quantity int,
  subtotal decimal
);


CREATE TABLE orders (
  order_id int NOT NULL PRIMARY KEY,
  user_id int NOT NULL,
  cart_id int NOT NULL,
  total decimal,
  status varchar,
  created_at datetime
);


ALTER TABLE products ADD CONSTRAINT products_id_fk FOREIGN KEY (product_id) REFERENCES products_x_categories (product_id);
ALTER TABLE categories ADD CONSTRAINT categories_category_id_fk FOREIGN KEY (category_id) REFERENCES products_x_categories (category_id);
ALTER TABLE users ADD CONSTRAINT users_user_id_fk FOREIGN KEY (user_id) REFERENCES carts (user_id);
ALTER TABLE users ADD CONSTRAINT users_user_id_fk FOREIGN KEY (user_id) REFERENCES orders (user_id);
ALTER TABLE carts ADD CONSTRAINT carts_cart_id_fk FOREIGN KEY (cart_id) REFERENCES orders (cart_id);
ALTER TABLE carts ADD CONSTRAINT carts_cart_id_fk FOREIGN KEY (cart_id) REFERENCES cart_items (cart_id);
ALTER TABLE cart_items ADD CONSTRAINT cart_items_product_id_fk FOREIGN KEY (product_id) REFERENCES products (product_id);
