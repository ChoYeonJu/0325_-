// 함수에는 arguments 라는 변수에 담긴 유사배열이 있음
// arguments 약속되어있는 유사배열
function sum(){
    var i, _sum =0;
    for(i=0;i<arguments.length;i++){
        document.write(i+' : ' + arguments[i]+'<br />');
        _sum += arguments[i];
    }
    return _sum;
}
// sum 안에 인자의 값은 정해져있지 않음 
// sum에 들어온 특정 자리 수 인자들을 arguments.length를 통해 알
//수 있음
document.write('result : ' + sum(1,2,3,4))

// 매개변수
// 몇개의 인자와 몇개의 매개변수를 썼는지 정확히 확인
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
        );
}

function one(arg1){
    console.log(
        'one.length',one.length,
        'arguments'.arguments.length
    );
}

function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero();
one('val1','val2');
two('val2');