document.addEventListener('DOMContentLoaded', function()  {
    var todoArray = []

    var thing = fetch('https://jsonplaceholder.typicode.com/todos' )
    .then(Response => Response.json())
    .then(data => {

        todoArray = data
        console.log(todoArray)
        for( var i = 0; todoArray.length; i++){

            createListItem(todoArray[i].title)
        }

    })



            
    var form = document.getElementById('the-form')

    form.addEventListener('submit', function(event)  {

        event.preventDefault()       

        var todoField = document.getElementById('new-todo-field')

        var newTodo = todoField.value

        

        todoArray.push(newTodo)

        document.getElementById('list-of-todos').innerHTML = ""

        for(var i = 0 ; i < todoArray.length; i++){

            createListItem(todoArray[i])
        }
    })

        function createListItem(todo){
            var newListItem = document.createElement('li')

            newListItem.innerText = todo

            var listTodos = document.getElementById('list-of-todos')

            listTodos.appendChild(newListItem)
        }
    

})

var thing = fetch('https://jsonplaceholder.typicode.com/todos' )
.then(Response => Response.json())
.then(data => console.log(data))


for(title in data){
    
    var arr = []

    arr.push(title)
    console.log(arr[0])
}

