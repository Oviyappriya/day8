function action(){

    var fn = document.getElementById('fname').value;
    var ln = document.getElementById('lname').value;
    var addr = document.getElementById('address').value;
    var pcode = document.getElementById('Pincode').value;

    let tablebody = document.querySelector('tbody');
    var trow2 = tablebody.insertRow(0);
    var cell1 = trow2.insertCell(0);
    var cell2 = trow2.insertCell(1);
    var cell3 = trow2.insertCell(2);
    var cell4 = trow2.insertCell(3);
    var cell5 = trow2.insertCell(4);
    var cell6 = trow2.insertCell(5);
    var cell7 = trow2.insertCell(6);
    var cell8 = trow2.insertCell(7);
    cell1.innerHTML = fn;
    cell2.innerHTML = ln;
    cell3.innerHTML = addr;
    cell4.innerHTML = pcode;

   
}


