const parseAllBookmarks = (bookmarks, prefix = '') => {
  let newBookmarks = [];
  for (const bookmark of bookmarks) {
    // Create new bookmark
    if ('url' in bookmark) {
      newBookmarks.push({
        ...bookmark,
        prefix,
      });
    }
    if ('children' in bookmark) {
      const newPrefix = bookmark.title !== '' ? `${prefix}/${bookmark.title}` : prefix;
      const marks = parseAllBookmarks(bookmark.children, newPrefix);
      newBookmarks = [...newBookmarks, ...marks];
    }
  }
  return newBookmarks;
};

module.exports = parseAllBookmarks;
