/*
* Given an array of objects, each with an `id` parameter, return an object
* in a dictionary format containing all of them, with the `id` being the
* keys in each object
*/
import { forEach } from 'lodash';

export default (objectArr) => {
  const dictionary = {};

  forEach(objectArr, (item) => {
    dictionary[item.id] = item;
  });

  return dictionary;
};
