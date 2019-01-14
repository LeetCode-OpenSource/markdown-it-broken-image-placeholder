# markdown-it-broken-image-placeholder
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/LeetCode-OpenSource/markdown-it-broken-image-placeholder/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![npm version](https://img.shields.io/npm/v/markdown-it-broken-image-placeholder.svg?style=flat)](https://www.npmjs.com/package/markdown-it-broken-image-placeholder)

markdown-it plugin for replacing broken image link with fallback one.

## Usage

Using [yarn](https://yarnpkg.com/):
```bash
yarn add markdown-it-broken-image-placeholder
```

Or via [npm](https://docs.npmjs.com):
```bash
npm install markdown-it-broken-image-placeholder
```

Then, to enable the feature:

```javascript
import MarkdownIt from 'markdown-it';
import { brokenImagePlaceholderPlugin } from 'markdown-it-broken-image-placeholder';

const md = new MarkdownIt();

md.use(brokenImagePlaceholderPlugin({ fallbackLink: 'https://image.link' }));
```
