let store = {
  _state: {
    messagesPage: {
      dialogs: [
        { id: 0, name: "Alexey" },
        { id: 1, name: "Dimich" },
        { id: 2, name: "Roma" },
      ],
      messages: [
        { id: 0, message: "Hello Dima! :)" },
        { id: 1, message: "Hello Roma! :D" },
      ],
    },
    profilePage: {
      posts: [
        { id: 0, title: "Me", message: "Hello guys, i'm Alex!" },
        { id: 1, title: "Me", message: "Hi Alex, how are you?" },
        { id: 2, title: "Me", message: "Yo, Guys!" },
      ],
      newMessage: "Hello",
    },
  },
  dispatch(action) {
    if(action.type === "ADD-POST") {
      const post = {
        id: 3,
        message: this._state.profilePage.newMessage,
        title: "Me",
      };
      this._state.profilePage.posts.push(post);
      this._state.profilePage.newMessage = "";
      this._render(this._state);
    } else if(action.type === "UPDATE-TEXT") {
      this._state.profilePage.newMessage = action.newText;
      this._render(this._state);
    }
  },
  _render() {

  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._render = observer;
  },
};

export default store;
