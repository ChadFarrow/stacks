import process from 'node:process'
import type { CLI } from '@stacksjs/types'

export default function (cli: CLI) {
  // Listen to the `foo` command
  cli.on('inspire:two', () => {
    // eslint-disable-next-line no-console
    console.log('inspiring with two quotes')
    // Do something
  })

  // Listen to the default command
  cli.on('inspire:!', () => {
    // Do something
  })

  // Listen to unknown commands
  cli.on('inspire:*', () => {
    console.error('Invalid command: %s', cli.args.join(' '))
    process.exit(1)
  })

  return cli
}
