export function formatDateToCustomFormat(date) {
  return date instanceof Date ? date.toLocaleDateString() : ''
}

export function convertToCamelCaseWithSpaces(inputStr) {
  // Check if the string is in camelCase
  if (/^[a-z][a-zA-Z0-9]*$/.test(inputStr)) {
    // Separate the camelCase string with spaces
    const resultStr = inputStr.replace(/([a-z])([A-Z])/g, '$1 $2')
    return resultStr
  } else {
    return 'Not a valid camelCase string'
  }
}
