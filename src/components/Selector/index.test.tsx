import { generateMarker } from './MarkerGenerator'


test('if returns text with <mark> around index', () => {
  const result = generateMarker({text:'Hello World', coords:[[0, 1, null]]})
  expect(result).toEqual('<mark>H</mark>ello World')
})

test('if returns text with <mark> around indexes', () => {
  const result = generateMarker({text:'Hello World', coords:[[0, 1, null], [6, 11, null]]})
  expect(result).toEqual('<mark>H</mark>ello <mark>World</mark>')
})

test('if returns <mark> with color', () => {
  const result = generateMarker({text:'Hello World', coords:[[0, 1, 'red']]})
  expect(result).toEqual('<mark style="background-color: red;">H</mark>ello World')
})