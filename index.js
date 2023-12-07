const data = [
    [1,2],
    [3,6],
    [2,4],
    [5,10],
    [7,14],
    [4,8],
];

let bias = Math.random() * (Math.random() > 0.5 ? 1 : -1)
let weight = Math.random() * (Math.random() > 0.5 ? 1 : -1);
const learningRate = 0.1;

console.log(`learningRate: ${learningRate}`)
console.log(`weight: ${weight}`)
console.log(`bias: ${bias}`)

for(let c=0; c < 100; c++){
    for(const dataPoint of data){

        let x = dataPoint[0];
        let y = perceptronForward(x);

        let error = dataPoint[1] - y;

        let weightCorrection = learningRate * error * x;
        let biasCorrection = learningRate * error;

        weight += weightCorrection;
        bias += biasCorrection;
    }
    console.log(`Epoch ${c+1}: `, weight, bias);
}

function perceptronForward(x){
    return (weight * x) + bias;
}