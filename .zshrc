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

# Theme
ZSH_THEME="jkroen"

source $ZSH/oh-my-zsh.sh

plugins=(git
	brew 
	npm
	osx
	python
	emacs)

autoload -Uz compinit
compinit
# End of lines added by compinstall

source ~/dot.files/.antigen/antigen.zsh
antigen apply

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
