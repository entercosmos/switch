module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Switch',
      externals: {
        react: 'React'
      }
    }
  }
}
