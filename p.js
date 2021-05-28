var inventorytargettable = {
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

    inventorytargettable.inventoryID = invID;
    inventorytargettable.inventoryName = invName;
    inventorytargettable.quantity = qty;
    inventorytargettable.uom = uom;

    $("#inventorytargettable").append("<tr> <td>" + inventorytargettable.inventoryID + " </td> <td>"  + inventorytargettable.inventoryName + "</td> <td>" + inventorytargettable.quantity + "</td> <td>" + inventorytargettable.uom + "</td> </tr>");
});