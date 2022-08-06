const parseAllBookmarks = require('./bookmark-parser');
const matchBookmarks = require('./match-bookmarks');

let flattenedBookmarks = [];

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  suggest(matchBookmarks(flattenedBookmarks, text));
});

chrome.omnibox.onInputEntered.addListener((text) => {
  if (/http:/.test(text) || /https:/.test(text) || /javascript:/.test(text)) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      chrome.tabs.update(tab.id, { url: text });
    });
  }
});

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
    flattenedBookmarks = parseAllBookmarks(bookmarkTreeNodes);
  });
});
