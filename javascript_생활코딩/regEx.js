// 정규표현식 regular expression 
// 정규 표현식 리터럴
var pattern = /a/
// 정규표현식 객체 생성자
var pattern = new RegExp('a');

console.log(pattern.exec('abcde'));//  pattern의 값을 찾음
console.log(pattern.exec('bcde'));// 찾고자하는 대상이 없음 결과 : null
console.log(pattern.test('abcde')); // 찾고자하는 정보에 따라 boolean 반환 결과 : false
console.log('abcdef'.replace(pattern, 'A')); // 문자열 대체 하여 반환 결과 : Abcdef

var xi = /a/;
console.log("Abcde".match(xi)); //null
var oi = /a/i;  // i 대소문자 구분 하지 않음
console.log("Abcde".match(xi)); // ["a"]

var og = /a/g;  // g 문자열에 해당되어 있는 값을 모두 리턴
console.log("Abcde".match(og)); // ["a"] 

var ig = /a/ig;
console.log("AabcdAd".match(ig));
// 결과 ["A","a","A","a"]

var pattern = /(\w+)\s(\w+)/g  
// 괄호 : 그룹 
// \w(word) : 문자를 의미 (대소문자, 숫자)
// \s(space) : 공백
// +(수량자) : 앞에있는 문자가 하나 이상인경우 유효

var str = "coding everybody";

var result = str.replace(re, "$2, $1");
// $ : $2 두번째 그룹, $1 첫번째 그룹 사이에 콤마 생성

console.log(result);
//결과 everybody, coding

var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);

