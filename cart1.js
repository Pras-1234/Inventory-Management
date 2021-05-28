var cart = {
    "source": "",
    "inventoryID": "",
    "inventoryName": "",
    "quantity": "",
    "uom": "",
    "target": ""
};

$('#submit').click( function(){
    var src = $('#source').val();
    var invID = $('#invID').val();
    var invName = $('#invName').val();
    var qty = $('#qty').val();
    var uom = $('#uom').val();
    var target = $('#target').val();

    cart.source = src;
    cart.inventoryID = invID;
    cart.inventoryName = invName;
    cart.quantity = qty;
    cart.uom = uom;
    cart.target=target;

    $("#cart").append("<tr> <td>" + cart.source + "</td> <td>" + cart.inventoryID + " </td> <td>"  + cart.inventoryName + "</td> <td>" + cart.quantity + "</td> <td>" + cart.uom + "</td> <td>" + cart.target + "</td> </tr>");
});