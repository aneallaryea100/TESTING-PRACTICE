const stringLength = (words) => {
    let length = words.length;
    if(length > 0 && length < 10){
        return length;
    }
}

module.exports = stringLength;