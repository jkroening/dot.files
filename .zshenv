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

## python via brew
export PATH="/usr/local/opt/python/libexec/bin:$PATH"

## savreaderwriter setup
export DYLD_LIBRARY_PATH=/usr/local/Cellar/python/2.7.14/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages/savReaderWriter/spssio/macos
export LC_ALL=en_US.UTF-8

## openssl via brew
export CPPFLAGS=-I/usr/local/opt/openssl/include
export LDFLAGS=-L/usr/local/opt/openssl/lib

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
