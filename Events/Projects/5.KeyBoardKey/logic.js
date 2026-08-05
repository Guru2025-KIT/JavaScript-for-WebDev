const input=document.querySelector('#insert')

window.addEventListener('keydown',(e)=>{

  input.innerHTML=
    `
    <div >

    <!-- The structural container for the table data -->
    <table>
        <caption>KeyBoard Directory</caption> <!-- Optional table title -->
        <thead>
            <tr>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
        </thead>
        <tbody>
          <tr>
                <td>${e.key===" "?"Space":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
          </tr>

    </div>
    `


})