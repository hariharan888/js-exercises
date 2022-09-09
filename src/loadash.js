const isPlainObj = (value) =>
  !!value && Object.getPrototypeOf(value) === Object.prototype;

const isIteratable = (data) => Array.isArray(data) || isPlainObj(data);

const _ = {
  map: (data, cb) => {
    if (!isIteratable(data)) {
      return [];
    } else if (cb === undefined) {
      return data;
    }
    const ans = [];

    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        if (typeof cb === "string") {
          ans.push(data[i][cb]);
        } else {
          ans.push(cb(data[i], i));
        }
      }
    } else if (isPlainObj(data)) {
      for (const k in data) {
        if (typeof cb === "string") {
          ans.push(data[k][cb]);
        } else {
          ans.push(cb(data[k], k));
        }
      }
    }
    return ans;
  },
};
export default _;