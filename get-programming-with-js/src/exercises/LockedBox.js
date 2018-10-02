export const box = {
    locked: true,
    unlock: function () {
        this.locked = false;
    },
    lock: function () {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked)
            throw new Error("Locked!");
        return this._content;
    }
};

export function withBoxUnlocked(data) {
    try{
        box.unlock();
        box.content.push(data);
        return box.content;
    } finally {
        box.lock();
    }
}
