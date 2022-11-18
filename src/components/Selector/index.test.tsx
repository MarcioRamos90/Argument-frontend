import { generateMarker } from './MarkerGenerator'


test('if returns text with <mark> around index', () => {
  const result = generateMarker('Alo Mundo', [0, 1])
  expect(result).toEqual('<mark>A</mark>lo Mundo')
})