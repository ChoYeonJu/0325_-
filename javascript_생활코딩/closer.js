//클로저 (closure) 내부함수가 외부함수의 맥락에
//접근 할 수 있는것을 가르킴

// 
function outter(){// 외부함수
    var title = 'coding everybody';
    function inner(){   //내부 함수 
        
        alert(title);
    }
    inner = outter();
    inner();
}

outter();

// 실용적 예제

function factory_movie(title){
    return {
        
        get_title :function(){
            return title;
        },
        // set_title 메소드 매개변수는_title이므로 title값을 변경시킴
        set_title:function(_title){
            title =_title
        }
    }
}

ghost = factory_movie('Gost in shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title('공각기동대');

alert(ghost.get_title())
alert(matrix.get_title());

// 응용

// 결과 5라는 값이 5번 출력
var arr = [];
for(var i = 0;i<5;i++){
    arr[i]=function(){
        return i;
    }
}
for(var index in arr){
    console.log(arr[index]());
    
}

// 0~4 까지 출력 (정상 출력)
var arr = []
for(var i =0;i<5;i++){
    arr[i]=function(id){
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr){
    console.log(arr[index]());
    
}