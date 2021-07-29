function myFunction(){
  var table=document.getElementById("Table");
  var row=table.insertRow();
  var cell1=row.insertCell();
  var cell2=row.insertCell();
  var cell3=row.insertCell();
  var cell4=row.insertCell();
  var cell5=row.insertCell();
  var cell6=row.insertCell();
  var cell7=row.insertCell();
  var cell8=row.insertCell();
  var text="";
  var checkBoxlength;
  function check(){
    var p1=document.forms[0];
    for(var i=0;i<p1.length;i++)
      if(p1[i].checked){
        checkBoxlength++;
        text=text+p1[i].value+",";
      }
  }
  check();
  cell1.innerHTML=document.getElementById("First Name").value;
cell2.innerHTML=document.getElementById("Last Name").value;
cell3.innerHTML=document.getElementById("Address").value;
cell4.innerHTML=document.getElementById("Pincode").value;
cell5.innerHTML=document.getElementById("Gender").value;


cell6.innerHTML=text;
cell7.innerHTML=document.getElementById("State").value;
cell8.innerHTML=document.getElementById("Country").value;
}