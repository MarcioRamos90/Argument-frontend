import { generateMarker } from './MarkerGenerator'


test('if returns text with <mark> around index', () => {
  const result = generateMarker({text:'Alo Mundo', coords:[0, 1]})
  expect(result).toEqual('<mark>A</mark>lo Mundo')
})