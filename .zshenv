## Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

export PATH=/usr/local/bin:$PATH

## Go
export GOPATH=~/Repos/go/
export PATH=$GOPATH/packages/bin:$PATH
export PATH=$PATH:/usr/local/opt/go/libexec/bin
export PATH=$GOPATH/bin:$PATH

## savreaderwriter setup
export DYLD_LIBRARY_PATH=/usr/local/Cellar/python/3.7.6_1/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages/savReaderWriter/spssio/macos
export LC_ALL=en_US.UTF-8

## openssl via brew
export CPPFLAGS=-I/usr/local/opt/openssl/include
export LDFLAGS=-L/usr/local/opt/openssl/lib

## python
export PATH="/usr/local/opt/python/libexec/bin:$PATH"

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
