//정적인 객체 리터럴, 데이터를 넣을 자리를 마련 
let basicData = {
  header : {},
  main : {},
  footer : {}
}
//fromJaonData변수는 json.parse()을 통해 받아온 데이터로 가정
let fromJsonData = {
  header : {
    content : "헤더부분 입니다.",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#ccc"
    }
  },
  main : {
    content : "메인부분 입니다.",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#333"
    }
  },
  footer : {
    content : "푸터부분 입니다.",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#666"
    }
  }
}
function exampleOne(basicData,fromJsonData){
  let value = '';
  return value;
  //아래의 호출부를 참고하여, 지역변수 value에 적정한 문자열 데이터로 객체를 가공하는 코드를 작성
}
//특정 HTML요소에 값을 넣는 것을 가정
const element = "";
element.innerHTML = exampleOne(basicData,fromJsonData);
//위의 fromJsonData와 같은 객체나 JSON을 생성하기 위한 생성자함수, 클래스함수를 작성.
//setter기능을 활용하여 인스턴스의 값들을 모두 "문자열"만 들어가도록 안전성을 확보
class exampleTwo{
  constructor(){
    
  }
}