// module.exports = class ProtoArray {
class ProtoArray {
  constructor(...args) {
    this.length = this._assignLen(args);
    this._assignVals(args);
  }
  _assignLen(args) {
    switch (args.length) {
      case undefined:
        return 0;
      case 1:
        if (ProtoArray.isProtoArray(args[0]) || Array.isArray(args[0])) {
          return 1;
        } else {
          return args[0];
        }
      default:
        return args.length;
    }
  }
  _assignVals(args) {
    if (args.length !== 1) {
      for (let index = 0; index < args.length; index++) {
        this[index] = args[index];
      }
    } else if (
      args.length === 1 &&
      (Array.isArray(args[0]) || ProtoArray.isProtoArray(args[0]))
    ) {
      this[0] = args[0];
    } else {
      for (let index = 0; index < args[0]; index++) {
        this[index] = undefined;
      }
    }
  }
  _getValues() {
    const newProto = { ...this };
    delete newProto["length"];
    return Object.values(newProto);
  }
  forEach(callbackFN) {
    // Add your code here
    // callbackFn => (element, index, array) => {...}
    // it's a for loop that's calling a callback
  }
};
