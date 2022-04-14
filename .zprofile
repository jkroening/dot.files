export PATH=/usr/local/bin:$PATH

## Go
export GOPATH=~/Repos/go/
export PATH=$GOPATH/packages/bin:$PATH
export PATH=$PATH:/usr/local/opt/go/libexec/bin
export PATH=$GOPATH/bin:$PATH

## python
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
export PYTHONSTARTUP=~/.dot.files/.pythonrc.py

## shell command completion for google sdk
if [ -f '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc' ]; then . '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc'; fi

## PATH for gcloud sdk
if [ -f '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc' ]; then . '/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc'; fi
