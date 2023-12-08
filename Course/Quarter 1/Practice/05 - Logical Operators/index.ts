// Logical Operators are used to combine multiple conditions. 

let n:number = 5;

console.log(n >= 5 && n < 10);
//            T    &&    T     
// So Output is True.

console.log(n > 5 && n < 10);
//            F    &&    T     
// So Output is False.

console.log(n >= 5 || n < 10);
//            T    ||    T     
// So Output is True.

console.log(n > 5 || n < 10);
//           F    ||    T     
// So Output is True.

console.log(!(n < 10));
//          !T      
// So Output is False.

console.log(!(n > 10));
//          !F      
// so Output is True.

