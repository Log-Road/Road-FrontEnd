import { createGlobalStyle } from 'styled-components';
import PretendardMedium from "../fonts/Pretendard-Medium.ttf"
import PretendardRegular from "../fonts/Pretendard-Regular.ttf"
import PretendardSemiBold from "../fonts/Pretendard-SemiBold.ttf"
import ABeeZeeRegular from "../fonts/ABeeZee-Regular.ttf"


const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Pretendard", sans-serif !important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium'), local('PretendardMedium');
        src: url(${PretendardMedium}) format('truetype');
  }
  @font-face {
        font-family: 'PretendardRegular';
        src: local('PretendardRegular'), local('PretendardRegular');
        src: url(${PretendardRegular}) format('truetype');
  }
  @font-face {
        font-family: 'PretendardSemiBold';
        src: local('PretendardSemiBold'), local('PretendardSemiBold');
        src: url(${PretendardSemiBold}) format('truetype');
  }
  @font-face {
        font-family: 'ABeeZeeRegular';
        src: local('ABeeZeeRegular'), local('ABeeZeeRegular');
        src: url(${ABeeZeeRegular}) format('truetype');
  }
`

export default GlobalStyle