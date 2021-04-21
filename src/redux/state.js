import { render } from './../render'

let state = {
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
    newMessage: "Hello"
  },
};

export const addPost = () => {
  const post = {
    id: 3,
    message: state.profilePage.newMessage,
    title: "Me",
  }
  state.profilePage.posts.push(post)
  state.profilePage.newMessage = ''
  render(state);
}

export const updateText = (newText) => {
  state.profilePage.newMessage = newText
  render(state)
}
export default state;
