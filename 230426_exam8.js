import inquirer from 'inquirer';

function exampleOne(array){
  let suffledArray = [];
  return suffledArray;
}

inquirer
.prompt([
  {
  type : 'input',
  name : 'name',
  message : '당신의 이름은 무엇입니까?',
  },
  {
    type : 'list',
    name : 'like food',
    message : '당신이 좋아하는 음식은 무엇입니까?',
    choices : ['바나나우유','초코우유','딸기우유','커피우유'],
  },
  {
    type : 'confirm',
    name : 'confirm',
    message : '확실합니까?'
  },
])
.then((answers) => {
  console.log('Answer:', answers);
});