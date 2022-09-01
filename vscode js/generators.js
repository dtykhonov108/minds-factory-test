import 'babel-polyfill';

// генераторы это функции, возвращающие значение не сразу
// генераторы всегда возвращают набор элементов
function* getValues() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

// генераторная функция возвращает объект Generator
// каждый новый вызов создают но
вый объект генератора
const value = getValues();
const first = value.next();
const second = value.next();
const third = value.next();
console.log(first); // { value: 1, done: false }
console.log(second); // { value: 2, done: false }
console.log(third); // { value: 3, done: false }
console.log(value.next()); // { value: undefined, done: true }
// done: true говорит о том, что никаких значений генератор больше не предоставит

// по объекту Generator можно итерироваться, как по массиву
// но этот объект массивом не является
const values = getValues();
for (let i of values) {
    console.log(i);
}
console.log(values.next());
for (let i of values) {
    console.log('NEW CYCLE HERE!'); // это не будет выведено, так как все значения из генератора были взяты
}

function* getEvenNumbers(n) {
    //const result = [];

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            yield i;
            //result.push(i);
        }
    }

    //return result;
}

const evenNumbers = [...getEvenNumbers(100)];
console.log(evenNumbers);