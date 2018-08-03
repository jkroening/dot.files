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

## python via brew
export PATH="/usr/local/opt/python/libexec/bin:$PATH"

## savreaderwriter setup
export DYLD_LIBRARY_PATH=/usr/local/Cellar/python/2.7.14/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages/savReaderWriter/spssio/macos
export LC_ALL=en_US.UTF-8

## openssl via brew
export CPPFLAGS=-I/usr/local/opt/openssl/include
export LDFLAGS=-L/usr/local/opt/openssl/lib

# tabtab source for electron-forge package
# uninstall by removing these lines or running `tabtab uninstall electron-forge`
[[ -f /Users/jonathan.kroening/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh ]] && . /Users/jonathan.kroening/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh
