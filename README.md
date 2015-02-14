# ES6 Features Runtime

Small project which helps you to start shaping up with ECMAScript 6 using
[Traceur](https://github.com/google/traceur-compiler) compiler. What is
the best way to start learning new stuff? **Unit testing!** That's why ES6
Features Runtime is shipped with Karma and Jasmine.

The code partly comes from [Traceur's wiki]
(https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
and awesome [lukehoban/es6features](https://github.com/lukehoban/es6features)
which I recommend to watch. It's also worth looking out [ECMAScript
compatibility table](http://kangax.github.io/compat-table/es6/).
Every other piece of code which isn't mine has a source mentioned in comment
above the code.

## How to start

Run ``nmp test`` or ``karma start`` to start karma server and execute ``grunt
 watch`` to compile ES6 to ES5 and run tests on files change.
