import uniq from 'lodash/uniq';

//This log should appear only on page 1
console.log('It is page 1. Lib result', uniq([1, 2, 2, 3, 1]));