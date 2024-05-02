const Start = 6;
const End = 25;
const Times = 15;
const Array = [];
for (let i = 0; i < Times; ++i) {
  const u = i / (Times - 1);
  const v = Start + (End - Start) * u;
  Array.push(v);
}
console.log(Array);