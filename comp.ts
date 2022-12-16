const search = (s: string, search: string) => s.includes(search);
const capitalize = (s: string) => s.toUpperCase();
const toPrefix = (s: string) => s.slice(0,2);

const toPrefixCapitalize = (s: string) => capitalize(toPrefix(s));
const hasCountryCode = (s:string, cc: string) => search(toPrefixCapitalize(s), cc);
