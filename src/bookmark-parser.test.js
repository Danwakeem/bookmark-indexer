const allBookmarks = require('./mocks/allBookmarks.json');
const parseAllBookmarks = require('../src/bookmark-parser');

describe('Bookmark Parser', () => {
  it('should successfully flatten bookmarks structure', () => {
    const res = parseAllBookmarks(allBookmarks);
    const expectedFlattenedBookmarks = [
      {
        dateAdded: 1542595180596,
        id: '60',
        index: 0,
        parentId: '1',
        title: 'PiPify',
        url: 'https://something.com',
        prefix: '/Bookmarks Bar',
      },
      {
        dateAdded: 1422178788910,
        id: '62',
        index: 0,
        parentId: '61',
        title: 'folder 1 item',
        url: 'https://whatever.com',
        prefix: '/Bookmarks Bar/folder 1',
      },
      {
        dateAdded: 1422178788910,
        id: '64',
        index: 0,
        parentId: '63',
        title: 'deep item 1',
        url: 'https://whatever-deep.com',
        prefix: '/Bookmarks Bar/folder 1/folder 1 subfolder 1',
      },
      {
        dateAdded: 1542595180596,
        id: '65',
        index: 0,
        parentId: '3',
        title: 'Mobile thing',
        url: 'https://mobile.com',
        prefix: '/Mobile Bookmarks',
      },
    ];
    expect(res).toEqual(expectedFlattenedBookmarks);
  });
});
