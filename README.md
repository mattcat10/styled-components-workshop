# Prerequisites

## Install modules
yarn

## To start the project
yarn start


# Exercises
1. Start the app and get familiar with how the components and existing css
    -  ```yarn```
    -  ```yarn start```

1. Convert all elements with styles to styled components
    - album art image (img)
    - album title (h1)
    - album artist label (div)
    - album artist button and round button (2 buttons)
1. Style one of your components based off props
1. Add theming to your project
    - use the theme provider to provide a theme
        ``<ThemeProvider theme={theme}>
        ...
        </ThemeProvider>``

        ``color: ${props => props.theme.main};``
1. Add animations
    - to add animations you can import `keyframes` from styled components 
