/*
Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345. Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який)

* Використовуючи вбудований об'єкт Math – виведіть максимальне число
* Використовуючи вбудований об'єкт Math – виведіть мінімальне число
* Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
* Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
* Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
* Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
* Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
* Виведіть середнє значення цін, округлене до другого знаку після коми
* (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40)

* Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:

Максимальна ціна: 9999.99
Мінімальна ціна: 1111.11
Вартість всіх товарів: 1345.66
...і так далі 
*/

const costProductOne = 15.678, 
      costProductTwo = 123.965, 
      costProductThree = 90.2345;

const maxPrice = Math.max(costProductOne, costProductTwo, costProductThree);
const minPrice = Math.min(costProductOne, costProductTwo, costProductThree);

const fullPrise = costProductOne + costProductTwo + costProductThree;

const roundToMinPrice = Math.floor(costProductOne) + Math.floor(costProductTwo) + Math.floor(costProductThree);
const roundTo100Price = Math.round(fullPrise/100)*100;

let priseIsEven = false;
if (Math.floor(fullPrise) % 2 == 0) {
  priseIsEven = true;
};

const balanceOfMoney = 500 - fullPrise;

const avarageCostProductOne = costProductOne.toFixed(2);
const avarageCostProductTwo = costProductTwo.toFixed(2);
const avarageCostProductThree = costProductThree.toFixed(2);

console.log(avarageCostProductOne);

const answer = 
`Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice}`;

console.log(answer);
// alert(answer);