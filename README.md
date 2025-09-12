# fivem-typescript-boilerplate

A boilerplate for creating FiveM resources with TypeScript.

## Getting Started

### Node.js v18+

Install any LTS release of [`Node.js`](https://nodejs.org/) from v18.

### bun

Install the [`bun`](https://bun.sh) package manager globally.

```
npm install -g bun
```

### Setup

Initialise your own repository by using one of the options below.

- [Create a new repository](https://github.com/new?template_name=fivem-typescript-boilerplate&template_owner=codebluelife) using this template.
- [Download](https://github.com/codebluelife/fivem-typescript-boilerplate/archive/refs/heads/main.zip) the template directly.
- Use the [GitHub CLI](https://cli.github.com/).
  - `gh repo create <name> --template=codebluelife/fivem-typescript-boilerplate`

Navigate to your new directory and execute the following command to install dependencies.

```
bun install
```

## Development

Use `bun run watch` to actively rebuild modified files while developing the resource.

During web development, use `bun run web:dev` to start vite's webserver and watch for changes.

## Build

Use `bun run build` to build all project files in production mode.

To build and create GitHub releases, tag your commit (e.g. `v1.0.0`) and push it.

## Layout

- [/dist/](dist)
  - Compiled project files.
- [/scripts/](scripts)
  - Scripts used in the development process, but not part of the compiled resource.
- [/src/](src)
  - Project source code.