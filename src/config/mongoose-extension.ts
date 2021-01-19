import { Types } from 'mongoose';

/**
 * Adds method for converting `ObjectId`s to primitive values.
 * Allows passing ObjectIds directly to GraphQL string fields.
 */
const convertObjectIdsToStrings = () => {
  // eslint-disable-next-line func-names
  Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
  };
};

export default convertObjectIdsToStrings;
