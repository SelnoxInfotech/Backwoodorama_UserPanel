
function FirstLetterCaps(str){
    const text = str.toLowerCase()
     .split(' ')
     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
     .join(' ');
     return text


 }

export {FirstLetterCaps}
