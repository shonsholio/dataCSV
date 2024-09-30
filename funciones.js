class SumarArray {
  static sumElements(array) {
    return array.reduce((acc,val) => acc + val, 0)
  }
}
module.exports = SumarArray

