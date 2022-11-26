import { SelectorProps } from './types';

const extractText = (text: string, idx1: number, idx2: number) => text.slice(idx1, idx2)

function generateMarkTag (text: string, color?: string) {
  if (color) {
    return '<mark style="background-color: ' + color + ';">' +
    text + '</mark>'
  }

  return '<mark>' + text + '</mark>'
}

export function generateMarker ({ text, coords }: SelectorProps) {
  let result = ''

  for (let index: any = 0; index < text.length; index++) {
    const element = text[index]
    
    if (coords.length > 0 && index === coords[0][0]) {
      result += generateMarkTag(extractText(text, coords[0][0], coords[0][1]), coords[0][2])

      index = coords[0][1]
      result += text[coords[0][1]] || ''
      coords = coords.slice(1)
      continue
    }

    result += element

  }

  return result
}
