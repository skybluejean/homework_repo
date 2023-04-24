let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object,array){
  //basic객체의 children 속성이 null 데이터타입이 할당되었는지를 판별하고 null 데이터타입이 할당되어있으면 매개변수를 각각 할당
  let value;
  //header, main. footer HTML 태그를 생성하는 로직으로 최종적으로 문자열로 제작된 HTML태그 데이터를 가공 or 편집
  return value;
}

console.log(exampleOne(basicData,elementData));