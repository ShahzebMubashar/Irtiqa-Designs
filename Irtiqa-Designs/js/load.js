const mp = document.getElementById('mp');

function getRow(...columns)
{
    const row = document.createElement('tr');
    for(const column of columns)
    {
        const td = document.createElement('td');
        td.innerText = column || "-";
        row.appendChild(td);
    }
    return row;
}

Papa.parse("data/mp.csv", {
    download: true,
    complete: function(results) {
        for(const row of results.data)
        {
            mp.appendChild(getRow(...row));
        }
    }
});

