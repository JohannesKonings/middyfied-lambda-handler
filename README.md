<h1 align="center">middyfied-lambda-handler</h1>

<p align="center">Combining middy middlewares with own custom middlewares for an consistent lambda handler handling</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JohannesKonings/middyfied-lambda-handler/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JohannesKonings/middyfied-lambda-handler" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JohannesKonings/middyfied-lambda-handler?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JohannesKonings/middyfied-lambda-handler/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/middyfied-lambda-handler" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/middyfied-lambda-handler?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

🚧 under construction 🚧

```shell
pnpm add @jaykingson/middyfied-lambda-handler
```

```ts
import { createMiddyfiedGeneralEventHandler } from "@jaykingson/middyfied-lambda-handler";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middyHandler = async (event: any) => {
	console.log("lambda was called...", event);
	return {
		body: JSON.stringify({
			message: "Hello from Lambda!",
		}),
		statusCode: 200,
	};
};

export const handler = createMiddyfiedGeneralEventHandler({
	lambdaHandler: middyHandler,
});
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://johanneskonings.dev/"><img src="https://avatars.githubusercontent.com/u/14806640?v=4?s=100" width="100px;" alt="Johannes Konings"/><br /><sub><b>Johannes Konings</b></sub></a><br /><a href="https://github.com/JohannesKonings/middyfied-lambda-handler/commits?author=JohannesKonings" title="Code">💻</a> <a href="#content-JohannesKonings" title="Content">🖋</a> <a href="https://github.com/JohannesKonings/middyfied-lambda-handler/commits?author=JohannesKonings" title="Documentation">📖</a> <a href="#ideas-JohannesKonings" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JohannesKonings" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JohannesKonings" title="Maintenance">🚧</a> <a href="#projectManagement-JohannesKonings" title="Project Management">📆</a> <a href="#tool-JohannesKonings" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo framework](https://create.bingo).
