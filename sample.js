// TODO rename to sixpack - the abtester
// TODO look at other open source library - ex github/githubio/landingpage/documentation?
// BRAD would: look at how other libs are packaged and use what you like.
// Ask Greg.
// Currently two files and a readme.
// tldr name/doc/presentation/what's visible/github repo...?
// brush up on the math and whys.
// add a zscore to the result object (and margin or error)

var Sixpack = require('./Sixpack.js');
var mySixpack = new Sixpack();

// addVersion
// Input: { 'id': { name: 'X', eventCount: Y, totalCount: Z}}.
// Output: success or error message?

// TODO partial and total
// event_type? might be more broad.
// more general specific term

// TODO standard data format
// standard data format for a/b testing? what might people want to use with a file.

// TODO identify audience - to know what they need and who to post to (g+? twitter?)

mySixpack.addVersion('G', { name: 'Gregarious Gorillas', eventCount: 1500, totalCount: 3000 });
mySixpack.addVersion('H', { name: 'Hungry Hippopotami', eventCount: 2500, totalCount: 3000 });

result = mySixpack.getResult();

console.log(result);
// console.log('thing!!!!:', testResult);


// // getVersion
// // Input: version ID
// // Output: version object
// var version = test.getVersion('A');
// console.log('version:', version);

// // getRate
// // Input: version ID
// // Output: conversion rate (decimal)
// var rate = test.getRate('A');
// console.log('_Original_ rate:', rate);

// // getStandardError
// // Input: version ID
// // Output: standard error (decimal)
// var standardError = test.getStandardError('A');
// console.log('_Original_ standard error:', standardError);

// // getRequiredSampleSize
// // Input: version ID
// // Output: required sample size (integer)
// var requiredSampleSize = test.getRequiredSampleSize('A');
// console.log('_Original_ required sample size:', requiredSampleSize);

// // hasEnoughData
// // Input: version ID
// // Output: boolean
// var hasEnoughData = test.hasEnoughData('A');
// console.log('_Original_ we have enough data:', hasEnoughData);

// // getConfidenceInterval
// // Input: version ID
// // Output: confidence interval object
// var confidenceInterval = test.getConfidenceInterval('A');
// console.log('_Original_ confidence interval:', confidenceInterval);

// // getSummary
// // Input: none
// // Output: result message - winner, no winner yet, no winner ever.
// var result = test.getResult();
// console.log('result is:', result);


// // printAB tests or what versions am i testing?

// // editAB tests?