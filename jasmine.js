var path = require('path');
var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');

var noop = function() { };

var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.configureDefaultReporter({ print: noop });

jasmine.addReporter(new SpecReporter({
    displayStacktrace: 'none',
    displayFailuresSummary: true,
    displayPendingSummary: true,
    displaySuccessfulSpec: true,
    displayFailedSpec: true,
    displayPendingSpec: true,
    displaySpecDuration: false,
    displaySuiteNumber: false,
    colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
    },
    prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
    },
    customProcessors: []
}));

jasmine.execute();