import { createTheme } from "@material-ui/core"
import { primaryColor, neutralColor } from "./colors"

const theme = createTheme({
    palette:{
        primary:{
            main: neutralColor,
            contrastext: "white"
        },
        text:{
            primary: primaryColor
        }
    }
})

export default theme