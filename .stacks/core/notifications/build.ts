import { log, runCommand } from '@stacksjs/cli'

const result = await runCommand('bun build ./src/index.ts --outdir dist --format esm --external @stacksjs/chat --external @stacksjs/cli --external @stacksjs/config --external @stacksjs/email --external @stacksjs/error-handling --external @stacksjs/push --external @stacksjs/sms --external @stacksjs/types --target bun', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)

else
  log.success('Build complete')
