# NoRewatchVideos YT 🎬

A browser extension that automatically hides YouTube videos you've already watched based on their progress bar.

## Features ✨

- **Smart Video Filtering**: Automatically hides videos based on watch progress percentage
- **Customizable Threshold**: Set your own minimum progress percentage (0-100%)
- **Real-time Updates**: Dynamically hides videos as you browse YouTube
- **Easy Toggle**: Quickly enable/disable the extension with a single click
- **Works Everywhere**: Filters videos in the home feed, search results, subscriptions, and sidebar recommendations

## Installation 📦

### Firefox
1. Download the latest release or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" → "Load Temporary Add-on"
4. Select the `manifest.json` file from the extension folder

### Chrome/Edge
1. Download the latest release or clone this repository
2. Open Chrome/Edge and navigate to `chrome://extensions/` or `edge://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the extension folder

## Usage 🚀

1. **Click the extension icon** in your browser toolbar to open the settings popup
2. **Toggle the extension** on/off using the switch
3. **Set your progress threshold**: Enter a percentage (0-100%) to define when videos should be hidden
   - `0%`: Hide all videos with any watch progress
   - `50%`: Hide videos watched halfway or more
   - `100%`: Hide only fully watched videos
4. **Browse YouTube** and watched videos will be automatically filtered based on your settings

## How It Works 🔧

The extension monitors YouTube's progress bars on video thumbnails and compares them against your configured threshold. When a video's watch progress meets or exceeds your threshold, it's automatically hidden from view.

### Supported YouTube Views
- Home feed
- Search results
- Subscriptions page
- Channel videos
- Sidebar recommendations (while watching videos)
- Grid and list layouts

## Settings ⚙️

- **Enable extension**: Toggle the extension on/off
- **Progress threshold**: Set the minimum watch percentage to hide videos (0-100%)

All settings are saved automatically and persist across browser sessions.

## Project Structure 📁

```
NoRewatchVideos/
├── manifest.json         # Extension configuration
├── background.js         # Background script
├── content.js            # Main content script for YouTube
├── popup.html            # Settings popup UI
├── popup.js              # Settings popup logic
├── icons/                # Extension icons
│   └── icon-48.jpg
└── README.md             # This file
```

## Technical Details 💻

- **Manifest Version**: 2
- **Permissions**: 
  - `storage` - Save user preferences
  - `*://*.youtube.com/*` - Access YouTube pages
- **Browser Support**: Firefox, Chrome, Edge, and other Chromium-based browsers

## Privacy 🔒

This extension:
- ✅ Works entirely locally in your browser
- ✅ Does NOT collect any data
- ✅ Does NOT track your viewing history
- ✅ Does NOT send data to external servers
- ✅ Only reads YouTube's existing progress bars

## Contributing 🤝

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License 📄

This project is open source and available under the MIT License.

## Support 💬

If you encounter any issues or have questions:
1. Check if YouTube has updated their layout (the extension may need updates)
2. Try disabling and re-enabling the extension
3. Clear your browser cache and reload YouTube
4. Report the issue with details about your browser and YouTube layout

## Changelog 📝

### Version 2.2
- Improved sidebar video detection
- Enhanced progress bar detection
- Better performance optimizations
- Added support for new YouTube layouts

### Version 2.0
- Customizable progress threshold
- Improved UI/settings panel
- Better video container detection
- Performance improvements

---

Made with ❤️ for a cleaner YouTube experience
