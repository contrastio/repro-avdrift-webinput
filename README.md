# A/V Drift Reproduction

Reproduction repository for audio/video drift issues on Mux web inputs.

## Reproduction steps

When loading this web application into Mux web inputs, A/V drifts start appearing after a few minutes.

## Getting started

```bash
yarn
yarn dev
```

## VSCode integration

You need to [use the workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript) in order to get CSS modules static typing working. See the [TypeScript plugin repository](https://github.com/mrmckeb/typescript-plugin-css-modules#visual-studio-code) for advanced usage.

This starter template works well with the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

Fix all, organize imports and format on save work seamlessly when configured in user or workspace settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
