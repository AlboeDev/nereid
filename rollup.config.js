export default {
  input: 'dist/index.js',
  output: [
    {
      format: 'cjs',
      file: 'build/nereid.js',
      indent: '\t',
    },
  ],
  watch: {
    inclue: './dist/**/*.js',
  },
};