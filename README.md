![Social Card of Stacks](./public/social.jpg)

# Rapid App & Library Development

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm downloads][npm-downloads-src]][npm-downloads-href]
<!-- [![Codecov][codecov-src]][codecov-href] -->

> [!WARNING]
> Stay tuned. Open Beta coming soon.

The goal of the framework is to _help you_ create & maintain frontends, backends, and clouds—without having to worry about the boilerplate. Stacks is a rapid development framework, meeting all your full stack needs.

- Web & Desktop applications
- Serverless & traditional APIs
- Cloud infrastructure creation & maintenance
- Interactive CLIs
- Framework-agnostic component & function libraries
- Deployment & Release Manager _(CI & CD)_

Stacks helps you every step along the way—in beginner & expert-friendly ways, allowing you to focus on the _what_ and _why_ of your project.

> “Convention over configuration” is the Stacks mantra. _- Chris_

<!-- ![Atomic UI & FX Design](./docs/assets/diagram.png) -->

## Get Started

It’s incredibly easy to get started with this framework. Simply run the following command in your terminal:

```bash
sh <(curl stacksjs.org) my-project # wip

# alternatively, if Bun >= v1.0 is installed already,
# you may also get started via:
bunx stacks new my-project
```

## Usage

The following list includes some of the most common ways to interact with the Stacks API.

_Meet the toolkit, Buddy:_

```bash
buddy install # installs all dependencies
buddy dev # starts one of the dev servers (components, functions, views, or docs)
buddy build # follow CLI prompts to select which library (or server) to build
buddy commit # follow CLI prompts for committing changes
buddy release # creates the releases for the stack & consequently, publishes them to npm
buddy upgrade # auto-update all deps & the Stacks framework

buddy make:model Car # scaffolds a model
buddy make:component HelloWorld # scaffolds a component
buddy make:function HelloWorld # scaffolds a function
buddy make:view hello-world # scaffolds a page (https://my-project.test/hello-world)

buddy --help
```

<details>
<summary>View the complete Buddy Toolkit</summary>

```bash
buddy --version # get the Stacks version
buddy --help # view help menu
# please note: you may suffix any command with the
# `command --help` flag to review the help menu

buddy install # installs dependencies
buddy add # adds a stack or dependency
buddy fresh # fresh reinstall of all deps
buddy clean # removes all deps

buddy upgrade # upgrades all dependencies
buddy upgrade -i # prompts you to select which updates to apply (wip)
buddy upgrade:dependencies # auto-upgrades deps & the Stacks framework
buddy upgrade:framework # auto-upgrades deps & the Stacks framework
buddy upgrade:search-engine # auto-upgrades configured search engine
buddy upgrade:bun # upgrades to latest project-defined Bun version
buddy upgrade:all # auto-upgrades all of the above

# if you need any more info on any command listed here, you may suffix
# any of them via the "help option", i.e. `buddy ... --help`

buddy dev # starts the frontend dev server
buddy dev -i # prompts any of the dev servers (components, functions, views, or docs)
buddy dev:api # starts the API dev server
buddy dev:dashboard # starts the Admin/Dashboard dev server
buddy dev:desktop # starts the Desktop dev server
buddy dev:views # starts frontend dev server
buddy dev:components # starts component dev server
buddy dev:functions # stubs functions
buddy dev:docs # starts local docs dev server
buddy dev docs # also starts the local docs dev server (colon is optional)
buddy development # `buddy dev` alias

# for Laravel folks, `serve` may ring more familiar than the `dev` name. Hence, we aliased it:
buddy serve
buddy serve:components
buddy serve:desktop
buddy serve:views
buddy serve:functions
buddy serve:docs

# building for production (e.g. AWS, Google Cloud, npm, Vercel, Netlify, et al.)
buddy build # select a specific build (follow CLI prompts)
buddy build:views # builds SSG views
buddy build:desktop # builds Desktop application
buddy build:library # builds any or all libraries
buddy build:functions # builds function library
buddy build:components # builds Vue component library & Web Component library
buddy build:web-components # builds framework agnostic Web Component library (i.e. Custom Elements)
buddy build:vue-components # builds Vue 2 & 3-ready Component library
buddy build:all # builds all your code

# `buddy build` aliases
buddy prod
buddy prod:components
buddy prod:desktop
buddy prod:library
buddy prod:views
buddy prod:functions
buddy prod:vue-components
buddy prod:web-components
buddy prod:all
buddy production # `buddy prod` alias

# sets your application key
buddy key:generate

buddy make:component HelloWorld # bootstraps a HelloWorld component
buddy make:function hello-world # bootstraps a hello-world function
buddy make:view hello-world # bootstraps a hello-word page
buddy make:model Car # bootstraps a Car model
buddy make:database cars # creates a cars database
buddy make:migration create_cars_table # creates a cars migration file
buddy make:factory cars # creates a Car factory file
buddy make:seed cars # creates a Car seed file
buddy make:table cars # bootstraps a cars data table
buddy make:notification welcome-email # bootstraps a welcome-email notification
buddy make:lang de # bootstraps a lang/de.yml language file
buddy make:stack my-project # shares logic with `bunx stacks new my-project`

buddy migrate # runs database migrations
buddy migrate:dns # sets the ./config/dns.ts file

buddy dns example.com # list all DNS records for example.com
buddy dns example.com --type MX # list MX records for example.com (proxies dog)

buddy https httpie.io/hello
# http [flags] [METHOD] URL [ITEM [ITEM]]
buddy http --help
buddy http PUT pie.dev/put X-API-Token:123 name=John # Custom HTTP method, HTTP headers and JSON data
buddy http -v pie.dev/get # See the request that is being sent using one of the output options
buddy http -f POST pie.dev/post hello=World # submitting forms
buddy http --offline pie.dev/post hello=offline
buddy http -a USERNAME POST https://api.github.com/repos/httpie/cli/issues/83/comments body='HTTPie is awesome! :heart:'
buddy http pie.dev/post < files/data.json
buddy http pie.dev/image/png > image.png
buddy http --download pie.dev/image/png
buddy http --session=logged-in -a username:password pie.dev/get API-Key:123
buddy http --session=logged-in pie.dev/headers
buddy http localhost:8000 Host:example.com

buddy lint # runs linter
buddy lint:fix # runs linter and fixes issues

buddy commit # follow CLI prompts for committing staged changes
buddy release # creates the releases for the stack & triggers the Release Action (workflow)
buddy changelog # generates CHANGELOG.md

# when deploying your app/s to a remote server or cloud provider
buddy deploy # select a specific deployment (follow CLI prompts)
# buddy deploy:docs # deploys docs to AWS (or other configured provider)
# buddy deploy:functions # deploys functions to AWS (or other configured provider)
# buddy deploy:views # deploys views to AWS (or other configured provider)
# buddy deploy:all # deploys all your code
buddy undeploy # be careful: "undeploys" removes/deletes your deployed resources

buddy cloud:remove # removes cloud setup
buddy cloud:cleanup # removes cloud setup & cleans up all potentially leftover resources
buddy cloud:add --jump-box # adds a jump box to your cloud setup

# select the example to run (follow CLI prompts)
buddy example # prompts you to select which example to run
buddy example:vue # runs the Vue example
buddy example:web-components # runs the Web Component example

# you likely won’t need to run these commands as they are auto-triggered, but they are available
buddy generate  # prompts you to select which generator to run
buddy generate:types # generates types for your components, functions, & views
buddy generate:entries # generates entry files for components, functions, & views
buddy generate:web-types # generates Web Component types
buddy generate:vscode-custom-data # generates VSCode custom data
buddy generate:ide-helpers # generates IDE helpers
buddy generate:component-meta # generates component meta
buddy generate:all # runs all generators

# generates your application key
buddy key:generate # generates your application key

# generate your TypeScript declarations
buddy types:generate # generates types for your components, functions, & views
buddy types:fix # auto-fixes types for your components, functions, & views

buddy domains # alias for `buddy domains:list`
buddy domains:add stacksjs.org # adds a domain
buddy domains:remove stacksjs.org # removes a domain
buddy domains:list # lists all domains
buddy domains:update # apply ./config/dns.ts updates
buddy domains:purchase stacksjs.org # purchase a new domain

# test your stack
buddy test # runs test suite (unit & e2e)
buddy test:coverage # runs test coverage
buddy test:types # runs typecheck

# the CLI may be triggered in any
# of the following syntax:
stx fresh
buddy fresh
bud fresh
buddy fresh
```

</details>

Read more here about the Stacks CLI in the documentation.

## Features

The Stacks framework is a harmony of several “engines” to build any web and/or desktop application, in highly scalable & privacy-friendly ways. It consists of the following engines:

### Stacks Frontend

_Develop dynamic UIs with helpers for atomic design, and much more._

- 🧩 **Components** _primitive to develop user interfaces_
- 🤖 **Functions** _primitive to develop business logic (and grant your UI superpowers)_
- 🎨 **UI Kit** _modern & deeply-integrated components_
- 🌐 **Web** _“a routing & templating engine that makes sense”_
- 🖥️ **Desktop** _transforms your web app into desktop app, plus more_
- 📝 **Documentation** _markdown-based documentation, auto-generated_
- 📚 **Library** _auto-builds & manages component & function libraries_
- ⚡️ Powered by Bun, Nitro, Tauri, UnoCSS, Vite & Vue

### Stacks Backend

_Develop serverless (or server) functions with countless helpers to build scalable & fast APIs._

- 🪄 **AI** _deep AI integrations & foundational model access_
- 🤖 **APIs** _scalability & maintainability built-in_
- 🏎️ **Cache** _Redis, DynamoDB, and more—serverless_
- ⚙️ **CLIs** _create beautiful CLIs for Linux, Windows, and Mac—without requirements_
- 📀 **Database** _SQLite, MySQL, Postgres, PlanetScale, and more_
- 👾 **Errors** _native type-safe error handling_
- 🗓️ **Events** _functional event (front & backend) communication_
- 📢 **Notifications** _emails, SMSs, direct, and push notifications & webhooks_
- 🗺️ **ORM** _supercharged, fully-typed models & relations (including automated migrations)_
- 💳 **Payments** _unified API for one-off & subscription billing methods for Stripe_
- ⚙️ **Queues** _run any heavy workload in the background_
- 🛠️ **Query Builder** _powerful, type-safe SQL query builder_
- 💬 **Realtime** _“everything you need to build dynamic real-time apps”_
- 🧭 **Router** _smart routing, file-based or Laravel-like_
- 🔎 **Search Engine** _smart searching, advanced filtering & sorting, pagination, headless UI_
- 💾 **Storage** _a secure-by-default File API that feels right_
- 🧪 **Tinker** _a powerful TypeScript REPL_
- 🌪️ **Validation** _e2e type-safety (true frontend & backend harmony)_
- 🎯 **X-Ray** _all you need to debug, log & analyze_

### Stacks Cloud

_Create your personal or professional Vercel-like cloud, based on MIT-licensed OSS._

- ☁️ **Server** _local development server & production-ready servers out-of-the-box_
- ⛅️ **Serverless** _on-demand, auto-scaling, zero maintenance_
- 🚏 **CDN** _zero-config, low-latency CDN, including request life-cycle hooks & optimized request compressions (Brotli & gzip)_
- 🔀 **Domain** _version-controlled & zero-config domain management (e.g. DNS management)_
- 🤖 **AI** _fine-tune a foundational model using your application data_
- 📧 **Email** _secure & zero-setup <easy-peasy@custom-domains.com> mailboxes_
- 🔐 **Firewall** _native web application firewall support_
- 📦 **Storage** _unlimited cloud storage & automatic backups_
- 🚜 **Maintenance** _maintain your cloud infrastructure with ease using Buddy & Stacks_
- 🚦 **Infrastructure as Code** _version-controlled cloud infrastructure (AWS, Google next?)_

### Stacks CI/CD

_Focus on coding, not publishing._

- 🚀 **Deployment Manager** _take the sweat out of production deployments—zero-setup push-to-deploy_
- 0️⃣ **Zero Downtime** _deploy with confidence using a zero-downtime deployment strategy_
- 📫 **Release Manager** _libraries (component & function) auto-published to npm, git helpers, and more_

### Stacks DX

_Enhanced productivity for developers. No more creating boilerplate._

- 💡 **IDE Integration** _auto-completions, inline docs & a powerful VS Code setup_
- 🪄 **Zero-Config** _yet highly configurable—convention over configuration_
- 💅 **Linter & Formatter** _auto-configured & built into your IDE_
- 💪🏼 **Type Strong** _built-in e2e type-safety_
- ✨ **Git Workflows** _committing with ease_
- 🚗 **Auto Imports** _your components & functions, including date, string, array, & object helpers_
- ⏩ **Code Snippets** _say goodbye to the boilerplate—thank you Sarah Drasner_
- 🔤 **Spell Checker** _be notified once there are typos_
- 🛠️ **Utilities** _Collections, VueUse, and more_
- 👥 **Team Management** _manage your team & their permissions_
- 🧪 **Testing** _unit & e2e tests powered by Bun & Playwright_

No matter whether you are a beginner or an expert, the approachable Stacks design allows you to learn at your own pace, using our thorough documentation covering every aspect of the framework. Stacks is extremely beginner & expert-friendly.

Develop beautiful, reactive, composable UIs without learning a new set of languages. HTML, CSS, and minimal JavaScript—that’s all you need to dive in now! _Or TypeScript ✌🏼_

> _A true rapid application development framework for all Full Stack needs. Next-level simplicity & helpful DX._

## Roadmap

Part of the Stacks ecosystem are the following first-party supported stacks:

- [Table](https://github.com/stacksjs/stacks/tree/main/storage/framework/core/stacks/tables) (Data tables with ease)
- [Calendar](https://github.com/stacksjs/calendar) (Add to Calendar utilities—iCal, Google, and more)
- [Command Palette](https://github.com/stacksjs/command-palette) (`⌘ + k` for the web)
- [Date Picker](https://github.com/stacksjs/date-picker) (Beautiful, modern date picker)
- [File Manager](https://github.com/stacksjs/file-manager) (Build your own file manager—like Dropbox or Google Drive)
- [Image](https://github.com/stacksjs/image) (Modern image experience)
- [Video](https://github.com/stacksjs/video) (Modern video experience)
- [Audio](https://github.com/stacksjs/audio) (Modern audio experience)
- [Identity](https://github.com/stacksjs/identity) (Identity providers)
- [Digital Ownership](https://github.com/stacksjs/ownership) (Public ownership protocol integrations)
- [Payments](https://github.com/stacksjs/payments) (Unified payment & wallet APIs)
- [Governance](https://github.com/stacksjs/governance) (Powerful toolkit for democratic governance)

View our detailed roadmap/s [here](https://github.com/stacksjs/stacks/projects?query=is%3Aopen), for more information. Additionally, you may find interesting stacks, information & examples over at [Awesome Stacks](https://github.com/stacksjs/awesome-stacks).

While we currently only fully support `us-east-1`, we are looking forward to expanding to other regions soon.

## Testing

```bash
bun test
```

## Changelog

Please see our [releases](https://github.com/stacksjs/stacks/releases) page for more information on what has changed recently.

## Contributing

Please see the [Contributing Guide](https://github.com/stacksjs/contributing) for details.

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

You're free to use this package, and we would love to receive a postcard.

Our address is: Stacks.js, 5710 Crescent Park #107, Playa Vista 90094, CA

##### _We publish all received postcards on our website. Thanks to Spatie for this wonderful idea 💙_

## Sponsors

Once we launch a usable Stacks version, we hope people will start enjoying it! In the meantime, thanks to the following sponsors for helping to fund the development of this framework:

- [The Solana Foundation](https://solana.com/)

## Credits

- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](../../contributors)

And a special thanks to [Dan Scanlon](https://twitter.com/danscan) for donating the `stacks` name on npm ✨

## License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with 💙

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/stacks?style=flat-square
[npm-version-href]: https://npmjs.com/package/stacks

[npm-downloads-src]: https://img.shields.io/npm/dm/stacks?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/stacks

[github-actions-src]: https://img.shields.io/github/actions/workflow/status/stacksjs/stacks/ci.yml?style=flat-square&branch=main
[github-actions-href]: https://github.com/stacksjs/stacks/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/stacksjs/stacks/main?style=flat-square
[codecov-href]: https://codecov.io/gh/stacksjs/buddy -->
