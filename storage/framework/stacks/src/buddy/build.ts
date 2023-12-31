import { log, runCommand } from 'src/cli/src'

const result = await runCommand('bun build ./src/index.ts ./src/cli.ts --outdir dist --format esm --target bun --external @stacksjs/actions --external @stacksjs/enums --external @stacksjs/config --external @stacksjs/dns --external @stacksjs/error-handling --external @stacksjs/cli --external @stacksjs/cloud --external @stacksjs/logging --external @stacksjs/utils --external @stacksjs/validation --external @stacksjs/path --external @stacksjs/storage --external @stacksjs/types --external @aws-sdk/client-route-53 --splitting --target bun', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)
