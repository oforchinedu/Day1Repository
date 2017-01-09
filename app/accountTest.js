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

	    it("The class should return a balance of 300 for a deposit of 200", function() {
	      var a = new Account('a', 300);
	      expect(a.balance).toEqual(300);
	    });

	    it("The class should return a balance of 500 for a deposit of 500", function() {
	      var a = new Account('a', 500);
	      expect(a.balance).toEqual(500);
	    });

	    it("The class should return a balance of 3000 for a deposit of 500", function() {
	      var a = new Account('a', 3000);
	      expect(a.balance).toEqual(3000);
	    });

	    it("The class should return a balance of 5000 for a deposit of 500", function() {
	      var a = new Account('a', 5000);
	      expect(a.balance).toEqual(5000);
	    });

	    it("The class should return a balance of 200 for a deposit of 200", function() {
	      var a = new Account('a', 0);
	      expect(a._isPositive(-1)).toEqual(false);
	    });

	    it("The class should return fasle for a negative value  of deposit", function() {
	      var a = new Account('a', 0);
	      expect(a._isPositive(-1000)).toEqual(false);
	    });

	    it("The class should return fasle for a negative value  of deposit", function() {
	      var a = new Account('a', 0);
	      expect(a._isPositive(-20)).toEqual(false);
	    });
	});



})