import styled from '@emotion/styled'
import { CSSProperties } from '@emotion/serialize'

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props: CSSProperties) => props.transition}s;
  height: 100%;
  width: ${(props: CSSProperties) => props.width}px;
  display: flex;
`
export default SliderContent
