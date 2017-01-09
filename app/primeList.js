module.exports = {
  primeList: function(num){
    var prime = [];
    if(num < 2){
      return false
    }
    for(var j = 2; j <= num; j++){
      if(isPrime(j)){
        prime.push(j)
      }
    }
    return prime
  }
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}