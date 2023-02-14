module.exports = function check(str, bracketsConfig) {
  let stack = [];
  loop1:
  for (let i = 0; i < str.length; i++) {
    loop2:
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1]) {
        if (stack[stack.length - 1] === bracketsConfig[j][0]) {
          stack.pop();
          continue loop1;
        } else {
          stack.push(str[i]);
        }
      } else if (str[i] === bracketsConfig[j][0]) {
        stack.push(str[i]);
        continue loop1;
      }
    }
  }
  return (stack.length == 0)
}
