# Portfolio

This is the second iteration of my Portfolio built with NextJS and Chakra UI.

## Commands

### Contentful

To generate the Contentful content types from the Portfolio space run the following commands:

- `npm run export-contentful` This will create a Contentful export file from Contentful CLI named `contentful-export.json` using a config file.
- `npm run generate-contentful-types` This uses the `cf-content-types-generator` package to generate _TypeScript_ `types` and `interfaces` in the `src/modes/contentful/generated` directory

These files are ignored and should not be commited to a Git repository.

#### Contentful Export Config File

You will need to create a config file for the Contentful CLI exporter.

```json
// contentful-export-config.json

{
  // Retrieve the space id from `contentful space list`
  "space-id": "id of space",
  // Retrieve the environment id from `contentful space environment list`
  "environment-id": "id of environment"
}
```

## References

### Main Framework

- [NextJS](https://nextjs.org/docs)

### Storybook

- [Storybook](https://storybook.js.org/docs)
- [Storybook with NextJS](https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react)

### Contentful

- [Contentful](https://www.contentful.com/developers/)
- [Contentful with NextJS](https://www.contentful.com/developers/docs/tools/vercel/vercel-nextjs/vercel-nextjs-toolkit/)

#### Contentful CLI

- [Contentful CLI](https://github.com/contentful/contentful-cli)
- [CF Content Types Generator CLI](https://github.com/contentful-userland/cf-content-types-generator)

### Chakra UI

- [Chakra UI](https://www.chakra-ui.com/docs)
- [Chakra UI with NextJS](https://www.chakra-ui.com/docs/get-started/frameworks/next-app)
- [Chakra UI with Storybook](https://www.chakra-ui.com/docs/get-started/frameworks/storybook)

### Prettier

- [Prettier](https://prettier.io/docs/)
- [Prettier with NextJS](https://nextjs.org/docs/pages/api-reference/config/eslint#with-prettier)

### Font Awesome

- [Font Awesome](https://fontawesome.com/)
- [Font Awesome with React](https://docs.fontawesome.com/web/use-with/react)
- [Font Awesome with NextJS](https://docs.fontawesome.com/web/use-with/react/use-with#nextjs)
