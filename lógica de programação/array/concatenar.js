const a1 = [5, 8, 9];
const a2 = [10, 12, 22];

const a3 = a1.concat(a2);

console.log(a3);


//concaternar mais elemtenos
const a4 = a1.concat(a2, [3, 5, 1], 'raimundo');
console.log(a4);


//usando spread

const a5 = [...a1, ...a2];
console.log(a5);