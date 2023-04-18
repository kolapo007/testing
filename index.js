function multiplyby() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
} 

function divideby() {
    divnum1 = document.getElementById("divfirstnumber").value;
    divnum2 = document.getElementById("divsecondnumber").value;
    document.getElementById("divresult").innerHTML = divnum1 / divnum2;
} 

function addby() {
    addnum1 = document.getElementById("addfirstnumber").value;
    addnum2 = document.getElementById("addsecondnumber").value;
    document.getElementById("addresult").innerHTML = addnum1 + addnum2;
} 

function subtractby() {
    subnum1 = document.getElementById("subfirstnumber").value;
    subnum2 = document.getElementById("subsecondnumber").value;
    document.getElementById("subresult").innerHTML = subnum1 - subnum2;
} 