console.log("before error")


try {
    const data = JSON.parse("'dwerfr'")
    data.forEach(element => {
        document.createElement("div")
    });
} catch (e) {
    const { stack, name, message } = e;
    console.log({ stack, name, message })
    console.log("Invalid json")
    alert("Some error occurred")
}





console.log("after error")
