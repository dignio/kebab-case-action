const { createCases } = require('.');

test('test the createCases output', () => {
    const inputString = 'this/is-a-LONG-string we want to transform$a?b=c(d)/';

    const { kebab, camel, snake } = createCases(inputString);

    expect(kebab).toBe('this-is-a-long-string-we-want-to-transform-a-b-c-d');
    expect(camel).toBe('thisIsALongStringWeWantToTransformABCD');
    expect(snake).toBe('this_is_a_long_string_we_want_to_transform_a_b_c_d');
});
