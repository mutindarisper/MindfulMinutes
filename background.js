


chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create( {
    type: "basic",
    iconUrl: 'girl.jpeg',
    title: "Mindful Minutes!",
    message: "Keep slaying, but remember to take breaks."
    // silent: false

  },
  () => {
    
  }
  )
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request)
  if (request.time)
  createAlarm()

  // sendResponse( () => {
  //   return false
  // })

})

function createAlarm() {
  chrome.alarms.create(
    "take_break", {
      delayInMinutes:30,
      periodInMinutes:30
    }
  )
}