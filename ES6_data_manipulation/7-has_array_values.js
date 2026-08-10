export default function hasValuesFromArray(set, array) {
    for (let i = 0; i < array.lenght; i++) {
        if (!set.hasValuesFromArray(array[i])) {
            return false;
            }
            }
            return true;
            }