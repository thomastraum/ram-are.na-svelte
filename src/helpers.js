export const getQueryString = function(queryObj) {
  return Object.keys(queryObj).map(key => key + '=' + queryObj[key]).join('&');
}
