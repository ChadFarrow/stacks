# Stacks Config

This package simplifies accessing your Stacks configuration.

## ☘️ Features

- ⚡️ API to access your Stacks config

## 🤖 Usage

```bash
pnpm i -D @stacksjs/config
```

Now, you can use it in your project:

```ts
import { app, deploy, docs, git, hashing, library, services, ui } from '@stacksjs/config'

console.log(app) // { name: 'Your App Name', env: 'local', url: 'https://localhost', ... }
```

Learn more in the docs.

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/stacksjs/stacks/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please review the [Contributing Guide](https://github.com/stacksjs/contributing) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with ❤️
