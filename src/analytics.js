function createAnalytics() {
    let counter = 0;
    let destroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    console.log('test');

    return{
        destroy() {
            document.removeEventListener('click', listener)
            destroyed=true
        },

        getClick() {
            if(destroyed){
                return `Analytics destroyed dedebolasi, click = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()