import { homeWork01 } from "../hw_scripts/01-variables-hw/script";
import { homeWork02 } from "../hw_scripts/02-loops-hw/script";
import { homeWork03 } from "../hw_scripts/03-functions-hw/script";
import { homeWork04 } from "../hw_scripts/04-array-hw/script";
import { homeWork05 } from "../hw_scripts/05-array2-hw/script";
import { homeWork06 } from "../hw_scripts/06-objects-hw/script";
import { homeWork07 } from "../hw_scripts/07-closures-hw/script";
import { homeWork08 } from "../hw_scripts/08-classes-hw/script";
import { homeWork10 } from "../hw_scripts/10-dom-hw/script";
import { homeWork11 } from "../hw_scripts/11-events-hw/script";
import { homeWork12 } from "../hw_scripts/12-promises-hw/script";
import { homeWork13 } from "../hw_scripts/13-ajax-hw/script";
import { homeWork15 } from "../hw_scripts/15-generators-hw/script";

import css from "../hw_scripts/11-events-hw/main.css";
import img from "../hw_scripts/13-ajax-hw/assets/icons/robot.png";
import html from '../hw_scripts/11-events-hw/index.html';


console.log('HW03', homeWork03.getFormatName("sViAtoSLav"));
console.log('HW04', homeWork04.getPairs(homeWork04.students));
console.log('HW05', homeWork05.getRandomArray(5, 0, 10));
console.log('HW06', homeWork06.getStudentInfo(homeWork06.students[0]));
console.log('HW07', homeWork07.getMiddleTaxes.call(homeWork07.ukraine));
console.log('HW08', homeWork08.john.getInfo());
console.log('HW10', homeWork10.generateBlocks);
console.log('HW11', homeWork11.keydownFunc);
console.log('HW12', homeWork12.getRandomChinese(8));
console.log('HW13', homeWork13.getPlanets);
console.log('HW15', homeWork15.createIdGenerator().next().value);
