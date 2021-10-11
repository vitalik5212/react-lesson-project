let store = {
    _state: {
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
            newPostText: '',
        },
    },
    getState() {
      return this._state;
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if(action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._rerenderEntireTree(this._state);
        }
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}

window.store = store;
export default store;