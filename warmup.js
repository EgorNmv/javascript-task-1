'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
        throw new TypeError();
    }

    return (a + b);
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (year % 1000 === 0) {
        return Math.trunc(year / 100);
    }
    if (!(Number.isInteger(year) > 0)) {
        throw new RangeError();
    }

    return (Math.trunc(year / 100) + 1);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (hexColor.length === 3) {
        const sumbol1 = hexColor.substring(1, 2);
        const sumbol2 = hexColor.substring(2, 3);
        const sumbol3 = hexColor.substring(3, 4);
        hexColor = '#' + sumbol1 + sumbol1 + sumbol2 + sumbol2 + sumbol3 + sumbol3;
    }
    if (!(typeof(hexColor) === 'string')) {
        throw new TypeError();
    }
    const clearHex = hexColor.substring(1, 7);
    const r = parseInt(clearHex.substring(0, 2), 16);
    const g = parseInt(clearHex.substring(2, 4), 16);
    const b = parseInt(clearHex.substring(4, 6), 16);
    if (!((r, g, b) <= 255 && (r, g, b) >= 0)) {
        throw new RangeError();
    }

    return ('(' + r + ', ' + g + ', ' + b + ')');
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof(n) !== 'number') {
        throw new RangeError();
    }
    if (Number.isInteger(n) === 0) {
        return 0;
    }
    if (!(Number.isInteger(n) > 0)) {
        throw new RangeError();
    }
    if (n <= 2) {
        return 1;
    }
    const fn = 1;
    const fnmin1 = 0;
    for (let i = 1; i < n; i++) {
        fn += fnmin1;
        fnmin1 = fn - fnmin1;
    }

    return fnmin1;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function checkMatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        if (!(Array.isArray(matrix) || Array.isArray(matrix[i])) || matrix[i].length === n) {
            return new TypeError();
        }
    }
}
function matrixProblem(matrix) {
    checkMatrix(matrix);
    const M = matrix.length;
    const N = matrix[0].length;
    const transpMatrix = [];
    for (let i = 0; i < N; i++) {
        transpMatrix[i] = [];
        for (let j = 0; j < M; j++) {
            transpMatrix[i][j] = matrix[j][i];
        }
    }

    return transpMatrix;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (!(typeof(n) === 'number' && typeof(targetNs) === 'number')) {
        throw new TypeError();
    }
    if (!(targetNs <= 36 || targetNs >= 2)) {
        throw new RangeError();

    }

    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (!(typeof(phoneNumber) === 'string')) {
        throw new TypeError();
    }
    const regExp = new RegExp('^8-800-[0-9]{3}-[0-9]{2}-[0-9]{2}$');

    return (regExp.test(phoneNumber));
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (!(typeof(text) === 'string')) {
        throw new TypeError();
    }
    let numofSmile = 0;
    let currentPos = 0;
    let allSmile = 0;
    while (numofSmile !== -1) {
        numofSmile = text.indexOf('(-:' || ':-)', currentPos);
        currentPos = numofSmile + 1;
        allSmile += 1;
    }

    return allSmile;
}

/*
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function checkLineonField(str) {
    if (str[0] === str[1] && str[1] === str[2]) {

        return str[0];
    }
}

function checkFieldonHorizontal(field) {
    for (let i = 0; i <= 2; i++) {
        if (checkLineonField(field[i]) === 'x' || checkLineonField(field[i]) === 'o') {

            return checkLineonField(field[i]);
        }
    }
}

function checkFieldonVertical(field) {
    field = matrixProblem(field);
    for (let i = 0; i <= 2; i++) {
        if (checkLineonField(field[i]) === 'x' || checkLineonField(field[i]) === 'o') {

            return checkLineonField(field[i]);
        }
    }
}

function ticTacToeProblem(field) {
    if (checkFieldonHorizontal(field)) {

        return checkFieldonHorizontal(field);
    }
    if (checkFieldonVertical(field)) {

        return checkFieldonVertical(field);
    }
    if (field[0][0] === field[1][1] && field[1][1] === field[2][2]) {

        return field[1][1];
    }
    if (field[0][2] === field[1][1] && field[1][1] === field[2][0]) {

        return field[1][1];
    }

    return 'draw';
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
