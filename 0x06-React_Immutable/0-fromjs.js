const { fromJS, Map } = require('immutable');

function getImmutableObject(object) {
    return fromJS(object);
}

module.exports = {
    getImmutableObject
};