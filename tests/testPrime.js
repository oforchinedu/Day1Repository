'use strict'

var primeList = require('../app/primeList.js').primeList

describe("Prime list tests ", function(){
	describe("Case for values less than two", function(){

		it("it should return false for 1", function(){
			expect(primeList(1)).toEqual(false);
		})

		it("it should return false for 0", function(){
			expect(primeList(1)).toEqual(false);
		})

	})

})