import { Global } from '@emotion/react'
import colors from './colors'

const GlobalStyle = () => (
  <Global
    styles={`
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: transparent;
      z-index: 1;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.primary};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 189, 19, 0.7);
    }

    .hiddenScroll{
      margin-right: 5px !important;
      overflow: hidden !important;
    }
      `}
  />
)
export default GlobalStyle
