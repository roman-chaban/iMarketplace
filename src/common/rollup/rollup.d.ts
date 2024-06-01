import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      modules: true,
      extensions: ['.css', '.scss'],
      use: [
        ['sass', { includePaths: ['./src/styles'] }]
      ]
    })
  ]
};
