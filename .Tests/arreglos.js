const ej01 = require('../02_Arreglos/01')
const ej02 = require('../02_Arreglos/02')
const ej03 = require('../02_Arreglos/03')

const GOOD = 'PASSED'
const BAD = '== ERROR =='
let results = [];

const checkEquals = (received, expected ) => received === expected ? GOOD : BAD

// 01
results.push( checkEquals(ej01, 10) )

// 02
results.push( checkEquals(ej02, 'flan') )

// 03
results.push( checkEquals(ej03, 395) )


for ( i in results) {
  console.log(i, results[i])
}
