# 바닐라 JS로 크롬 앱 만들기

## #2 Welcome to javascript

여기 나오는 문법들은 다른 언어에서도 모양만 다르지 똑같음 **원리이해**

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

​	|| : OR , 하나만, 또는

​	age === 100 : age가 100이라면?

​	age !== 100 : age가 100이 아니라면?



## #3 JAVASCRIPT ON THE BROWSER

#### The Document Object

​	JavaScript는 HTML에 이미 연결되어 있음

​	document.body



#### HTML in Javascript

​	document 함수 : JavaScript관점에서의 HTML

​	getElementById 함수 : id로 element를 가져올 수 있음	



#### Searching For Elements

​	getElementByClassName() 함수 : class로  html의 element를 가져올 수 있음

​	getElementByTagName() 함수 : tagname으로 element를 가져올 수 있음

​	**querySelector()** : css처럼 사용하여 element를 가져올 수 있음

​									element 하나만 가져올 수 있음 // 모두 가져오고 싶으면 querySelectorAll 사용

```js
const title = document.querySelector("#hello")
const title = document.getElemntById("hello")
//same things
```



#### Events

​	property 앞에 on이 붙으면 event이당!

​	addEventListener()

```javascript
const title = documnet.querySelector("div.hello:fisrt-child h1");

function hadleTitleClick() {
	title.style.color = "blue";
}

title.addEentListener("click", handleTitleClick)
```

- listen하고 싶은 event를 찾는 가장 좋은 방법

  ​	구글에 찾고 싶은 element의 이름, 예를 들어 h1 element을 MDN에 검색해보는거야

  ​	google : h1 html element mdn -> web API

  	

​	자바스크립트에서 window함수는 기본적으로 제공해준다

​	따라서 window.addEventListener를 사용해 event를 추가할 수 있다



#### CSS in Javascript

​	step1. element를 찾아라

​	step2. event를 listen해라

​	step3. 그 event에 반응해라

 

​	className : 모든걸 교체해버림, 이전에 css들은 상관하지 않음

​	classList : class들의 목록으로 작업할 수 있게해줌



```javascript
h1.classList.toggle("clicked");
```

​	**toggle**은 h1의 classList에 clicked class가 이미 있는지 확인해서

​	만약 있다면, toggle이 clicked를 제거해줌

​	만약 h1의 classList에 clicked가 존재하지 않는다면, toggle은 clicked를 classList에 추가를 해줌



## #4 Login

#### Form Submission

​	.length : 문자열의 길이를 확인하고 싶을 때 사용

​	JS를 사용해서 input태그로 value를 받아와서 login할때 id의 길이등을 제어할 수 있지만 html내에서 form태그 	안에서 input을 사용하면 required, maxlength를 이용하여 자체적으로 제어할 수 있음

​	우리가 form안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit된다는 규칙

​	또는, form안에 있는 버튼을 눌렀을 때, 이 때도 form이 자동으로 submit된다는 것

​	이 강의에서 하고싶은 것은 브라우저가 새로고침하지 않고 user정보를 저장하도록 하고 싶은것임요



#### Events

​	브라우저의 기본동작(event)을 막고 싶을 때 : event.preventDefault

​	form의 기본 동작은 submit

```javascript
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
```

​	link의 기본 동작은 이동



#### Getting Username

​	string과 변수 합치기

```js
greeting.innerText = "Hello " + username;
greeting.innerText = `Hello ${username}`; //백틱(``)사용
```



#### Saving Username

​	브라우저 내에서 바로 db로 저장하는 법 localStorage.setItem("username", "eunchong")

​	저장한 값 불러내기 localStorage.getItme("username")

​	저장된 값 지우기 localStroage.removeItem("username")



#### Loading Username

​	string을 변수로 저장하는 경우 변수의 이름은 대문자로 정하는 것이 관례



## #5 Clock

#### Intervals

​	Interval이란 '매번'일어나야 하는 무언가를 말함

​	ex) '매 2초'라고 하면 이게 interval

​	**setInterval**(실행하려는 함수 이름, **매** 호출 사이에 얼마나 기다릴지 시간)



#### Timeousts and Dates

​	**setTimeout**(실행하려는 함수 이름, 시간)

​	Date(), date.getHours(), date.getMinutes(), date.getSeconds()



#### PadStart

```js
"1".padStart(2,"0")
```



## #6 Quotes and background

#### Quotes

​	Math.random() : 0~1까지의 숫자를 랜덤으로 뽑아줌

​	round() 반올림, ceil() 올림, floor() 내림



#### Background

​	document.createElement("img")

​	document.body.appendChild(); : html body에 js에서의 요소를 추가하는 방법



## #7 To do list





## #8 Weather
