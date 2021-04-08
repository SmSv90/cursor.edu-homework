const costProductOne = 15.678, 
      costProductTwo = 123.965, 
      costProductThree = 90.2345;

const maxPrice = Math.max(costProductOne, costProductTwo, costProductThree);
const minPrice = Math.min(costProductOne, costProductTwo, costProductThree);

const fullPrice = (costProductOne + costProductTwo + costProductThree);

const roundToMinPrice = Math.floor(costProductOne) + Math.floor(costProductTwo) + Math.floor(costProductThree);
const roundTo100Price = Math.round(fullPrice/100)*100;

let priceIsEven = false;

if (roundToMinPrice % 2 == 0) {
  priceIsEven = true;
};

const incomingMoney = 500;
const balanceOfMoney = incomingMoney - fullPrice;

const averageCostPrice= ((costProductOne + costProductTwo + costProductThree) / 3).toFixed(2);


const discount = (Math.random() * fullPrice).toFixed(2);
const priceWithDiscount = (fullPrice - discount).toFixed(2);
const proffit = (fullPrice / 2 - (fullPrice - priceWithDiscount)).toFixed(2);

const answer = 
`Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice},
Вартість всіх товарів: ${fullPrice},
Ціла частина вартості всіх товарів: ${roundToMinPrice},
Сума товарів округлена до сотень: ${roundTo100Price},
Чи є сума всіх товарів (округлена в меншу сторону) парним числом?: ${priceIsEven},
Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${balanceOfMoney},
Середнє значення цін товарів: ${averageCostPrice},
Знижка: ${discount},
Cума до оплати зі знижкою: ${priceWithDiscount},
Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни: ${proffit}`;

console.log(answer);
