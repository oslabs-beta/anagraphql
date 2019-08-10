/*********** 
stringProperties tests
************/
test('String Validator returns a boolean', () => {
  const stringValidator = require('../stringValidator')
  
  expect(stringValidator).toBeTruthy()
  })
  