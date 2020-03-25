// global ojbect 전역객체 : 전역객체의 속성

var o = {'func':function(){
    alert('hello');
}}
o.func();   
//window 객체의 속성
window.o.func();    // o.func() 결과와 동일
                    // 기본적으로 전역객체의 프로퍼티임을 알수 있음