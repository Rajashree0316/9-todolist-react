const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'CHECK_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isChecked: !todo.isChecked
                        }
                    }
                    return todo;
                })
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'DELETE_ALL':
            return {
                ...state,
                todos: []
            }
        case 'EDIT_CONFIG':
            return {
                ...state,
                editFlag: !state.editFlag,
                textToEdit: action.payload.text,
                editID: action.payload.id
            }
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === state.editID) {
                        return {
                            ...todo,
                            text:action.payload
                        }
                    }
                    return todo;
                })
            }
        case 'REBOOT':
            return {
                ...state,
                editFlag: false,
                editID: '',
                textToEdit: ''
            }
        default:
            return state;
    }
}

export default TodoReducer;

/* things to know
add:
a)...state-> return all the states from todo provider
b)) over write the todo property -> array of current moment,payload is new todo
check:
a) return the state- over write the todos
b) for each todos we will check they are equal to action.payload
c) return the object i.e todo(grab all of the properties from this object)
d) to over write isChecked to be opposite value of the todo.isChecked
e) if not return todo obj as it is
delete
a)...state - return the state
b)state.todos.filter- prevState.current todos.with filter method
c)for each todo we gonna remove the todo that is being checked so that id should be diff than action.payload
DELETE ALL
a)...state - return the state
b)todos going to be an empty array
edit_config
a)...state - return the state
b)opposite value of state flag,action payload.text and .id
Reboot
a)...state - return the state
b)edit flag is false and empty string for edit id and text to edit
edit_todo
a)...state - return the state
b)for each todo apply some condition:
if todo id is equal to edit id then return prev todo and text based on payload
c)if condition not met then return todo
 */