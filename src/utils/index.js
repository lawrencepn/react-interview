/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
export function countByKey (arr, key) {
    var filterArray = {};
    var resultArray = [];

    for (var i = arr.length - 1; i > -1; i--) {
        filterArray[arr[i][key]] = (filterArray[arr[i][key]] || 0) + 1;
    }
    Object.keys(filterArray).forEach((value) => {
        resultArray.push({brand:value, count:filterArray[value]})
    })

    let sortedResult = resultArray.sort(function (a, b) {
        return b.count - a.count;
    })
    return (sortedResult)
}