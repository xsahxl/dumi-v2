import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {},
  umd: {
    name: 'fatherDemo',
    autoprefixer: {
      // https://browsersl.ist/
      overrideBrowserslist: [
        '> 0.5%',
        'last 2 versions',
        'Firefox ESR',
        // 'not dead',
      ],
    },
  },
});
