function palin() {
    const str=document.getElementById("input").value
    const cstr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const rev = cstr.split('').reverse().join('');
    if(str==rev){
        result.innerHTML="Yes it is a palindrome";
    }
    else{
        result.innerHTML="No it is not a palindrome"
    }
}