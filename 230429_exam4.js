function exampleOne(first,second,dataType){
  if(typeof(first) !== dataType && typeof(second) !== dataType){
    return new Error(`매개볌수 first, second는 모두 ${datatype}타입이어야 합니다.`);
  }
}

function arrayLengthEven(array){
  if(array.length % 2 === 0){
    return true;
  }else{
    return false;
  }
}

function isExampleTwo(first,second){
  //exampleOne()함수를 호출하여 타입검사를 따로 실시
  //타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치
  exampleOne(first, second);

  let booleanResult;

  if(first < second){
    booleanResult = true;
  }else{
    booleanResult = false;
  }
}

if(typeof(booleanResult) === 'boolean'){
  return booleanResult;
}else{
  return new Error('조건식이 boolean 이 아니라서 리턴하지 못했습니다.');
}

let basicData = [4,6,23,5,94,35,44,66];

function exampleThree(array,functionOne,functionTwo){
  //매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수여야할 것.
  //매개변수 array의 모든 원소는 숫자 정수야야할 것.
  //매개변수 array의 배열 길이(length)는 짝수여야할 것. 홀수라면 10을 추가하여 짝수로 만들 것.
  let arrayResult = [[null , null],[null , null],[null , null],[null , null]];
  //매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교
  //비교한 작은 값은 arrayResult의 원소배열의 0번쨰
  //큰값은 arrayResult의 원소배열의 1번째에 넣음.
  return arrayResult;
}
console.log(exampleThree(basicData,exampleOne,isExampleTwo));
//Q)위의 콘솔을 확인하여 함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만들어라.