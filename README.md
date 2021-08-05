## 바닐라 JS로 크롬 앱 만들기

### #2 Welcome to javascript

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

​	**기본적으로는 const를 사용하고, 필요할 때만 let을 사용, var는 쓰지 않기**



#### **Booleans**

​	true, false, null(아무 것도  없는 것으로 채워진 상태)

​	undefied 변수는 있지만 값이 정의되지 않은 상태



#### Arrays

​	**목적** : 하나의 variable 안에 데이터의 list를 가지는 것

​	**arrays 만드는 법** : const daysOfWeek = [];

​	**값 프린트 하기** : consolte.log(daysOfWeek[]); 

​	**리스트에 값 추가하기** : daysOfWeek.push();



#### Objects

​	 리스트는 모든 값이 같은 의미를 가짐

```js
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
```

​	object는 property를 가진 데이터를 저장하도록 해줌

