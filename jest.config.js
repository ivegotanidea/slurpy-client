module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
    testPathIgnorePatterns: ['/build/', '/node_modules/'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testEnvironment: 'node',
    verbose: true,
    maxConcurrency: 1,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
}
