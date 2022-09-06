function getValidate(){
    var x=document.forms[inputAge].value;
    if(x===null||x===""){
        alert("Input your age please");
        return false;
    }
}