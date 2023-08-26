const generator = require('generate-password')

const password = generator.generate({
	length: 22,
	numbers: true
});

console.log(password)