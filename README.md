# bamazon

**OVERVIEW** 

This application utilizes a Sequel Pro database to help customers make purchases from the in-stock inventory. The database named Bamazon, contains a table named Products, and the columns of ItemID, ProductName, DepartmentName, Price, and StockQuantity.

This application is the Customer view application. Formatted exactly like the original file names of BamazonCustomer.js

**FUNCTIONALITY**  

On load the customer app will load the table and display all items for sale and the coresponding data for each item. You'll then be prompted for item number and desired quantity. Enter this to start the application : node bamazonCustomer.js
![alt tag](image1.png)

The application will also know if the item does not exist or if the quanity requested is less than number in-stock.
![alt tag](image2.png)
