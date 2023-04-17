
//매개변수가 문자열일 경우, 아래와 같은 문장열이 나타나도록 작성. "문자열 데이터를 입력하였습니다."
function examOne(first,second){
 if(first&&second === 'string'){
  return console.log("문자열 데이터를 입력하였습니다.");
 }else{
  alert('문자열이 아닙니다.');
 }
};

//숫자여야만 실행되도록 타입을 확인하는 로직을 작성
function examTwo(first,second,third){
 if(first&&second&&third==='number'){
  return first,secomd,third;
 }else{
  alert('put number, not string or char');
 }
};

/*문자열만 실행되도록 타입을 확인하는 로직을 작성.
length프로퍼티를 사용하지 않고 길이값을 구하기.*/
function examThree(str){
  if(str === 'string'){
    console.log(typeof(str));
  }else{
    console.log('wrong data');
  }
};

//배열만을 인자로 받아서 실행 할 수 있도록 작성
function examFour(array){
  if(arrray === 'array'){
    const arr = array;
    console.log(arr);
  }
};

//배열만을 인자로 받아서 실행할 수 있도록 작성
function examFifth(){

};

console.log(examOne(2,3));
console.log(examTwo(2,3,4));
console.log(exanThree("hello"));
console.log(examFour([3,1,4,2]));
console.log(examFive([1,2,3]));