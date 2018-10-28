module.exports = function recursion(treePart, i = 0, result = []){
    if (!treePart) return 0;
    let left = treePart.left || undefined;
    let right = treePart.right || undefined;
    if (!result[i]){
      result[i] = [];
    }
    result[i].push(treePart.value);
    recursion(left, i + 1, result);
    recursion(right, i + 1, result);
    return result;
};