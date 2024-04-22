function displayButton(){
    var flag =true;

//Name Validation
    let name=document.getElementById("givenName").value;
    if(name.trim() === ''){
        flag=false;
        document.getElementById('errorName').textContent='please Enter Your Name';  
    }
    else {
        document.getElementById('errorName').textContent='';
    }

    //DOB validation
    let DOB=document.getElementById('giveDob').value;

    if(DOB.trim()===''){
        flag=false;
        document.getElementById('errorDate').textContent='Please Enter Your DOB'
    }
    else{
        document.getElementById('errorDate').textContent=''
    }

//Phone Number validation
    let phone=document.getElementById('givenPhoneNo').value;

    if(phone.trim()===''||parseInt(phone.trim())<6000000000|| parseInt(phone.trim())>9999999999){     
        flag=false;
        document.getElementById('errorPhone').textContent='please Enter ur number'

    }
    else
    {
        document.getElementById('errorPhone').textContent=''  
    }
//Mark Validation
    function markValidation(markId,errorId,min,passMark,max){
    let mark=document.getElementById(markId).value;
    if(mark.trim()==='' || parseInt(mark.trim())>max){
        flag=false;
        document.getElementById(errorId).textContent="Enter ur real mark"
    }
    else{
        document.getElementById(errorId).textContent=''
    }

}
    markValidation('gradeMarkTamil', 'errorMark1', 0, 35, 100);
    markValidation('gradeMarkEnglish', 'errorMark2', 0, 35, 100);
    markValidation('gradeMarkMaths', 'errorMark3', 0, 35, 100);
    markValidation('gradeMarkScience', 'errorMark4', 0, 35, 100);
    markValidation('gradeMarkSocial', 'errorMark5', 0, 35, 100);
    
    if (flag){
        showResults();
    }
}
function showResults(){
    let name= document.getElementById('givenName').value.trim();
    let dob= document.getElementById('giveDob').value.trim();
    let phone= document.getElementById('givenPhoneNo').value.trim()
    let tamil =parseInt(document.getElementById('gradeMarkTamil').value)||0;
    let english =parseInt(document.getElementById('gradeMarkEnglish').value)||0;
    let maths =parseInt(document.getElementById('gradeMarkMaths').value)||0;
    let science =parseInt(document.getElementById('gradeMarkScience').value)||0;
    let social =parseInt(document.getElementById('gradeMarkSocial').value)||0;
    let total= tamil+english+maths+science+social;

     let result= document.getElementById('result');
     result.innerHTML='';

     let table= document.createElement('table');
     let tbody=document.createElement('tbody')

     addInputRow(tbody,'Name',name);
     addInputRow(tbody,'DOB',dob );
     addInputRow(tbody,'Phone',phone)
     addInputRow(tbody,'Tamil', tamil);
     addInputRow(tbody,'English',english);
     addInputRow(tbody,'Maths',maths );
     addInputRow(tbody,'Science',science)
     addInputRow(tbody,'Social', social);
     addInputRow(tbody,'Total',total)

     table.appendChild(tbody);
     result.appendChild(table);
    
}
function addInputRow(tbody,label,value){
    let Row=tbody.insertRow();
    let cell1=Row.insertCell();
    let cell2=Row.insertCell();
    cell1.textContent=label;
    cell2.textContent=value;

    if(label!=="Name" && label!=='DOB' && label!=='Phone' && label!=='Total'){
       let cell3= Row.insertCell();
       cell3.textContent=(value>=35 &&value<=100 )? 'pass':'fail';
    }
}



