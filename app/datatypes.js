module.exports = {
  dataTypes: function(val){
    if(typeof val === 'string'){
      return val.length;
    }
    if(val === null || val === undefined){
      return 'no value'
    }
    if(val === true || val === false){
      return val;
    }
    if(typeof val === 'number'){
      if(val < 100){
        return 'less than 100';
      }
      else if(val > 100){
        return 'more than 100';
      }
      else if(val === 100){
        return 'equal to 100';
      }
    }
    if(Array.isArray(val)){
      return val[2];
    }
    if(typeof val === 'function'){
      return val(true);
    }
  }
}