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

/////////////////////////////////////////////////////////////////////

function checkChildrenIsNull(data) {
  for (let key in data) {
    if (typeof data[key].children === "object") {
      console.log(`${key}의 children 속성은 null이 아닙니다.`);
    } else {
      console.log(`${key}의 children 속성은 null입니다.`);
    }
  }
}
checkChildrenIsNull(basicData);

/////////////////////////////////////////////////////////////////////

function assignParameter(data) {
  for (let key in data) {
    if (typeof data[key].children === "object") {
      let id = data[key].id;
      let type = data[key].type;
      let children = data[key].children;
      console.log(`${key}의 매개변수: id=${id}, type=${type}, children=${children}`);
    } else {
      console.log(`${key}의 children 속성은 null입니다.`);
    }
  }
}
assignParameter(basicData);

/////////////////////////////////////////////////////////////////////

function createHeader(headerData) {
  let header = document.createElement(headerData.type);
  header.setAttribute("id", headerData.id);
  return header;
}

function createMain(mainData) {
  let main = document.createElement(mainData.type);
  main.setAttribute("id", mainData.id);
  return main;
}

function createFooter(footerData) {
  let footer = document.createElement(footerData.type);
  footer.setAttribute("id", footerData.id);
  return footer;
}

/////////////////////////////////////////////////////////////////////

function createHTML(data) {
  let header = createHeader(data.header).outerHTML;
  let main = createMain(data.main).outerHTML;
  let footer = createFooter(data.footer).outerHTML;
  let html = `<html>
  <head></head>
  <body>
    ${header}
    ${main}
    ${footer}
  </body>
</html>`;
  return html;
}

let resultHTML = createHTML(basicData);
console.log(resultHTML);

/////////////////////////////////////////////////////////////////////

function exampleOne(object,array){
  //basic객체의 children 속성이 null 데이터타입이 할당되었는지를 판별하고 null 데이터타입이 할당되어있으면 매개변수를 각각 할당
  let value;
  //header, main, footer HTML 태그를 생성하는 로직으로 최종적으로 문자열로 제작된 HTML태그 데이터를 가공 or 편집
  return value;
}

console.log(exampleOne(basicData,elementData));