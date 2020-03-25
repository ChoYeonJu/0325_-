// apply 내장된 함수
//ssum Function 객체의 인스턴스로 Function 의 메소드 apply 호출
o1 = { val1: 1, val2: 2, val3: 3 };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };
function sum() {
  var _sum = 0;
  for(name in this){
      _sum+=this[name];
  }
  return _sum;
}
//sum 함수가 o1 의 객체 인것처럼 실행되게 할 수 있음
alert(sum.apply(o1))
alert(sum.apply(o2))
