# ❌ Automatically delete scrobbles on Last.fm 
## Usage

Navigate to `https://www.last.fm/user/YOUR_USERNAME/library` and find the tracks you want to delete.

Open `delete_scrobbles.js` and replace `DELETE_MATCHING` with text that is contained in the scrobbles that you want to delete. For example, if you want to delete `Radiohead` scrobbles, do the following:

```javascript
const DELETE_MATCHING = "Radiohead";
```

Then copy and past the script into your browser's JavaScript console. 

## To do

Turn this into a UserScript so you don't need to enter it via the JavaScript console.
