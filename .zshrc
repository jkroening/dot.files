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

source ~/dot.files/.antigen/antigen.zsh

antigen use oh-my-zsh
antigen theme jkroening/zsh-themes jkroen
antigen bundle git
antigen bundle brew
antigen bundle npm
antigen bundle osx
antigen bundle python
antigen bundle emacs
antigen apply

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
