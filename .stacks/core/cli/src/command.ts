import type { CliOptions } from '@stacksjs/types'
import cac from 'cac'
import { execSync } from './exec'
import { runCommand } from './run'

type CommandOptionTuple = [string, string, { default: boolean }]
interface CommandOptionObject {
  name: string
  description: string
  default: boolean | string
}
type CommandOptions = CommandOptionTuple | CommandOptionObject[]
interface Options {
  name: string
  description: string
  options: CommandOptions
  run: (options?: CliOptions) => Promise<any>
  onFail: (error: Error) => void
  onSuccess: () => void
}

export class Command {
  name: Options['name']
  description: Options['description']
  options: Options['options']
  run: Options['run']
  onFail: Options['onFail']
  onSuccess: Options['onSuccess']

  constructor({ name, description, options, run, onFail, onSuccess }: Options) {
    this.name = name
    this.description = description
    this.options = options
    this.run = run
    this.onFail = onFail
    this.onSuccess = onSuccess
  }
}

export const command = {
  run: async (command: string, options?: CliOptions) => {
    return runCommand(command, options)
  },

  runSync: (command: string, options?: CliOptions) => {
    return execSync(command, options)
  },

  cli: cac,
}
