import { SelectorProps } from './types';



export function generateMarker ({text, coords}: SelectorProps) {
  let result = ''
  let nextCoord = coords.flat()
  
  for (let index = 0; index < text.length; index++) {
    const element = text[index]

    if (index === nextCoord[0]) {
      result += '<mark>' + text.slice(nextCoord[0], nextCoord[1]) + '</mark>'
      index = nextCoord[1]
      result += text[nextCoord[1]] || ''
      nextCoord = nextCoord.slice(2)
      continue
    }

    result += element

  }
  
  return result
}