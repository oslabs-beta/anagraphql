/*********** 
Query Parser tests
************/
const queryParser = require('../queryParser')
const sampleQuery = '{ author { firstname }}'

describe('queryParser', () => {
  test('is a function', () => {
    expect(typeof queryParser).toBe('function')
  })
  test('returns an object', () => {
    expect(typeof queryParser(sampleQuery)).toBe('object');
  })

})

