require('./node');
var Tree = require('heimdalljs').constructor.Tree;

module.exports = function toTree(data) {
  let tree = Tree.fromJSON(data);
  tree.construct();

  return tree.root;
};
