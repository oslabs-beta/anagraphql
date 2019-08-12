/*********** 
stringProperties tests
************/
const stringProperties = require('../stringProperties')

const sampleString = '“{ authors { firstname books { title authors { firstname books { title authors { firstname books { title } } } } } } }“'

describe('stringProperties', () => {

  test('is an object', () => {
    expect(typeof stringProperties).toBe('object');
  })

  test('has a property called lengthOfString', () => {
    expect(stringProperties).toHaveProperty('lengthOfString')
  })

  test('has a property called countResolvers', () => {
    expect(stringProperties).toHaveProperty('countResolvers')
  })

  test('has a property called countDepth', () => {
    expect(stringProperties).toHaveProperty('countDepth')
  })
  test('has a property called combinedResolvers', () => {
    expect(stringProperties).toHaveProperty('combinedResolvers')
  })

  test('has a property called combinedFields', () => {
    expect(stringProperties).toHaveProperty('combinedFields')
  })




})


