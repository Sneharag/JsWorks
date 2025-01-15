fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTodos(data))

// fetch("url").then(response=>convert to js native type).then(data)

function displayTodos(tasks){

    let htmlData=""

    for(let t of tasks){

        htmlData+=`
        <div class="col-4">
               <div class="card" style="width: 100%;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">id : ${t.id}</li>
                        <li class="list-group-item">Title : ${t.title}</li>
                        <li class="list-group-item">User : ${t.userId}</li>
                        <li class="list-group-item">Status : ${t.completed}</li>

                    </ul>
            </div> 
        </div>
        `
        
    }

    document.querySelector("#root").innerHTML=htmlData

}


