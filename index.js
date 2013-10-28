
module.exports = ['inactive', 'active', 'clean', 'complete', 'hard']
module.exports.titles = module.exports.map(function (name) {
  return {
    name: name,
    title: name[0].toUpperCase() + name.slice(1)
  }
})
