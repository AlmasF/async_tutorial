const showMessage = (callback) => {
    console.log(callback);
}

const firstMessage = (callback) => {
    setTimeout(() => {
        showMessage('hello')
        callback();
    }, 2000)
}

const secondMessage = () => {
    showMessage(('World!'))
}

firstMessage(secondMessage)