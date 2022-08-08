# Bookmark Indexer
This chrome extension is supposed to make searching through your bookmarks both easy and natural. Lots of other bookmark search extensions out there want to implement some strange user interface or make you go somewhere else in the chrome settings to search your bookmarks. The idea behind this app is to put bookmark search right where you need it, in the omnibox.

## 🧑‍💻 Development
To try out this plugin by building the code from source follow the steps below.

Clone this repo locally and run the following command

```shell
yarn install # Install dependencies
yarn build # Compile the app for publishing
```

Once you have built the app you can then load it into chrome by following the instructions on the [extension developer site](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) or the instructions below.

1. Open the Extension Management page by navigating to `chrome://extensions`.
  - Alternatively, open this page by clicking on the Extensions menu button and selecting **Manage Extensions** at the bottom of the menu.
  - Alternatively, open this page by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**
2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
3. Click the **Load unpacked** button and select the extension directory.

![load unpacked extension](/assets/loadExtension.png)

## 🛠 How this extension works 
When the extension is loaded in chrome you can activate bookmark search by entering `s` then `tab` in the url bar (omnibox).

When you start typing the extension will search bookmark folder names and bookmark title to find what you are looking for. The results will be displayed as auto complete results under the url bar in the following format.

```shell
[bookmark folder path] [bookmark title]
```

![search example](/assets/search-example.png)

The results are sorted by most relevant to your search term.

## 💡 Ideas on how to get the most out of this extension

1. You can get results to a specific folder to appear at the top if you simply type in the folder name
2. You could optimize your bookmark names for search by prefixing your bookmark names with a folder name. For example, if I wanted to have a set of bookmarks grouped by my name `dan` I could name my bookmarks `dan#bookmark1`, `dan#bookmark2`, etc. This way when I search for the list of `dan` bookmarks I could type `dan#` in the url bar and I would see the bookmarks with that name. Think of this like tagging your bookmarks 😎.
