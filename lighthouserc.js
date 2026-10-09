module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'csp-xss': 'off', // We test CSP manually, LHCI might complain about strict-dynamic
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
