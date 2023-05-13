// var isSubsequence = function(s, t) {
//     let pointer = 0;
//     const sLength = s.length;
//     const tLength = t.length;
//     for (let i = 0; i < tLength; i++) {
//         if (s[pointer] === t[i]) {
//             pointer++;
//         }
//     }
//     console.log(pointer, sLength)
//     if (pointer === sLength) return true;
//     else return false;
// };

const isSubsequence = function(s,t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}


console.log(isSubsequence("abc", "ahbgdc")) //true