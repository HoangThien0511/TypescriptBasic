function handleException (errorMessage:string):never {
    throw Error(errorMessage)

}

handleException("just a test error")