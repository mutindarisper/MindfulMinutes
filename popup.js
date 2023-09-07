const element = document.getElementById("btn")
element.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "1"}, function(response) {
        // console.log(response )
    })
})