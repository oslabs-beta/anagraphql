/*********** 
stringProperties tests
************/
const stringValidator = require('../stringValidator')

describe('The String Validator', () => {
  test('should return a boolean', () => {
    expect(stringValidator).toBeTruthy()
  })

})
