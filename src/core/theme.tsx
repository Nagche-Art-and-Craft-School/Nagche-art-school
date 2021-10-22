import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        // Lighter brown
        primary: {
            main: '#AC5435',
            dark: '#B59474',
        },
        // Darker Brown (For accents)
        secondary: {
            light: '#B59474',
            main: '#AC5435',
        },
    },
    typography: {
        fontFamily: ['Lato', 'Prata'].join(',')
    },
})

// This is where we can style buttons, text fields, etc
theme.overrides = {
    MuiTypography: {
        h2: {
            fontFamily: "Prata",
            fontSize: "48px",
            marginBottom: "55px",
        },
        h4: {
            fontFamily: "Lato",
            fontSize: "32px",
            marginBottom: "70px",
        }
    },
    MuiButton: {
        contained: {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            boxShadow: "none",
            borderWidth: "5px",
            borderColor: "white",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "30px",
            width: "500px",
            marginTop: "20px",
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: "none",
            }
        },
        outlined: {
            backgroundColor: theme.palette.secondary.light,
            color: "white",
            boxShadow: "none",
            borderWidth: "2px",
            borderColor: "white",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "30px",
            width: "500px",
            marginTop: "20px",
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
            }
        }
    },
};

export default theme;