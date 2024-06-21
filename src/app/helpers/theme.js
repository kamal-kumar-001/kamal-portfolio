const setTheme = (currentTheme) => {


    const selectedCssProps = Array.from(document.styleSheets).reduce((prevStyleSheet, currentStyleSheet) => (
        prevStyleSheet = [
            ...prevStyleSheet,
            ...Array.from(currentStyleSheet.cssRules).reduce((prevCssRule, currCssRule) => {
                prevCssRule = currCssRule.selectorText === ":root" ? [
                    ...prevCssRule,
                    ...Array.from(currCssRule.style).filter((item) =>
                        item.startsWith("--selected")
                    ),
                ] : prevCssRule
                return prevCssRule
            }, [])
        ]
    ), []);

    selectedCssProps.forEach(value => {
        document.documentElement.style.setProperty(value, `var(--${currentTheme}${value.substring(10)})`)
    })
};

export default setTheme;