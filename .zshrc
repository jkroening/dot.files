## ========================
## HISTORY & BASICS
## ========================
HISTFILE=~/.histfile
HISTSIZE=100000
SAVEHIST=100000
setopt HIST_IGNORE_DUPS
unsetopt beep
bindkey -e


## ========================
## OH-MY-ZSH
## ========================
export ZSH="$HOME/.oh-my-zsh"

## to get themes working properly run the following on a new computer:
## ln -s $HOME/.dot.files/.zsh-themes/jkroen.zsh-theme $HOME/.dot.files/.oh-my-zsh/custom/themes/jkroen.zsh-theme
## ln -s $HOME/.dot.files/.zsh-themes/term-theme.scpt $HOME/.dot.files/.oh-my-zsh/custom/themes/term-theme.scpt

## custom theme
ZSH_THEME="jkroen"

## plugins
plugins=(
  git
  node
  npm
  yarn
)

source $ZSH/oh-my-zsh.sh


## ========================
## COMPLETION SPEEDUP
## ========================
zstyle ':completion:*' rehash true

autoload -Uz compinit
## use cached compdump if available, else normal
if [[ -n $ZSH_COMPDUMP && -f $ZSH_COMPDUMP ]]; then
  compinit -C
else
  compinit
fi


## ========================
## NODE / NVM
## ========================
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"


## ========================
## TAB COMPLETION (electron-forge)
## ========================
EF_COMPLETION="$HOME/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh"
[[ -f "$EF_COMPLETION" ]] && . "$EF_COMPLETION"


## ========================
## ALIASES
## ========================
alias tronmode='osascript ~/.dot.files/.zsh-themes/term-theme.scpt Mootron'
alias thematrix='osascript ~/.dot.files/.zsh-themes/term-theme.scpt "The Matrix"'
alias promode='osascript ~/.dot.files/.zsh-themes/term-theme.scpt "Pro Mode"'
alias lsk='ls -hoag'
alias git='git '
alias restart='exec zsh -l'
alias watchibn='export AZURE_OPENID=$(cat ~/Dropbox/Work/keys/ibn.txt); lsof -ti :8000 | xargs kill -9; yarn run watch'

## safe unalias
type g &>/dev/null && unalias g
type gc &>/dev/null && unalias gc


## ========================
## CUSTOM KEYBIND FUNCTIONS
## ========================
function killwebpack() {
  lsof -ti :8000 | xargs kill -9
  pkill -f webpack-dev-server
  pgrep -f webpack | xargs kill -9
  builtin zle .redisplay
  compinit -i
}
zle -N killwebpack
bindkey '^x' killwebpack


## ========================
## HOMEBREW PATHS & PYTHON
## ========================
## default homebrew binaries
export PATH="/opt/homebrew/bin:$PATH"

## python 3.14 from homebrew
export PATH="/opt/homebrew/opt/python@3.14/libexec/bin:$PATH"

## make python 3.14 default for `python` and `python3`
alias python='/opt/homebrew/opt/python@3.14/libexec/bin/python3'
alias python3='/opt/homebrew/opt/python@3.14/libexec/bin/python3'
alias pip='/opt/homebrew/opt/python@3.14/libexec/bin/pip3'
alias pip3='/opt/homebrew/opt/python@3.14/libexec/bin/pip3'

## google cloud SDK still uses its bundled python 3.11
export CLOUDSDK_PYTHON="/usr/local/bin/python3.11"
if [ -f "$HOME/.google-cloud-sdk/path.zsh.inc" ]; then
  . "$HOME/.google-cloud-sdk/path.zsh.inc"
fi
if [ -f "$HOME/.google-cloud-sdk/completion.zsh.inc" ]; then
  . "$HOME/.google-cloud-sdk/completion.zsh.inc"
fi