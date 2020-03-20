var socket = io.connect("http://localhost:4000")

var handle = document.querySelector("#handle")
var message = document.querySelector("#message")
var output = document.querySelector("#output")
var btn = document.querySelector("#send")
var feedback = document.querySelector("#feedback")

btn.addEventListener("click", () => {
    console.log("pomegranate")
    socket.emit("chat", {
        handle: handle.value,
        message: message.value
    })
})

btn.addEventListener("keypress", () => {
    console.log(
        "pummelo",
        socket.emit("typing", {
            handle: handle.value
        })
    )
})

socket.on("chat", data => {
    console.log("prunes", data.handle.conte)
    output.innerHTML +=
        "<p><strong>" + data.handle + "</strong>:" + data.message + "</p>"
})

socket.on("typing", data => {
    console.log("raspberries")
    handle.innerHTML += "<p><em>" + data.handle + "is typing ..." + "</em></p>"
})
