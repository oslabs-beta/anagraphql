/*********** 
Query Parser tests
************/
test('queryParser', () => {
  const parser = require('../queryParser')
  
  expect(parser).toBeDefined();
  expect(parser).toBeTruthy();
  expect(typeof parser).toBe('function')

});