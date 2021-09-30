export const upperCaseString = str => str.trim().toUpperCase()

export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const isObjectValueEmpty = obj => Object.values(obj).some(x => x === '');

