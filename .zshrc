# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

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

source ~/.dot.files/.antigen/antigen.zsh

antigen use oh-my-zsh
antigen theme jkroening/zsh-themes jkroen
antigen bundle git
antigen bundle brew
antigen bundle npm
antigen bundle osx
antigen bundle python
antigen bundle emacs
antigen apply

## Go
export GOPATH=~/Work/Repos/go/
export PATH=$GOPATH/packages/bin:$PATH
export PATH=$PATH:/usr/local/opt/go/libexec/bin

## aliases
alias tronmode='osascript ~/.dot.files/zsh-themes/term-theme.scpt TronTerm'
alias thematrix='osascript ~/.dot.files/zsh-themes/term-theme.scpt "The Matrix"'
alias lsk='ls -hoag'

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
