import { log, runCommand } from '@stacksjs/cli'

const result = await runCommand('bun build ./src/index.ts --external vite --outdir dist --format esm', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)
