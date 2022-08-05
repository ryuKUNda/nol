module.exports = {
  entry: {
    map: './dist/map',
    radar: './dist/radar',
    sense: './dist/sense',
    norecoil: './dist/norecoil'
  },
  output: {
    filename: '[name].min.js',
    path: `${__dirname}/docs`
  }
};
