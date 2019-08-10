/*********** 
Anagraph Object tests
************/

test('The anagraphCreator function should return an object', () => {
  const anagraphCreator = require('../anagraphCreator')
  
  const q = '{ author { firstname }}'
  
  expect(typeof anagraphCreator(q)).toBe('object')
  
  })



















