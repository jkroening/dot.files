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

## antibody / oh-my-zsh
source <(antibody init)
antibody bundle < ~/.dot.files/.zsh_plugins.txt

ZSH_THEME=~/.dot.files/zsh-themes/jkroen.zsh-theme

# tabtab source for electron-forge package
# uninstall by removing these lines or running `tabtab uninstall electron-forge`
[[ -f /Users/jonathan.kroening/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh ]] && . /Users/jonathan.kroening/Repos/qnr/interface/electron/node_modules/tabtab/.completions/electron-forge.zsh

## aliases
alias tronmode='osascript ~/.dot.files/zsh-themes/term-theme.scpt Mootron'
alias thematrix='osascript ~/.dot.files/zsh-themes/term-theme.scpt "The Matrix"'
alias promode='osascript ~/.dot.files/zsh-themes/term-theme.scpt "Pro Mode"'
alias lsk='ls -hoag'
alias git='git '

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/jonathan.kroening/Downloads/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/jonathan.kroening/Downloads/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/jonathan.kroening/Downloads/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/jonathan.kroening/Downloads/google-cloud-sdk/completion.zsh.inc'; fi

## remove some git aliases zsh created
unalias g
unalias gc
