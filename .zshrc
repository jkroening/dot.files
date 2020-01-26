# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=100000
SAVEHIST=100000
unsetopt beep
bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/Users/jonathan.kroening/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall

## aliases
alias tronmode='osascript ~/.dot.files/zsh-themes/term-theme.scpt TronTerm'
alias thematrix='osascript ~/.dot.files/zsh-themes/term-theme.scpt "The Matrix"'
alias lsk='ls -hoag'

# tabtab source for electron-forge package
# uninstall by removing these lines or running `tabtab uninstall electron-forge`
[[ -f /Users/jonathan.kroening/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh ]] && . /Users/jonathan.kroening/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh

export PATH="/usr/local/opt/python/libexec/bin:$PATH"
