import process from 'node:process'
import type { CLI, CliOptions } from '@stacksjs/types'
import { $ } from 'bun'
import { projectPath } from '@stacksjs/path'
import { log } from 'stacks/logging'

export function list(buddy: CLI) {
  const descriptions = {
    list: 'List all of the project-specific Buddy commands',
    project: 'Target a specific project',
    verbose: 'Enable verbose output',
  }

  buddy
    .command('list', descriptions.list)
    .option('-p, --project', descriptions.project, { default: false })
    .option('--verbose', descriptions.verbose, { default: false })
    .action(async (options: CliOptions) => {
      log.debug('Running `buddy list` ...', options)

      $.cwd(projectPath())

      const test = await $`buddy --help`.text()
      const commandsSection = test.match(/Commands:.*?(?=For more info, run any command with the)/s)?.[0]

      if (commandsSection) {
        const cleanedCommands = commandsSection
          .replace('Commands:', '') // Remove "Commands:"
          .replace(/^\s+/gm, '') // Trim leading whitespace from the start of each line

        // eslint-disable-next-line no-console
        console.log(cleanedCommands)
        return
      }

      console.error('#1 - Please reach out to our Discord for helper: https://discord.gg/stacksjs')
    })

  buddy.on('list:*', () => {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', buddy.args.join(' '))
    process.exit(1)
  })
}
