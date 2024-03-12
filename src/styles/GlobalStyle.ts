import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Pretendard", sans-serif !important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
	font-family: 'Pretendard-Regular';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url(./woff2/Pretendard-Regular.woff2) format('woff2'), url(./woff/Pretendard-Regular.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard-Medium';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url(./woff2/Pretendard-Medium.woff2) format('woff2'), url(./woff/Pretendard-Medium.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard-Bold';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url(./woff2/Pretendard-Bold.woff2) format('woff2'), url(./woff/Pretendard-Bold.woff) format('woff');
}
`

export default GlobalStyle;