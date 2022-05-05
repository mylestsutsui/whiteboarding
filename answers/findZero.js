const findZero = (arr, startIndex) => {
  const visited = {};

  const follower = (arr, index) => {
    if(arr[index] === 0) return true;
    if(index < 0 || index > arr.length - 1) return false;
    if(visited[index]) return false;
    else visited[index] = true;

    return follower(arr, index + arr[index]) || follower(arr, index - arr[index]);
  }
  return follower(arr, startIndex);
}

module.exports = findZero;