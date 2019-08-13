/*********** 
Anagraph Object tests
************/
const anagraphCreator = require('../anagraphCreator')

const sampleQuery = '“{ authors { firstname books { title authors { firstname books { title authors { firstname books { title } } } } } } }“'
const anagraph = anagraphCreator(sampleQuery)

describe('AnagraphCreator', () => {

  test('is a function', () => {
    expect(typeof anagraphCreator).toBe('function');
  })

  test('returns an object', () => {
    expect(typeof anagraphCreator(sampleQuery)).toBe('object');
  })

  test('has a property called analytics', () => {
    expect(anagraph).toHaveProperty('analytics')
  })

  test('analytics property has a property called combinedFields', () => {
    expect(anagraph.analytics).toHaveProperty('combinedFields')
  })

  test('analytics property has a property called combinedReducers', () => {
    expect(anagraph.analytics).toHaveProperty('combinedReducers')
  })

  test('analytics property has a property called fields', () => {
    expect(anagraph.analytics).toHaveProperty('fields')
  })

  test('analytics property has a property called maxNested', () => {
    expect(anagraph.analytics).toHaveProperty('maxNested')
  })

  test('analytics property has a property called resolvers', () => {
    expect(anagraph.analytics).toHaveProperty('resolvers')
  })

  // test('the value of anagraph.analytics.combineFields is an number', () => {
  //   expect(typeof anagraph.analytics.combineFields).toBe('number')
  // })

  // test('the value of anagraph.analytics.combineReducers is an number', () => {
  //   expect(typeof anagraph.analytics.combineReducers).toBe('number')
  // })

  test('the value of anagraph.analytics.fields is an object', () => {
    expect(typeof anagraph.analytics.fields).toBe('object')
  })

  test('the value of anagraph.analytics.maxNested is an number', () => {
    expect(typeof anagraph.analytics.maxNested).toBe('number')
  })

  test('the value of anagraph.analytics.resolvers is an number', () => {
    expect(typeof anagraph.analytics.resolvers).toBe('object')
  })




})
















