## Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

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
export GOPATH=~/Repos/go/
export PATH=$GOPATH/packages/bin:$PATH
export PATH=$PATH:/usr/local/opt/go/libexec/bin
export PATH=$GOPATH/bin:$PATH

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
