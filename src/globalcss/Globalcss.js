import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
*{

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
a:link{
  text-decoration: none;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #292929;
  color:#f5f6fa;
}
html,
body,
#root {
  height: auto;
}
`;