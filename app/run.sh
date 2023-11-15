#!/bin/bash

# Mimic 'set -eo pipefail' behavior in a Windows-compatible way
set -e
set -o pipefail || true

case $1 in
  start)
    # The '| cat' is to trick Node that this is a non-TTY terminal
    # then react-scripts won't clear the console.
    yarn start | cat
    ;;
  build)
    yarn build
    ;;
  test)
    yarn test "$@"
    ;;
  *)
    exec "$@"
    ;;
esac
