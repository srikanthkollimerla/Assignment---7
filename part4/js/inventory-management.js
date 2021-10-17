/*eslint-env browser*/

function update(inventory) {
    'use strict';

    var sku = Number(prompt("Enter the product SKU number"));
    if (sku < 1) {
        alert("Enter valid SKU number");
    } else {
        var quantity = Number(prompt("Enter new quantity"));
        if (quantity < 0) {
            alert("Enter positive quantity");
        } else {
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i][0] === sku) {
                    inventory[i][2] = quantity;
                    console.log("Product " + sku + "quantity is now " + quantity);
                }
            }
        }
    }
}

function display(inventory) {
    'use strict';

    for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i][0] + ' ' +
                    inventory[i][1] + ' (' +
                    parseInt(inventory[i][2]) + ') ' +
                    '$' + parseFloat(inventory[i][3])
                    );
    }
    console.log('');
}

function menu() {
    'use strict';
    console.log('Command details:');
    console.log('show - Show all products');
    console.log('update - Update an existing product inventory');
    console.log('exit - Exit the program');
    console.log('');
}

function start() {
    'use strict';

    var inventory, command;

    inventory = [
        [345, 'Unicorn',10, 52.0],
        [765, 'Mickey', 8, 80.0],
        [123, 'Donald duck', 60, 45.90],
        [908, 'Scooby Doo', 40, 25.99],
        [549, 'Alladin', 20, 100.0]
    ];

    menu();

    while (true) {
        command = window.prompt("Enter command").toLowerCase();
        if (command === null) {
            break;
        }

        if (command === "show") {
            display(inventory);
        } else if (command === "update") {
            update(inventory);
        } else if (command === 'exit') {
            break;
        } else {
            window.alert("Not a valid command.");
        }
    }
    window.console.log("Terminated Program.");
}

start();