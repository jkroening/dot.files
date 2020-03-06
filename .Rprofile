options(warnPartialMatchArgs = TRUE)
tbl <- function(...) {
    tab <- table(..., exclude = NULL)
    dimnames(tab) <- unname(dimnames(tab))
    cat("\n")
    print(tab)
    invisible(tab)
}
