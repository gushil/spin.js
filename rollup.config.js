export default [
    {
        input: 'spin.js',
        output: {
            file: 'spin.umd.js',
            format: 'umd',
            name: 'Spin',
        },
    },
    {
        input: 'spin.js',
        output: {
            file: 'site/spin.umd.js',
            format: 'umd',
            name: 'Spin',
        },
    },
    {
        input: 'site/index.js',
        output: {
            file: 'site/bundle.js',
            format: 'iife'
        }
    }
];
