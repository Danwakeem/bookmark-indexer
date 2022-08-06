if (!String.prototype.encodeHTML) {
  String.prototype.encodeHTML = function () {
    return this.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };
}

const matchBookmarks = (flattenedBookmarks, text) => {
  const spaceSplit = text.split(' ');
  const spaceSearch = spaceSplit.length > 1;
  return flattenedBookmarks
    .map((bookmark) => {
      const obj = {
        content: bookmark.url,
        description: `${bookmark.prefix} ${bookmark.title}`,
        deletable: false,
      };
      if (spaceSearch) {
        const matches = spaceSplit.reduce((matches, input) => {
          const regex = new RegExp(input, 'gi');
          let total = 0;
          total += regex.test(bookmark.prefix) ? 1 : 0;
          total += regex.test(bookmark.title) ? 1 : 0;
          return matches + total;
        }, 0);
        return {
          ...obj,
          matched: matches > 0,
          matches,
        };
      } else {
        const regex = new RegExp(text, 'gi');
        return {
          ...obj,
          matched: regex.test(bookmark.prefix) || regex.test(bookmark.title),
          matches: 1,
        };
      }
    })
    .filter((bookmark) => bookmark.matched)
    .sort((a, b) => b.matches - a.matches)
    .map((bookmark) => ({
      content: bookmark.content,
      description: bookmark.description.encodeHTML(),
      deletable: false,
    }));
};

module.exports = matchBookmarks;
