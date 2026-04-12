function reverseString(str) {
    if(str.length <=1){
        return str;
    }
    // recursive case - first character + reverse of the rest of the string
    // str[0] is the first character
    // str.slice(1) is the rest of the string - excludes the first character
    return reverseString(str.slice(1)) + str[0];


}

// alternative implementation using array methods
function reverseStringArrayMethod(str) {
    if (str === ""){
        return "";
    }

    return reverseStringArrayMethod(str.slice(1)) + str[0];
}

module.exports={
    reverseString,
    reverseStringArrayMethod
}