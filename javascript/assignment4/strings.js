//// write a program that checks for palindrom truthy
// dad .. dad
// mum ... mum
// cat ... tac
//if a string is palindrom , print the sentence stringWord is a palindrom...eg dad is not a palindrom
//if a string is not  palindrom , print the sentence stringWord is not a palindrom..eg cat is not a palindrom

const palindrome = word => word === word.split('').reverse().join('');
const isPalindrome = word => {
    if(palindrome(word)){
        console.log(`${word} is palindrome`)
    } else{
        console.log(`${word} is NOT palindrome`)
    }
}

// Test cases
isPalindrome("dad");
isPalindrome("mum");
isPalindrome("cat");

//output
/**
 * dad is palindrome
 * mum is palindrome
 * cat is NOT palindrome
 */
