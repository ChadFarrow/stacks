import type { StacksOptions } from '@stacksjs/types'
import defaults from './defaults'
import overrides from './overrides'

export const config: StacksOptions = {
  ...defaults,
  ...overrides,
}

export const {
  ai,
  analytics,
  app,
  cache,
  cloud,
  cli,
  database,
  dns,
  docs,
  email,
  git,
  hashing,
  library,
  logger,
  notification,
  payment,
  queue,
  security,
  searchEngine,
  services,
  storage,
  team,
  ui,
}: StacksOptions = config

export { defaults, overrides }

export * from './helpers'
