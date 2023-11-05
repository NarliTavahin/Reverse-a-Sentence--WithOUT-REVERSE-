function Submit() {  
    var str = document.getElementById("name").value;  
    let array = str.split(' ');
    let buffer = "";
     for (i = 0; i < array.length; i++){
        buffer += array[array.length - (i+1)]+" ";
     }
    document.getElementById("reverse").value = buffer; 
    
} 
