
fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
    //the data is in json format
    return data.json();//converted into Object
}).then((objectData) => {
    console.log(objectData);
        var tableData="";
    objectData.map((values) => {
        tableData+= `<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
})
const form = document.getElementById('form');
        
        
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const body =document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        // .then((json) => console.log(json)); //Because of dummy server we can't sent a actual user input and its values to the sever because of it that data can't be shown on UI 
        .then(function(values){
            let newData=document.getElementById("table_body");
            newData.innerHTML+=  `<tr>
            <td>${values.userId}</td>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.body}</td>
        </tr>`;//so i simply put that data directly in to the UI
        })
        .catch(error=>{console.log(error);});
})

