## options(warnPartialMatchArgs = TRUE)
tbl <- function(...) {
    tab <- table(..., exclude = NULL)
    dimnames(tab) <- unname(dimnames(tab))
    cat("\n")
    print(tab)
    invisible(tab)
}

## LanguageServer Setup Start (do not change this chunk)
## to remove this, run languageserversetup::remove_from_rprofile
if (requireNamespace("languageserversetup", quietly = TRUE)) {
    languageserversetup::languageserver_startup()
    unloadNamespace("languageserversetup")
}
## LanguageServer Setup End