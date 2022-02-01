const core = require('@actions/core');
const kebabCase = require('lodash.kebabcase');
const camelCase = require('lodash.camelcase');
const snakeCase = require('lodash.snakecase');

function createCases(inputString) {
    return {
        kebab: kebabCase(inputString),
        camel: camelCase(inputString),
        snake: snakeCase(inputString),
    };
}

(async function main() {
    try {
        const inputString = core.getInput('string');
        core.info('Converting string to kebab, camel, and snake case');

        const { kebab, camel, snake } = createCases(inputString);

        core.setOutput('kebab', kebab);
        core.setOutput('camel', camel);
        core.setOutput('snake', snake);
    } catch (error) {
        core.setFailed(error.message);
    }
})();

module.exports = { createCases };
