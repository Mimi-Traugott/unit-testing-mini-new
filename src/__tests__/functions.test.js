import { add } from '../utils/functions.js'

test('add returns the sum of two numbers', () => {
    expect(add(1,2)).toBe(3)
})
test('add handles string inputs that are numbers', ()=> {
    expect(add('3', 4)).toBe(7)
})
test('add returns NaN if non numbers are passted', ()=> {
    expect(add('hello', 'world')).toBeNaN()
})