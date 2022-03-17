## Path to your oh-my-zsh configuration.
export ZSH="$HOME/.oh-my-zsh"

## savreaderwriter setup
export DYLD_LIBRARY_PATH=/usr/local/Cellar/python/3.7.6_1/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages/savReaderWriter/spssio/macos
export LC_ALL=en_US.UTF-8

## openssl via brew
export CPPFLAGS=-I/usr/local/opt/openssl/include
export LDFLAGS=-L/usr/local/opt/openssl/lib

## pyenv autocompletion
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
