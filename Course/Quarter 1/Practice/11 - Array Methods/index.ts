let rollNo:number[] = [11,22,33,44,55];

rollNo.pop();
console.log(rollNo) 
//removes last element from array
rollNo.push(66);
//adds an element in last position of in array
console.log(rollNo);

rollNo.shift();
console.log(rollNo);//[22, 33, 44, 66]
//removes first element from array
rollNo.unshift(77);
console.log(rollNo);

rollNo.splice(1,0,88);
console.log(rollNo);