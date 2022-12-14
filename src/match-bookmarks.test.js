const matchBookmarks = require('./match-bookmarks');

const flattenedBookmarks = [
  {
    prefix: '/something',
    title: 'nothing',
    url: 'http://no.com',
  },
  {
    prefix: '/something',
    title: 'hello world',
    url: 'http://yes.com',
  },
  {
    prefix: '/hello',
    title: 'cooking recipes',
    url: 'http://yes.com',
  },
  {
    prefix: '/hi',
    title: 'mom',
    url: 'http://no.com',
  },
  {
    prefix: '/folder',
    title: 'boom something in the way',
    url: 'http://no.com',
  },
  {
    prefix: '/folder',
    title: 'boom something - another',
    url: 'http://no.com',
  },
];

describe('Match Bookmarks', () => {
  it('should find matching bookmarks by title or folder', () => {
    const text = 'hello';
    const res = matchBookmarks(flattenedBookmarks, text);
    expect(res).toEqual([
      {
        content: flattenedBookmarks[1].url,
        description: `${flattenedBookmarks[1].prefix} ${flattenedBookmarks[1].title}`,
        deletable: false,
      },
      {
        content: flattenedBookmarks[2].url,
        description: `${flattenedBookmarks[2].prefix} ${flattenedBookmarks[2].title}`,
        deletable: false,
      },
    ]);
  });

  it('should find matching bookmarks by title and folder', () => {
    const text = 'folder boom';
    const res = matchBookmarks(flattenedBookmarks, text);
    expect(res).toEqual([
      {
        content: flattenedBookmarks[4].url,
        description: `${flattenedBookmarks[4].prefix} ${flattenedBookmarks[4].title}`,
        deletable: false,
      },
      {
        content: flattenedBookmarks[5].url,
        description: `${flattenedBookmarks[5].prefix} ${flattenedBookmarks[5].title}`,
        deletable: false,
      },
    ]);
  });

  it('should sort bookmarks by most matches', () => {
    const text = 'folder boom another';
    const res = matchBookmarks(flattenedBookmarks, text);
    expect(res).toEqual([
      {
        content: flattenedBookmarks[5].url,
        description: `${flattenedBookmarks[5].prefix} ${flattenedBookmarks[5].title}`,
        deletable: false,
      },
      {
        content: flattenedBookmarks[4].url,
        description: `${flattenedBookmarks[4].prefix} ${flattenedBookmarks[4].title}`,
        deletable: false,
      },
    ]);
  });
});
