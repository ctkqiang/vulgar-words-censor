import {
    censor
} from '../lib/app.js';


let bad_dummytext = 'This mother fucker is teribble !';
let good_dummytext = 'Let\'s go to library';

console.log({
    bad: censor(bad_dummytext),
    good: censor(good_dummytext),
});

/**
 * output 
 * { 
 *      bad: '--CENSORED--', 
 *      good: "Let's go to library" 
 * }
 */