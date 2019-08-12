/*********** 
stringProperties tests
************/
const stringValidator = require('../stringValidator')

const sampleString = '“{ authors { firstname books { title authors { firstname books { title authors { firstname books { title } } } } } } }“'

describe('stringValidator.balancedParentes', () => {
  test('is a function', () => {
    expect(typeof stringValidator.balancedParentes).toBe('function')
  })
  test('should return a boolean', () => {
    expect(typeof stringValidator.balancedParentes(sampleString)).toBe('boolean')
  })


})
