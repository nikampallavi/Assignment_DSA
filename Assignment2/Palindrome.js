 function isPalindrome(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    if(rev==str){
        return ('It is a palindrome');
    }else return ('It is not a palindrome');
}

const string1=isPalindrome('Pallavi');
console.log(string1);

const string2=isPalindrome('madam');
console.log(string2);

