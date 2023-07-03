import { defineBuildConfig } from 'unbuild'
import { alias } from './src/index'

export default defineBuildConfig({
  alias,

  entries: ['./src/index'],

  externals: [
    '@stacksjs/path',
  ],

  clean: false, // logging, alias, development, storage, tinker, and path are all prerequisites for other packages—needed for the release process
  declaration: true,
})
