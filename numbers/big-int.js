"strict mode";

console.log(132132132132132132132132132134654654654654654213213n);
console.log(BigInt(132132132132132132132132132134654654654654654213213));

// Operations
console.log(10000n + 10000n);

const huge = 2054654684646564654848464n;
const num = 23;
//console.log(huge * num); -> error
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20); // false different type
console.log(20n == 20); // true does type coversion

// console.log(Math.sqrt(20n)); -> error Math does not work with BgInt

console.log(20n / 15n); // -> 1
