async function getRandomChinese(length) {
  let result = '';
  let index = 0;

  while (index < length) {
    let promise = new Promise(resolve => {
      const sign = Date.now().toString().substr(-5);
      result += String.fromCharCode(sign);

      setTimeout(() => {
        resolve(result);
      }, 50)
    });

    await promise;
    index++;
  }

  console.log(result);
}

getRandomChinese(4);

export const homeWork12 = {
  getRandomChinese
}