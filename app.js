//no of letters present in our name
var student = {
    name: "",
    type: "student"
  };
  
  document.addEventListener('DOMContentLoaded', contentLoaded);
  
  function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
  }
  
  function keyUp(event) {
    calculateNumericOutput();
  }
  
  function calculateNumericOutput() {
    student.name = document.getElementById('name').value;
    var hey=0;
    
    var totalNameValue = 0;
    for (var i = 0; i < student.name.length; i++) {
      totalNameValue += student.name.charCodeAt(i);z
    }
    var vowel=0;
    for(var i=0;i<student.name.length;i++){
        if(student.name.charAt(i)=='a' ||  student.name.charAt(i)=='e' || student.name.charAt(i)=='i' || student.name.charAt(i)=='o' || student.name.charAt(i)=='u' ){
          vowel=vowel+1;
        }
    }
    // Insert result into page
    
    var output = "Total Number of letters " + hey;
    var result="Total number of vowels "+vowel;
    document.getElementById('output').innerText = output;
    document.getElementByIf('result').innerText = result;
  }