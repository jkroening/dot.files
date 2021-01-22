# languageserver 0.3.6

- Show error message when diagnostics failed
- fix enclosed_by_quotes
- fix a bug in returning NA locations
- requires collections 0.3.0
- Run tasks with delay to reduce CPU usage on input 
- Refine args (Merge 9fd102b)
- respect NAMESPACE file


# languageserver 0.3.5

- Remove dependency on readr
- Use stringi to replace stringr
- Respect snippetSupport
- Respect linter_file in diagnostics


# languageserver 0.3.4

- on-type-formatting
- documentLinkProvider
- textDocument/documentColor
- use writeLines to write raw data in Windows
- Support section/subsection in document symbols
- make sure the output are UTF8
- set O_BINARY for stdin/stdout
- allows user to override ServerCapabilities
- Incremental resolving packages
- Disable lintr for temp files
- and a lot of minor fixes and improvements


# languageserver 0.3.3

- xml based parsing which provides more information on hovering, definitions and completions
- a bug fix in reading stdin
- unicode support improvement
- some internal refactoring

# languageserver 0.3.2

- read other header fields
- require newer version of collections
- allow colon to trigger completion
- specify kind for non exported package objects
- Only provide package exported objects at :: (#84)
- run tests on github actions
- implementation of scope completion using xpath
- Allow user customizable formatting style
- use readr's read_lines and write_lines
- use a better function name
- Provide completion for language constants
- bump lintr to 2.0.0


# languageserver 0.3.1

- Recursive parsing (#56)
- improve way to check if process becomes orphan
- unicode support


# languageserver 0.3.0

- added symbol definitions
- added document and workspace symbols
 
# languageserver 0.2.6

- fix a bug in completion items
- lower bound lintr to 1.0.3
- fix a bug in desc_get_deps
- better support vscode settings

# languageserver 0.2.5

- deprecate languageserver.default_linters

# languageserver 0.2.4

- require latest styler release
- handle windows crlf
- disable homedir config until lintr is released
- concat multiple lines in signature
- Allow package name to contain dots (e.g. data.table)
- completing variables defined in document 
- support completions and function signatures from documents
- improve worksync consistency
- sync all R files of a package
- load packages in Depends field


# languageserver 0.2.3

- ensure unicode documentation
- use * as itemBullet for hover help
- check if rootUri is NULL
