const utils = {
  isNumberInvalid: function (numToValidate) {
    return (typeof numToValidate !== 'number' && isNaN(parseInt(numToValidate)))
  },

  converMilliSecondsToMinutes: function (milliSeconds) {
    let strToReturn = '';

    if (utils.isNumberInvalid(milliSeconds)) {
      return strToReturn;
    }

    if (milliSeconds < 1000) {
      return (milliSeconds/1000).toFixed(1) + ' secs'
    }
    
    let minutes = Math.floor(milliSeconds / 60000)
    let seconds = Math.floor((milliSeconds/1000) % 60);

    if (minutes > 0) {
      strToReturn = strToReturn + minutes;
      let appender = minutes > 1 ? 'minutes' : 'minute'
      strToReturn = strToReturn + ` ${appender}`;
    }
    strToReturn = strToReturn + ` ${seconds} secs`;
    return strToReturn;
  },

  convertMbToGb: function (mBytes) {
    // this conversion is usong 1000 as base instead of of 1024
    let strToReturn = '';

    if (utils.isNumberInvalid(mBytes)) {
      return strToReturn;
    }

    let gbs = mBytes / 1000;
    let mbs = mBytes % 1000;
    if (gbs >= 1) {
      strToReturn = strToReturn + gbs.toFixed(1);
      let appender = gbs > 1 ? 'GBs' : 'GB';
      strToReturn = strToReturn + ` ${appender}`;
      return strToReturn
    }

    strToReturn = strToReturn + ` ${mbs}`;
    let appender = mbs > 1 ? 'MBs' : 'MB';
    strToReturn = strToReturn + ` ${appender}`;
    return strToReturn;
  },

  calculatePercent: function(fraction, total) {
    if (utils.isNumberInvalid(fraction) || utils.isNumberInvalid(total)) {
      return null;
    }
    return (fraction * 100) / total
  }

}

export default utils;