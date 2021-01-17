const ej01 = require('../02_Arreglos/01')

const GOOD = 'PASSED'
const BAD = '== ERROR =='
let results = [];

// 01
results.push( ej01.length === 10 ? GOOD : BAD )



for ( i in results) {
  console.log(i, results[i])
}
