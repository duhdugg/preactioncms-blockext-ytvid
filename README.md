# Preaction CMS Youtube Video Extension Block

This is an extension block for [Preaction CMS](https://github.com/duhdugg/preaction-cms).

## Installing in Preaction CMS (compile from source)

### clone this repo into your `cms/src/ext` directory

```bash
cd /path/to/preactioncms/src/ext
git clone https://github.com/duhdugg/preactioncms-blockext-ytvid blockext-ytvid
```

### build the extension

```bash
cd /path/to/preactioncms/src/ext/blockext-ytvid
yarn
yarn build
rm -r node_modules # IMPORTANT to not skip this cleanup step
```

### register the extension (and its settings) in `cms/src/ext/index.js`

```javascript
import React, { Suspense } from 'react'
import { Spinner } from '@preaction/bootstrap-clips'
import Ytvid from './blockext-ytvid/dist/preactioncms-blockext-ytvid.esm.js'
const Ytvid = loadable(
  () =>
    import(
      './blockext-ytvid/dist/preactioncms-blockext-ytvid.esm.js'
    ),
  {
    fallback: <Spinner />,
  }
)
const YtvidSettings = loadable(
  () =>
    import(
      './blockext-ytvid/dist/preactioncms-blockext-ytvid-settings.esm.js'
    ),
  {
    fallback: <Spinner />,
  }
)
Ytvid.extensionType = 'block'
Ytvid.label = 'Youtube Video'
Ytvid.Settings = YtvidSettings
const blockExtensions = { Ytvid }
// ...
```

### rebuild CMS client

```bash
cd /path/to/preactioncms
yarn build
```
