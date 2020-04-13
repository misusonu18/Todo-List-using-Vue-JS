var todolist = new Vue({
    el: "#todo",
    data: {
        todoItem: ['heelo','hii','hh'],
        seen: "",
        todoText: "",
        selectedTodo: [], 
        addtodo: true, 
        edittodo: false,
    },

    methods: {
        addInput: function() { 
            if (this.seen == true) {
                if (this.todoText.length > 0) {
                    this.todoItem.push(this.todoText);
                    this.todoText = "";
                }
            }
            else
                this.seen = true;
        },

        removeItem: function() {
            if (this.selectedTodo.length) {
                this.todoItem.splice(this.selectedTodo,1)
            }
        },

        editItem: function() {
            if (this.selectedTodo.length == 1) {
                this.seen = true;
                this.todoText = this.todoItem[this.selectedTodo].toString();
                this.todoItem.splice(this.selectedTodo,1);
                this.addtodo = false;
                this.edittodo = true;
                console.log(this.selectedTodo);
            }
        },

        editInput: function(){
            this.todoItem.push(this.todoText);
            this.todoText = "";
            this.addtodo = true;
            this.edittodo = false;
            this.seen = false;
            this.selectedTodo = [];
        }
    }   
});