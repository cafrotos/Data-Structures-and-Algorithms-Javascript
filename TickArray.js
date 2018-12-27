let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

let arr = [];
let danhdau = [];
for(let i = 0; i < 100; i++) {
  arr.push(getRandomInt(100));
  danhdau.push(0);
}

for(let i = 0; i < 100; i++) {
  danhdau[arr[i]]++;
}

for(let i = 0; i < 100; i++) {
  if(danhdau[i] !== 0) {
    console.log("Value: " + i + " repeat: " + danhdau[i] + " time")
  }
}

