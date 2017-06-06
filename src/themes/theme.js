import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import colors, {
  cyan500,
  cyan700,
  cyan100
} from 'material-ui/styles/colors';

// basic
const theme1 = getMuiTheme(darkBaseTheme)

// customized
const theme2 = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: cyan100,
  }
})

window.colors = colors;

window.testColor = color => 
  console.log("%c COLOR", `color: ${color}`)

export default window.theme = theme2;
