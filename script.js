

function fetchData() {
    fetch('Data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = '<h2 class="mb-4">Countries</h2>'
        let dataa = JSON.stringify('Data.json')
        dataa = JSON.parse(data)
        dataa.forEach(function(item){
            output += 
            `<ul class="list-group mb-3">
            <li class="list-group-item">Country: ${item.color}</li>
            <li class="list-group-item">CODE: ${item.value}</li>
          </ul>
            `
        })
        document.getElementById('country').innerHTML = output

    })
    .catch((error) => {
    //   console.log(`Error Fetching data : ${error}`)
      document.getElementById('country').innerHTML = 'Error Loading Dataaa'
    })
}

fetchData();
