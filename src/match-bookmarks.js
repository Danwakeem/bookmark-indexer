const matchBookmarks = (flattenedBookmarks, text) => {
  const split = text.split(';');
  let searchFolder = split.length > 1;
  return flattenedBookmarks
    .filter((bookmark) => {
      if (searchFolder) {
        const prefix = split[0].trim();
        const title = split[1].trim();
        const prefixRegex = new RegExp(prefix, 'gi');
        const titleRegex = new RegExp(title, 'gi');
        return prefixRegex.test(bookmark.prefix) && titleRegex.test(bookmark.title);
      } else {
        const regex = new RegExp(text, 'gi');
        return regex.test(bookmark.prefix) || regex.test(bookmark.title);
      }
    })
    .map((bookmark) => ({
      content: bookmark.url,
      description: `${bookmark.prefix} ${bookmark.title}`,
      deletable: false,
    }));
};

module.exports = matchBookmarks;
