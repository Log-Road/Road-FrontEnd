import { createGlobalStyle } from 'styled-components';
import PretendardMedium from "../fonts/Pretendard-Medium.ttf"
import PretendardRegular from "../fonts/Pretendard-Regular.ttf"
import PretendardSemiBold from "../fonts/Pretendard-SemiBold.ttf"


const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium'), local('PretendardMedium');
        font-style: normal;
        src: url(${PretendardMedium}) format('truetype');
  }
  @font-face {
        font-family: 'PretendardRegular';
        src: local('PretendardRegular'), local('PretendardRegular');
        font-style: normal;
        src: url(${PretendardRegular}) format('truetype');
  }
  @font-face {
        font-family: 'PretendardSemiBold';
        src: local('PretendardSemiBold'), local('PretendardSemiBold');
        font-style: normal;
        src: url(${PretendardSemiBold}) format('truetype');
  }
`