const reverses = require('./reverseString');

test('reverse string funtion ', () => {
    expect(reverses("hello")).toEqual("olleh");
})
