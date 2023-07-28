export default function createIteratorObject(report) {
  const myObject = {
    ...report.allEmployees,
    * [Symbol.iterator]() {
      const keys = Object.keys(this);
      for (const key of keys) {
        const values = this[key];
        for (const value of values) {
          yield value;
        }
      }
    },
  };

  return myObject;
}
