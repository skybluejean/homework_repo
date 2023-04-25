function exampleOne(arr,dataType,itemToFind){
  if(Array.isArray(arr) === false){
    console.log('배열이 아닙니다.');
    return false;
  }
}
const isDataTypeMatched = (typeof(itemToFind) === dataType);
const isItemExist = arr.includes(itemToFind);

if(isDataTypeMatched === true && isItemExist === true){
  console.log('${itemToFind}(은)는 배열에 존재합니다.');
  return true;
}else if(isItemExist === false){
  console.log('${itemToFind}(은)는 배열에 존재하지 않습니다.');
  return false;
}else if(isDataTypeMatched === false){
  console.log('찾으려는 항목은 ${dataType}이 아닙니다.');
  return false;
}

const basicData = ['안녕하세요','어디선가','입력된','데이터를','찾아보는','함수입니다.'];

exampleOne(basicData,'string','어디선가');