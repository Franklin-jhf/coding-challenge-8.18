module.exports = {
  // function that recursively returns all permutations of a given string
  permuteStr: str => {
    // base case to stop recursion at
    if (str.length < 2) return str;

    // all permutations to print
    let permutations = [];

    for (let i=0; i < str.length; i++) {
      const char = str[i];

      // make sure no duplicate characters are used
      if (str.indexOf(char) != i) { continue; }         

      var remainingStr = str.slice(0,i) + str.slice(i+1,str .length); //Note: you can concat Strings via '+' in JS

      //subpermutations
      for (var i of permuteStr(remainingStr))
        permutations.push(char + i)
    }

    permutations.map( val => console.log(val));
    return;
  }
}