// this 함수 내에 함수호출 맥락을 의미, 가변적,
// 함수를 어떻게 호출 하느냐에 따라 달라짐
function func() {
    // this의 값이 window 라는 것을 의미
  if (window === this) {
    console.log("window === this");
  }
}

var o = {
    func :function(){
        if(o ===this){
            document.write("o===this");
        }
    }
}
o.func();
//func() 를 호출 했을때 window 라는 것이 암시적으로 사용

var funcThis = null;

function Func(){
    funcThis = this;
}

var o1 = Func();
if(funcThis === window){
    document.write('window </br>');
}
// 생성자 안에서 this 는 그 생성자가 만든 객체를 가르킴
var o2 = new Func();
if(funcThis === o2){
    document.write('o2 </br>');
}

