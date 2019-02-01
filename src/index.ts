import MarkdownIt = require('markdown-it');

interface Config {
  fallbackLink: string;
}

export function brokenImagePlaceholderPlugin(config: Config) {
  return (md: MarkdownIt) => {
    const defaultRender = md.renderer.rules.image;

    md.renderer.rules.image = function(tokens, index, options, env, self) {
      const token = tokens[index];
      const onError = token.attrGet('onerror') || '';

      token.attrSet(
        'onerror',
        `this.src='${config.fallbackLink.replace(/'/g, '\\\'')}'; ${onError}`,
      );

      return defaultRender(tokens, index, options, env, self);
    };
  };
}
