# 바닐라 JS로 크롬 앱 만들기

## #2 Welcome to javascript

F12 -> console : JS

string : 문자로만 이루어진 것 ""



#### Variables

​	**변수** : 값을 저장하거나 유지하는 역할을 한다.

​	**constant**(상수) : 바뀌지 않는 값, 계속 유지 됨

​	ex. const a = 5;

​	변수 이름 : (낙타모양)myNameIsJo

​	**console.log** = print



​	**let 과 constant의 차이점??**

​	**const**는 상수여서 값을 업데이트 할 수 없음

​	**let**은 값을 업데이트 할 수 있음

​	**항상 const를 사용하되 가끔씩 필요하다면 let을 사용하고, 절대 절대로 var을 사용하지 말 것 !!!**



#### **Booleans**

​	true, false, null(아무 것도  없는 것으로 채워진 상태)

​	undefied 변수는 있지만 값이 정의되지 않은 상태



#### Arrays

​	**목적** : 하나의 variable 안에 데이터의 list를 가지는 것

​	**arrays 만드는 법** : const daysOfWeek = [];

​	**값 프린트 하기** : consolte.log(daysOfWeek[]); 

​	**리스트에 값 추가하기** : daysOfWeek.push();

​	**리스트에 값 업데이트하기** : daysOfWeek[숫자] = "값";



#### Objects

​	 리스트는 모든 값이 같은 의미를 가짐

```js
const player = {
    name: "eunchong",
    points: 10,
    fat: true, 
};

값 없데이트 : play.name "joeunchong"
값 추가 : play.sexy = "soon"
```

​	object는 property를 가진 데이터를 저장하도록 해줌



#### Functions(함수)

​	function의 목적은 여러 가지 일을 같은 코드로 하기 위함

​	()는 실행한다는 뜻

```js
function sayHello{
  console.log("Hello my name is eunchong")
}
```

```javascript
function syaHello(nameOfPerson, age) {
  console.log("Hello my name is" + nameOfPerson + " and I'm" + age)
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
```

```javascript
const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonName + " nice to meet you")
  },
};

player.sayHello("eunchong");
```



#### Returns

​	종종 console.log를 하고 싶을 때가 있어. 우린 결과를 눈으로 보기 위해서 지금까지 그렇게 해왔지. 근데 대부분	은 console.log를 하길 원치는 않을 거야. 네가 원하는 건, **function 외부에서 value를 제공받는 거야**

​	**한번 return하면 function은 끝나**. return을 하면 function은 작동을 멈추고 결과 값을 return하고 끝나버려



#### Conditionals(조건문)

​	prompt() : 팝업띄어서 입력값 받기

​	typeof : 변수의 타입보기

​	parseInt() : string -> int

```js
if(condition) {
    /// condition === true
} else {
    /// condition === false
}
```

​	isNaN(age) -> true or false

​	&& : AND, 둘다, 그리고

​	
