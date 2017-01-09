
'use strict'

var Account = require('../app/account.js').Account


describe("tests for Account transactions", function(){

	it("The account  should be a type of `object`, and an instance of the `Car` class", function() {
      const a = new Account('a', 100);
      expect(typeof a).toEqual(typeof {});
      expect(a instanceof Account).toBeTruthy();
    });


    describe("Account Class: that returns the amount of deposit", function() {
	    it("The class should return a balance of 100 for a deposit of 100", function() {
	      var a = new Account('a', 100);
	      expect(a.balance).toEqual(100);
	    });

	    it("The class should return a balance of 200 for a deposit of 200", function() {
	      var a = new Account('a', 200);
	      expect(a.balance).toEqual(200);
	    });
	});

})