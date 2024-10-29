/*--- Colours and Typographies of app ---*/
/* Light and Dark mode */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

/* color design tokens (colors im using) */

export const tokens = (mode) => ({
    //if mode is dark then use this colour set//
    ...(mode === 'dark'
        ? {
            tealAccent: {
                /* lloyds green */
                100: "#cff0e4",
                200: "#a0e2ca",
                300: "#70d3af",
                400: "#41c595",
                500: "#11b67a",  /* original  (tailwind shades used, ctrl + k.. ctrl + g)*/
                600: "#0e9262",
                700: "#0a6d49",
                800: "#074931",
                900: "#032418"
            },
            
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            
            white: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333"
            },
            
            primary: {
                100: "#cccccc",
                200: "#999999",
                300: "#666666",
                400: "#333333",
                500: "#000000",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000"
            },
        } 
        : {
            tealAccent: {
                /* lloyds green */
                100: "#032418",
                200: "#074931",
                300: "#0a6d49",
                400: "#0e9262",
                500: "#11b67a",  /* original  (tailwind shades used, ctrl + k.. ctrl + g)*/
                600: "#41c595",
                700: "#70d3af",
                800: "#a0e2ca",
                900: "#cff0e4",
            },
            
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            
            white: {
                100: "#333333",
                200: "#666666",
                300: "#999999",
                400: "#cccccc",
                500: "#ffffff",
                600: "#ffffff",
                700: "#ffffff",
                800: "#ffffff",
                900: "#ffffff",
            },
            
            //black//
            primary: {
                100: "#000000",
                200: "#000000",
                300: "#000000",
                400: "#000000",
                500: "#000000",
                600: "#333333",
                700: "#666666",
                800: "#999999",
                900: "#cccccc",
            },
        })
})


/* material ui these settings */

// returns colors depending on the mode //
// dark mode returns top tokens... anything else (light mode) returns bottom tokens)
export const themeSettings = (mode) => {
    const colors = tokens (mode);

    // matieral ui theme settings//
    return {
        palette: {
            mode: mode,
            //dark mode//
            ...(mode === 'dark'
                ?{
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.white[500],
                    },
                    neutral: {
                        dark: colors.tealAccent[700],
                        main: colors.tealAccent[500],
                        light: colors.tealAccent[100],
                    },
                    background: {
                        default: colors.primary[500],
                    }
                    // light mode //
                } : {
                    primary: {
                        main: colors.white[500],
                    },
                    secondary: {
                        main: colors.primary[500],
                    },
                    neutral: {
                        dark: colors.tealAccent[700],
                        main: colors.tealAccent[500],
                        light: colors.tealAccent[100],
                    },
                    background: {
                        default: '#fcfcfc',
                    },
                }),    
        
        }, 
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
            
        }
    };
};


/* context for color mode */
export const ColorMode = createContext({
    // function to change color  throughout app//
    toggleColorMoed: () => {}
});

export const useMode = () => {
    // holds state (dark or light) //
    const [mode, setMode] = useState("dark");

    // function that changes the theme from dark to light and vice versa
    const colorMode = useMemo (
        () => ({
            toggleColorMode: () =>
                // if prev is light then set to dark if not set to light // 
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );

    /* creates theme for material ui by passing mode into theme 
    settings in order to change the theme 
    (e.g. if mode is set to dark then passes mode to material  ui theme settings which 
    sekects dark mode )*/
    const theme = useMemo (() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode];
}
