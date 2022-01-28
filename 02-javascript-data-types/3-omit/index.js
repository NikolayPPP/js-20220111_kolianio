/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const futureObj = [];
  const originKeys = Object.keys(obj);
  originKeys.forEach(prop => {
    if (!(fields.includes(prop))) {
      futureObj.push([prop, obj[prop]]);
    }
  });
  return Object.fromEntries(futureObj);
};
