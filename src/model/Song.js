"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(Title, Artist) {
        this.Title = Title;
        this.Artist = Artist;
    }
    toString() {
        return this.Title + " - " + this.Artist;
    }
    toSearchString() {
        return this.Title + " " + this.Artist;
    }
}
exports.Song = Song;
//# sourceMappingURL=Song.js.map