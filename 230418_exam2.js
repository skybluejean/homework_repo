let basicData = {
  count : 10,
  min : 1,
  max : 10,
  divideNumber : 5
}

function example(count,min,max){
  //위의 basicData를 참고하여 매개변수 작성
  let exampleArr = [];
  //매개변수 count는 랜덤함수를 실행하는 횟수를 의미
  //랜덤함수를 실행하는 횟수만큼 반복문을 실행
  //랜덤함수가 실행되어 도출된 결과 값을 배열에 추가
  //추가 후, 배열을 리턴하는 로직을 완성

  //실수(float)로 도출된 난수, 소숫점 두자리까지 표현된 값을 배열에 추가

  return exampleArr;
}

function exampleTwo(array, divideNumber){
  let exampleObject = {
    a : [],
    b : []
  }
  //0번째 매개변수 array는 숫자(실수)로 이루어진 배열
  //1번쨰 매개변수는 정수만을 입력하도록 타입을 제어할 것
  //매개변수 divideNumber보다 작은수는 a배열에, 큰수는 b배열에 추가하는 로직을 작성
  //divideNumber는 basicData 객체의 divideNumber 속성값을 사용

  return exampleObject;
}
function exampleThree(array){
  //매개변수 array의 모든 매개변수를 더하는 로직을 작성
  let value;
  //변수value는 더한 결과 값을 저장하는 변수
  return value;
}
function exampleFour(object){
  //매개변수 object의 프로퍼티가 배열인지를 검사
  //그 후, 배열의 요소가 모두 숫자형태인지 검사하는 로직을 작성
  let value;
  //지역변수 value에 검사결과를 boolean 타입으로 할당 후 리턴
  return value;
}
function exampleFive(objectOne, objectTwo){
  //objectOne매개변수는 최상단 basicData객체가 인자로 들어올 것을 가정
  //objectTwo는 exampleTwo함수의 리턴값이 인자로 들어올 것을 가정
  let value;
  //objectOne, objectTwo 모두 각각 프로퍼티의 값을 더함
  //값을 더하고나면 위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성
  return value;
}

console.log(exampleFive(basicData, exampleTwo(/*exampleOne 함수의 리턴값 및 구성*/)))