
const tabs = await chrome.tabs.query({
  url: [
    "*://developer.chrome.com/*"
  ]
})
const button = document.querySelector("#btn");
// 将相同域名下的tabs选项卡进行分组
button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "GITHUB" });
})
