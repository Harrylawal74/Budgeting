import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/LightModeOutLined";
import SettingsOutlinedIcon from "@mui/icons-material/LightModeOutLined";
import SearchOutlinedIcon from "@mui/icons-material/LightModeOutLined";

// Account feature - import PersonModeOutlinedIcon from "@mui/icons-material/LightModeOutLined";//

const Topbar = () => {
    //take theme from material ui//
    const theme = useTheme();

    //takes color mode from usedTheme()^ and passes it to tokens which changes the selected color token//
    //Slight automation (when the theme is changed we can automatically change the color of other items)//
    const colors = tokens(theme.palette.mode);

    const colorMode = useContext(ColorModeContext);

    // reacts 'Box' component allows me to write css directly onto element //
    // if im doing a long component then break it up into smaller components //
    return (<Box display ="flex" justifyContent="space-between" p = {2}></Box>);
};

export default Topbar;