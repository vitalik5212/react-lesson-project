import {renderEntireTree} from "../render";

let state = {
    dialogPage: {
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'Hello'},
            {id: 3, text: 'How are you?'},
            {id: 4, text: 'Fine'},
            {id: 5, text: 'Good'},
        ],
        dialogs: [
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Ihor'},
            {id: 3, name: 'Stepan'},
            {id: 4, name: 'Vadim'},
            {id: 5, name: 'Ira'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 16},
            {id: 2, message: 'It\'s my firs project', likesCount: 45},
            {id: 3, message: 'Goodbye', likesCount: 0},
        ],
    },
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;