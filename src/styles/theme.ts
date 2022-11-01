import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles'
import type { PaletteColorOptions } from '@mui/material/styles/createPalette'

interface IPalette extends PaletteOptions {
    base: PaletteColorOptions
    icons: PaletteColorOptions
    hover: PaletteColorOptions
}

interface ITheme extends ThemeOptions {
    palette: IPalette
}

const themeOptions: ITheme = {
    palette: {
        primary: {
            light: '#3390EC',
            main: '#3390EC',
            dark: '#8774E1',
        },
        secondary: {
            light: '#00C73E',
            main: '#00C73E',
            dark: '#8774E1',
            contrastText: '#000',
        },
        base: {
            dark: '#212121',
            light: '#fff',
            main: '#fff',
        },
        icons: {
            main: '#707579',
            light: '#707579',
            dark: '#aaa',
        },
        hover: {
            main: '#f4f4f5',
            light: '#f4f4f5',
            dark: '#444',
        },
        info: {
            main: '#C4C9CC',
        },
        error: {
            main: '#E53935',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
}

const theme = createTheme(themeOptions)

export default theme
