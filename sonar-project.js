const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.sources': '.',
    // 'sonar.inclusions':
    // 'controllers/**,libs/**,models/**,middleware/**', // Entry point of your code
    'sonar.inclusions': 'controllers/**,actions/**', // Entry point of your code
    'sonar.tests': '__TEST__',
    'sonar.test.inclusions': './__TEST__/controllers/**',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  },
}, () => {});
