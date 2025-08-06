export const convertBrToNewLine = (str: string):string => {
  // return str.split(/<br\s*\/?>/gi).map(line => `<p>${line}</p>`).join('');
  return str.replace(/<br\s*\/?>/gi, '\n');
};

export const convertNewLineToBr = (str: string):string => {
  return str.replace(/\n/g, '<br />');
};