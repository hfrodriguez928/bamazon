var mysql = require("mysql");
var inquire = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) {
        console.log("error connnecting: " + err.stack);
    }
    makeTable();
});
var makeTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw error;
        var tab = '\t';
        // console.log(res);
        console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
        console.log("----------------------------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + tab + res[i].product_name + tab +
                res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
        }
        console.log("-----------------------------------------------------------");
        promptCustomer(res);
    });
};
var promptCustomer = function (res) {
    inquire.prompt([{
        type: 'input',
        name: 'choice',
        message: ' What would like to purchase? [Quit with Q]'
    }]).then(function (val) {
        var correct = false;
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === val.choice) {
                correct = true;
                var product = val.choice;
                var id = i;
                inquire.prompt([{
                    type: 'input',
                    name: 'quant',
                    message: 'How many would you lie to buy?'
                }]).then(function (val) {
                    if ((res[id].stock_quantity - val.quant) > 0) {
                        connection.query(
                            "UPDATE products SET stock_quantity='" + (res[id].stock_quantity - val.quant) +
                            "' WHERE product_name='" + product + "'",
                            function (err, res2) {
                                if (err) {
                                    throw err;
                                }
                                console.log("Product Bought!");
                                makeTable();
                            });
                    } else {
                        console.log("Not a Valid choice!!");
                        promptCustomer(res);
                    }
                });
            }
            if (val.choice == "Q" || val.choice == "q") {
                process.exit();
            }
        }
        if (i === res.length && correct === false) {
            console.log("Nott a valid selection");
            promptCustomer(res);
        }
    });
}

