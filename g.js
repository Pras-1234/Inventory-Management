var inventorytable = {
    "inventoryID": "",
    "inventoryName": "",
    "quantity": "",
    "uom": ""
};

$('#submit').click( function(){
    var invID = $('#invID').val();
    var invName = $('#invName').val();
    var qty = $('#qty').val();
    var uom = $('#uom').val();

    inventorytable.inventoryID = invID;
    inventorytable.inventoryName = invName;
    inventorytable.quantity = qty;
    inventorytable.uom = uom;

    $("#inventorytable").append("<tr> <td>" + cart.inventoryID + " </td> <td>"  + cart.inventoryName + "</td> <td>" + cart.quantity + "</td> <td>" + cart.uom + "</td> </tr>");
});
