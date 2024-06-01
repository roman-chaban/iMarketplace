import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extensions: ['.scss'],
      use: [
        [
          'sass',
          {
            includePaths: ['./src/styles'],
          },
        ],
      ],
      extract: true,
    }),
  ],
};
