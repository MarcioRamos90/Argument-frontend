import { generateMarker } from './MarkerGenerator'


test('if returns text with <mark> around index', () => {
  const result = generateMarker({text:'Hello World', coords:[[0, 1]]})
  expect(result).toEqual('<mark>H</mark>ello World')
})

test('if returns text with <mark> around indexes', () => {
  const result = generateMarker({text:'Hello World', coords:[[0, 1], [6, 11]]})
  expect(result).toEqual('<mark>H</mark>ello <mark>World</mark>')
})