DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 100, 10), ("iPhone", "Electronics", 200, 15), ("Sweater", "Clothing", 20, 50), 
("Chair", "Furniture", 50, 60), ("Table", "Furniture", 150, 20), ("Bookshelf", "Furniture", 30, 50), 
("Potato Chips", "Food", 5, 100), ("Candle", "Home Goods", 25, 90), ("Wool Blanket", "Home Goods", 40, 10),
("Coffee Maker", "Home Appliance", 35, 20); 


