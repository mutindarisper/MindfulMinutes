// Sending a message from the content script to the background script
chrome.runtime.sendMessage({ type: 'contentScriptMessage', data: 'Hello from content script!' });

// Listening for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'backgroundScriptMessage') {
    console.log('Received a message from the background script:', message.data);
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'breakReminder') {
      // Handle the break reminder in your React app
      // You can display a notification or take any other action
      console.log('Time for a break!');
    }
  });
