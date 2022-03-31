export const acronym = (name: string) => name
  .split(/\s/)
  .slice(0, 2)
  .reduce((accumulator, word) => accumulator + word.charAt(0), '')
