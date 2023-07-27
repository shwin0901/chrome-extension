chrome.runtime.onInstalled.addListener(() => { //此方法允许扩展设置初始状态或完成安装时的某些任务
  chrome.action.setBadgeText({ // 设置扩展工具栏图标文字
    text: "OFF",
  });
});

// manifest.json文件中设置action -> default_popup 属性会让chrome.action.onClicked.addListener方法无效
// chrome.action.onClicked.addListener(async (tab) => {
//   const cruText = await chrome.action.getBadgeText({ tabId: tab.id }); //获取当前扩展图标文本
//   console.log("tab...", tab)
//   await chrome.action.setBadgeText({
//     tabId: tab.id,
//     text: cruText === "ON" ? "OFF" : "ON",
//   });
// });

chrome.action.onClicked.addListener(() => {
  const options = chrome.runtime.getURL("./options/options.html");
  chrome.tabs.create({ url: options })
})