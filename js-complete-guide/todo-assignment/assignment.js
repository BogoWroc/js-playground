const addBtn = document.getElementById("add-btn");
const taskIn = document.getElementById("task-in");
const taskList = document.getElementById("task-list");

class Message {
    constructor(message) {
        this._id = Math.random();
        this._message = message;
    }

    get value() {
        return this._message;
    }

    get id() {
        return this._id;
    }

    toString(){
        return `[Message] id=${this._id}, message=${this._message}`;
    }
}

class Storage {
    static messages = [];

    static store(message) {
        console.log(`Message to store ${message}`);
        this.messages.push(message);
    }

    static remove(message) {
        console.log(`Message to remove ${message}`);
        this.messages = this.messages.filter(m => m.id !== message.id);
    }
}

const addHandler = () => {
    const message = taskIn.value;
    if (message.trim() !== '') {
        taskIn.value = '';
        Storage.store(new Message(message));
        renderTasks();
        taskIn.focus();
    }
};

const removeHandler = (message) => {
    Storage.remove(message);
    renderTasks();
};

const renderTasks = () => {
    taskList.innerHTML = '';
    for (const message of Storage.messages) {
        const el = document.createElement('li');
        el.setAttribute('id', message.id);
        el.innerText = message.value;
        el.addEventListener('click',removeHandler.bind(null, message));
        taskList.append(el);
    }
};

taskIn.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addBtn.click();
    }
});
addBtn.addEventListener('click', addHandler);
