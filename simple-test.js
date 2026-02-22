const { plus100, plus100Async } = require('./index')

async function test() {
    console.assert(plus100(0) === 100, 'Simple test failed')

    console.assert(await plus100Async(0), 'Simple test failed')

    console.info('Simple test passed')
}

test()