export const requiredFields = (value) => {
  if (value) {
    return undefined;
  }
  return "message is required";
};

export const maxLength3000 = (value) => {
  if (value && value.length > 300) {
    return "idi v pizdu";
  }
  return undefined;
};

export const maxLengthThunkCreator = (length) => (value) => {
  if (value && value.length > length) {
    return `max length is ${length}, u dibil`;
  }
  return undefined;
};
