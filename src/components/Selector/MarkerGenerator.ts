


export function generateMarker (text: string, coords: Array<Number>) {
    let result = '';
    for (let index = 0; index < text.length; index++) {
      const element = text[index];

      if (index === coords[0]) {
        result += '<mark>' + element
      } else if (index === coords[1]) {
        result += '</mark>' + element
      } else {
        result += element
      }
    }
    
    return result;
}