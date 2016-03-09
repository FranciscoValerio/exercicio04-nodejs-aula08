module.exports = {
	type: String
	, required: true
	, set: require( './../quarks/quark-toLower' )
	, get: require( './../quarks/quark-initialUpper' )
};
