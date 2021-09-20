async function start() {
    return await Promise.resolve('async is working')
}

const a = ''

start().then(console.log('async'))