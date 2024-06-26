/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    [
      'postcss-normalize',
      {
        allowDuplicates: false,
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    'autoprefixer',
  ],
};
