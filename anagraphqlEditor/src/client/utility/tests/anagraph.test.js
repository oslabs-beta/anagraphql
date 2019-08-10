/*********** 
Query Parser tests
************/
test('queryParser', () => {
  const parser = require('../queryParser')
  
  expect(parser).toBeDefined();
  expect(parser).toBeTruthy();
  expect(typeof parser).toBe('function')

});

/*********** 
stringProperties tests
************/
test('stringProperties', () => {
const stringProperties = require('../stringProperties')


})






/*********** 
Anagraph Object tests
************/

test('anagraphObject', () => {
const anagraph = require('../anagraphCreator')

expect(anagraph).toBeDefined();
expect(typeof anagraph).toBe('function')

})