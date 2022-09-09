import _ from "../src/lodash.js";

describe(".map", () => {
  describe("when wrong arguments are passed", () => {
    test("returns empty array when no arguments are passed", () => {
      expect(_.map()).toEqual([]);
    });
    test("returns empty array when null is passed", () => {
      expect(_.map(null)).toEqual([]);
    });
    test("returns empty array when undefined is passed", () => {
      expect(_.map(undefined)).toEqual([]);
    });
    test("returns empty array when non iterable argument is passed", () => {
      expect(_.map(true)).toEqual([]);
      expect(_.map(false)).toEqual([]);
    });
  });

  describe("when array is passed", () => {
    const sampleArray = [1, 2, 3, 4, 5];
    test("accepts array as argument", () => {
      expect(_.map(sampleArray, (e) => e + 1)).toEqual([2, 3, 4, 5, 6]);
    });

    test("calls callback with element as 1st argument", () => {
      expect(_.map(sampleArray, (e) => e)).toEqual(sampleArray);
    });

    test("calls callback with index as 2nd argument", () => {
      expect(_.map(sampleArray, (_e, i) => i)).toEqual([0, 1, 2, 3, 4]);
    });

    test("returns same array when 2nd argument is not given", () => {
      expect(_.map(sampleArray)).toEqual(sampleArray);
    });

    describe("when second argument is string", () => {
      test("returns property values when array of objects is passed", () => {
        const data = [
          { name: "Ram", age: 25 },
          { name: "Raj", age: 23 },
          { name: "Sita", age: 22 },
        ];
        expect(_.map(data, "name")).toEqual(["Ram", "Raj", "Sita"]);
        expect(_.map(data, "age")).toEqual([25, 23, 22]);
      });

      test("returns function result for each element in array", () => {
        const data = ["Ram", "Raj", "Sita"];
        expect(_.map(data, "length")).toEqual([3, 3, 4]);
      });

      test("returns function result for each element in object", () => {
        const data = { "1st": "Ram", "2nd": "Raj", "3rd": "Sita" };
        expect(_.map(data, "length").sort()).toEqual([3, 3, 4].sort());
      });
    });
  });
  describe("when object is passed", () => {
    const sampleObject = { a: 1, b: 2, c: 3 };

    test("accepts object as argument", () => {
      expect(_.map(sampleObject, (value) => value + 1).sort()).toEqual(
        [2, 3, 4].sort()
      );
    });

    test("calls callback with element as 1st argument", () => {
      expect(_.map(sampleObject, (value) => value).sort()).toEqual(
        [1, 2, 3].sort()
      );
    });

    test("calls callback with key as 2nd argument", () => {
      expect(_.map(sampleObject, (_value, key) => key).sort()).toEqual(
        ["a", "b", "c"].sort()
      );
    });

    test("returns same object when 2nd argument is not given", () => {
      expect(_.map(sampleObject)).toEqual(sampleObject);
    });
  });
});