function calulateAkan() 
    
    var userDateInput = document.getElementById("inputDate").value;
  
    var gender ;
    if (document.getElementById('maleChecked').checked) {
     gender = document.getElementById('maleChecked').value;
     }
     else if(document.getElementById('femaleChecked').checked){
       gender = document.getElementById('femaleChecked').value;
    }