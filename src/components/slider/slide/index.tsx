import styled from '@emotion/styled'
import { CSSProperties } from '@emotion/serialize'

const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${((props: CSSProperties) => props.content)}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export default Slide
