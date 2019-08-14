/*********** 
Anagraph Object tests
************/
const anagraphCreator = require('../anagraphCreator')

const sampleQuery = '“{ authors { firstname books { title authors { firstname books { title authors { firstname books { title } } } } } } }“'
const anagraph = anagraphCreator(sampleQuery)

describe('anagraphCreator', () => {

  test('is a function', () => {
    expect(typeof anagraphCreator).toBe('function');
  })

  test('returns an object', () => {
    expect(typeof anagraphCreator(sampleQuery)).toBe('object');
  })

  test('has a property called analytics', () => {
    expect(anagraph).toHaveProperty('analytics')
  })

  test('analytics property has a property called shallowResolvers', () => {
    expect(anagraph.analytics).toHaveProperty('shallowResolvers')
  })

  test('analytics property has a property called specificResolvers', () => {
    expect(anagraph.analytics).toHaveProperty('specificResolvers')
  })

  test('analytics property has a property called fields', () => {
    expect(anagraph.analytics).toHaveProperty('fields')
  })

  test('analytics property has a property called maxNested', () => {
    expect(anagraph.analytics).toHaveProperty('maxNested')
  })

  test('analytics property has a property called totalFields', () => {
    expect(anagraph.analytics).toHaveProperty('totalFields')
  })

  test('the value of anagraph.analytics.shallowResolvers is an object', () => {
    expect(typeof anagraph.analytics.shallowResolvers).toBe('object')
  })

  test('the value of anagraph.analytics.specificResolvers is an number', () => {
    expect(typeof anagraph.analytics.specificResolvers).toBe('object')
  })

  test('the value of anagraph.analytics.fields is an object', () => {
    expect(typeof anagraph.analytics.fields).toBe('object')
  })

  test('the value of anagraph.analytics.maxNested is an number', () => {
    expect(typeof anagraph.analytics.maxNested).toBe('number')
  })

  test('the value of anagraph.analytics.totalFields is an number', () => {
    expect(typeof anagraph.analytics.totalFields).toBe('number')
  })




})
















