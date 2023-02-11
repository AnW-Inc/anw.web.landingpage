import { Global } from '@emotion/react'
export const fonts = {
  default: 'Inter',
  primary: 'Clash Display',
}

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Clash Display";
        src: url("/fonts/ClashDisplay-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: "Clash Display";
        src: url("/fonts/ClashDisplay-Medium.ttf") format(" truetype");
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: "Clash Display";
        src: url("/fonts/ClashDisplay-Semibold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: "Clash Display";
        src: url("/fonts/ClashDisplay-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
      }
      `}
  />
)
export default Fonts
