/*js로 간단한 계산기 만들기
object와 function을 이용하여!*/
const calculater = {
  add: function (a, b) {
    console.log(a + b)
  },
  subtract: function (a, b) {
    console.log(a - b)
  },
  div: function (a, b) {
    console.log(a / b)
  },
  multiply: function (a, b) {
    console.log(a ** b)
  },
};

calculater.add(2, 4);
calculater.subtract(2, 4);
calculater.div(2, 4);
calculater.multiply(2, 4);

//console.log를 함수내부에서 사용하지 않고 다시 계산기 만들기
const RecentCalculater = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a ** 2;
  },
};

const add = RecentCalculater.add(2, 4);
const subtract = RecentCalculater.subtract(2, 4);
const div = RecentCalculater.div(2, 4);
const multiply = RecentCalculater.multiply(2, 4);

console.log(add);
console.log(subtract);
console.log(div);
console.log(multiply);

//아니 이거 복붙해도 왜 자동으로 들여쓰기 되냐 킹받네,,,,,,,,,,
