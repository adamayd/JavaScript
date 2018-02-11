module.exports = function makeImportant(str, rptNum = str.length) {
  return str += "!".repeat(rptNum);
}
