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

	describe("case for negative numbers", function(){

		it("it should return false for -1", function(){
			expect(primeList(-1)).toEqual(false);
		})

		it("it should return false for -2", function(){
			expect(primeList(-2)).toEqual(false);
		})
	})

	describe("Case for the number 2", function(){

		it("it should return 2 for 2", function(){
			expect(primeList(2)).toEqual([2]);
		})
	})

	describe("Case for values more than number 2", function(){

		it("it should return [2,3,5,7] for 7", function(){
			expect(primeList(7)).toEqual([2,3,5,7]);
		})

		it("it should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for 20 ", function(){
			expect(primeList(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
		})

		it("it should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] for 30", function(){
			expect(primeList(30)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
		})

		it("it should return [2,3,5,7] for 40", function(){
			expect(primeList(40)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
		})

		it("it should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for 50", function(){
			expect(primeList(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
		})
	})

})