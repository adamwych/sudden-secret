/**
 * This file is part of the Sudden Secret web application.
 * Full license text can be found in LICENSE file in the root directory.
 */
const ruleMapping = {
    'required': (input, params) => {
        return input !== ''
    },

    'maxLength': (input, params) => {
        return input && input.length < parseInt(params[0])
    }
}

/**
 * Checks whether specified input follows specified rules.
 * Example usage:
 *   validate('', 'required') => false
 *   validate('abc', 'required|maxLength:3') => true
 *   validate('abc', 'required|maxLength:1') => false
 *
 * @param {String} input
 * @param {Array} conds
 *
 * @return {Boolean}
 */
export default function validate(input, rules) {
    let success = true
    rules = rules.split('|')

    // Go through each rule, and make sure that the input
    // satisfies its conditions.
    for (let ruleSpec of rules) {
        let [ruleName, ...ruleParams] = ruleSpec.split(':')

        let rule = ruleMapping[ruleName]
        if (rule && rule(input, ruleParams) === false) {
            success = false
            break
        }
    }

    return success
}
