## Prerequisites
yarn is required - to install:  `brew install yarn`

node is required - to install: `brew install node`

## Styled components dependencies (already in this project)
```npm i styled-components --save```

If you are using typescript install the types (hint: this project is)
```npm i @types/styled-components --save```


# Exercises
1. Start the app and get familiar with how the components and existing css
    -  ```yarn```
    -  ```yarn start```

1. Convert all elements with styles to styled components
    - album art image (img)
    - album title (h1)
    - album artist label (div)
    - album artist button and round button (2 buttons)
1. Use the soldOut value from the album data to change the color of the button instead of using the disabled selector
1. Add theming to your project
    - Wrap the app with a theme provider to gain access to the theme prop. Use the theme provider to provide a theme
        ``<ThemeProvider theme={theme}>
        ...
        </ThemeProvider>``

    - Whatever styles you would like to use the theme for use the theme prop
        ``color: ${props => props.theme.main};``
1. Add animations
    - to add animations you can import `keyframes` from styled components 

# References
- styled components docs https://www.styled-components.com/docs