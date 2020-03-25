// 유효범위 (scope)
var vscope = 'global';  // 전역변수
function fscope(){
    var vsope = 'local';//지역변수
    alert(vscope);
}
fscope();

//유효범위의 필요성
// 전역변수는 각기 다른 로직에서 사용하는 같은 이름의 변수값을 변경시켜
//의도 하지 않은 문제를 발생
function a(){
    var i =0;
}
for(var i = 0;i<5;i++){
    a();
    console.log(i);
}

//전역변수 불가피하게 사용할 경우
// 전역변수의 소속으로 변수를 만들어주면 다른객체와 충돌할 가능성이 낮아짐
MYAPP = {}
MYAPP.calculator = {'left' : null,
                    'right' : null                   
}
MYAPP.cooldinate = {'left' : null,
                    'right' : null                    
}
MYAPP.calculator.left = 10;
MYAPP.calculator.left = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());
// myapp 함수내에 선언된 변수 함수의 지역변수

// 함수를 정의하고 바로 호출 함 ( 익명함수) 전역변수가 전혀 존재하지 않은 
// 어플리케이션을 생성 ex) jquery
// 모듈화하는데 사용
(function(){
    MYAPP = {}
    MYAPP.calculator = {'left' : null,
                        'right' : null                   
    }
    MYAPP.cooldinate = {'left' : null,
                        'right' : null                    
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.left = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
}());

// 정적 유효범위
// static scoping or lexical scoping

var i =5;
function a(){
    var i = 10;
    b();
}
function b(){
    document.write(i);
}
a();