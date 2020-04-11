var todolist = new Vue({
    el: "#todo",
    data: {
        todoitem: Array(),
        seen: "",
        todotext: "",
        todolist: "",   
    },

    methods: {
        addInput: function(){
            if (this.seen == true) {
                this.todolist = true;
                this.todoitem.push({text: this.todotext});
                this.todotext = "";
            }
            else
                this.seen = true;
        }
    }   
});