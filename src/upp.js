/**
 * @param {Object.<string, number} - объект, где ключи это слова, а значения это числа
 * @returns {number} - сумма всех баллов в объекте
 */
const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};

//Вариант 1
let getScore = 0;
for (let key in scores) {
  getScore += scores[key];
};
console.log(getScore);

//Вариант 2
let arr = Object.keys(scores).map(key => scores[key]);
function getScore1(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum);
}

console.log(getScore1(arr));
	
