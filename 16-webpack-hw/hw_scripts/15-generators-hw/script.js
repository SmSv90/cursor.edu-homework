// Function 1
function* createIdGenerator() {
  let i = 1;

  while (true) {
    yield i++;
  }
}

// Function 2
function* newFontGenerator(fontSize) {
  let size = fontSize;
  createText(size);

  while (true) {
    let state = yield;

    if (state == "up") {
      size += 2;
    } else if (state == "down") {
      size -= 2;
    }
    createText(size);
  }
}

function createText(size) {
  const textWrapper = document.createElement('div');
  textWrapper.style.fontSize = `${size}px`;
  textWrapper.innerHTML = `this text is ${size}px size`;
  document.body.append(textWrapper);
}

export const homeWork15 = {
  createText,
  newFontGenerator,
  createIdGenerator
}

// const idGenerator = createIdGenerator();
// document.writeln(`<b>Function 1:</b><br>`)
// document.writeln(`1st request of generator: ${idGenerator.next().value}<br>`);
// document.writeln(`2nd request of generator: ${idGenerator.next().value}<br>`);
// document.writeln(`3rd request of generator: ${idGenerator.next().value}<br>`);

// document.writeln(`<b>Function 2:</b><br>`);
// const fontGenerator = newFontGenerator(14); // 14 – стартове значення
// fontGenerator.next("up").value;
// fontGenerator.next("up").value;
// fontGenerator.next("up").value;
// fontGenerator.next().value;
// fontGenerator.next("down").value;
// fontGenerator.next("down").value;
// fontGenerator.next("down").value;
// fontGenerator.next().value;