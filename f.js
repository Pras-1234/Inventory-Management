$('.Submit').click( function(){
 var rid=["Request Id:"];
 var ret=["req"]; 
 var num=String(Math.floor(Math.random()*100));
 
 var today = new Date(); 
 var dd = String(today.getDate()).padStart(2, '0'); 
 var mm = String(today.getMonth() + 1).padStart(2, '0');  
 var yyyy = today.getFullYear(); 
 today = yyyy+mm+dd;
 document.write(rid);
 document.write(ret);
 document.write(num);
 document.write(today);
 
 return(rid+ret+num+today);
});
$('.Submit').click( function(){
 var ord=[ "Your Order For Inventory Items Has Been Raised ." ];
 document.write(ord);
 return(ord);
}); 
