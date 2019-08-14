import { rulesReducer } from '../rulesReducer';




const testCase = { types: 'stuff', payload: 'testing'}

describe('rules reducers', () => {
  test('should initialize state as an empty object', () => {
    expect(rulesReducer(undefined, testCase)).toEqual({})
  })
})