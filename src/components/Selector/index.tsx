import { generateMarker } from './MarkerGenerator'
import { SelectorProps } from './types'


function Selector (props: SelectorProps) {
  return <div dangerouslySetInnerHTML={{ __html: generateMarker(props) }} />
}

export default Selector
