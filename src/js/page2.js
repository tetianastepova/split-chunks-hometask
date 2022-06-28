import without from 'lodash/without';

//This log should appear only on page 2
console.log('It is page 2. Lib result', without([1, 0, 1, 1], [1]));