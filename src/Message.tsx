function Message() {
    const test = 'another test'
    if (test)
        return <h1>Testing, {test}</h1>
    return <h1>Nothing</h1>
}

export default Message;