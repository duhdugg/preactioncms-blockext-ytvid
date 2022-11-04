# Preaction CMS Extension Block Example

This is an example extension block for [Preaction CMS](https://github.com/duhdugg/preaction-cms).

## Installing in Preaction CMS (compile from source)

### clone this repo into your `cms/src/ext` directory

```bash
cd /path/to/preactioncms/src/ext
git clone https://github.com/duhdugg/preactioncms-blockext-example blockext-example
```

### build the extension

```bash
cd /path/to/preactioncms/src/ext/blockext-example
yarn
yarn build
rm -r node_modules # IMPORTANT to not skip this cleanup step
```

### register the extension (and its settings) in `cms/src/ext/index.js`

```javascript
import React, { Suspense } from 'react'
import { Spinner } from '@preaction/bootstrap-clips'
import Example from './blockext-example/dist/preactioncms-blockext-example.esm.js'
ExampleSettings = loadable(
  () =>
    import(
      './blockext-example/dist/preactioncms-blockext-example-settings.esm.js'
    ),
  {
    fallback: <Spinner />,
  }
)
Example.Settings = ExampleSettings
const blockExtensions = { Example }
// ...
```

### rebuild CMS client

```bash
cd /path/to/preactioncms
yarn build
```
