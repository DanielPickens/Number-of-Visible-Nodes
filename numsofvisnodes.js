function visibleNodes(root) {
    const depth = 0;

      return findDepth(root, depth);


function findDepth(root, depth = 0) {
    if (root === null) return 0;
    depth++;
  const left = findDepth(root.left);

    depth++;

  const right = findDepth(root.right);

    return Math.max(left, right) + 1;
  }
}
