//to use chai's should
const should = require('chai').should( );
const fizzBuzzer = require('../fizzBuzzer');

// test the normal case
describe('fizzBuzzer', ( ) =>{
	it('should return "fizz-buzz" for multiples of 15', ( ) => {
		[15, 30, 45, 60].forEach((input) => {
			fizzBuzzer(input).should.equal('fizz-buzz');
		});
	});
	it('should return "buzz" for multiples of 5', ( ) => {
	[5, 10, 20, 25].forEach((input) => {
		fizzBuzzer(input).should.equal('buzz');
		});
	});
	it('should return "fizz" for multiples of 3', ( ) => {
		[3, 6, 9, 12].forEach((input) => {
			fizzBuzzer(input).should.equal('fizz');
		});
	});
});
// if input is NOT a multiple of 15, 5, or 3 
it('should return inputed number', ( ) => {
	[1, 2, 7, 13].forEach((input) => {
		fizzBuzzer(input).should.equal(input);
	});
});
// if input is NOT a number - display error mesage! 
it('should produce error if input is not a number', ( ) => {
	const badInputs = [true, false, 'sheep', [1, 2, 4], function ( ) { }, ( ) => { }];
	badInputs.forEach((input) => {
		(( ) => {
		fizzBuzzer(input) }).should.throw(Error);
	});
});
