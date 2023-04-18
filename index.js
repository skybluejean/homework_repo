//매개변수가 문자열일 경우, 아래와 같은 문장열이 나타나도록 작성. "문자열 데이터를 입력하였습니다."
function examOne(first, second) {
  /*
  if (first && second === "string") {
    return console.log("문자열 데이터를 입력하였습니다.");
  } else {
    alert("문자열이 아닙니다.");
  }
  */

  /*
 const a = first;
 const b = second;
 return a+b;
 */
  const a = first;
  const b = second;
  const total = a + b;
  return total;
}

//숫자여야만 실행되도록 타입을 확인하는 로직을 작성
function examTwo(first, second, third) {
  /*
  if (first && second && third === "number") {
    return first, secomd, third;
  } else {
    alert("put number, not string or char");
  }
  */
  const al = first;
  const be = second;
  const gam = third;
  //return al * be * gam;
  const cal = al * be * gam;
  return cal;
}

/*문자열만 실행되도록 타입을 확인하는 로직을 작성.
length프로퍼티를 사용하지 않고 길이값을 구하기.*/
function examThree(str) {
  /*
  if (str === "string") {
    console.log(typeof str);
  } else {
    console.log("wrong data");
  }
  */
  //const voca = str;
  /*
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  */
  const string = str;
  const length = string.split("").reduce((acc) => acc + 1, 0);
  console.log(length); // Output: 13
}

//배열만을 인자로 받아서 실행 할 수 있도록 작성
function examFour(array) {
  /*
  if (arrray === "array") {
    const arr = array;
    console.log(arr);
  }
  */
  const arr = array;
  const m = Math.min(arr);
  console.log(m);
}

//배열만을 인자로 받아서 실행할 수 있도록 작성
function examFive(array) {
  const arr = array;
  if (arr === "array") {
    for (let i = 0; i < arr.length; i++) {
      arr[i]++;
      console.log(arr[i]);
    }
  } else {
    console.log("You put wrong data");
  }
}

////////////////////////////////////////////////////////////////////////

//Q1)덧셈 로직 만들기
console.log(examOne(2, 3));
//Q2)곱셈 로직 만들기
console.log(examTwo(2, 3, 4));
//Q3)문자열 길이 구하기
console.log(examThree("hello"));
//Q4)최솟값 판별하기
console.log(examFour([3, 1, 4, 2]));
//Q5)배열값 누산(총합)하기
console.log(examFive([1, 2, 3]));
