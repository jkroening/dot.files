## options(warnPartialMatchArgs = TRUE)
tbl <- function(...) {
    tab <- table(..., exclude = NULL)
    dimnames(tab) <- unname(dimnames(tab))
    cat("\n")
    print(tab)
    invisible(tab)
}
source("/Users/jonathan.kroening/Desktop/custom-linters.R")

## LanguageServer Setup Start (do not change this chunk)
## to remove this, run languageserversetup::remove_from_rprofile
if (requireNamespace('languageserversetup', quietly = TRUE)) {
    options(
        langserver_library = '/Users/jonathan.kroening/.dot.files/languageserver-library'
    )
    languageserversetup::languageserver_startup()
    unloadNamespace('languageserversetup')
}
## LanguageServer Setup End

## linting
options(languageserver.formatting_style = function(options) {
    style <- styler::tidyverse_style(indent_by = options$tabSize)
    style$token$set_space_between_open_bracket_and_comma <- set_space_between_open_bracket_and_comma()
    style
})