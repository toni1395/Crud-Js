let id = null
const makeVariable = (id)=>{
    eval (`const ${id} = document.querySelector("#${id}")`)
}
const input = (id, type ='text', label='', placeholder='')=> {
    return `
        <label>${label}</label><br>
        <input type="${type}" id="${id}" placeholder="${placeholder}"><br>
        `
        makeVariable(id)
}

const button = (id, label) =>{
return `<button id = "${id}">${label}</button>`
makeVariable(id)
}

const div = (id)=>{
    return `<div id="${id}"></div>`
    makevariable (id)
}

const editdata =(index)=>{
    namabarang.value = data[index].nama
    hargabarang.value = data[index].harga
    id = index
}
const deletedata = (index)=>{
    data.splice(index, 1)
    loadData(data,datalist)
}
    const loadData = (data, element)=>{
        element.innerHTML =''
        let i = 0
        data.forEach(item =>{
            element.innerHTML += `
            <p>
            Nama barang : ${item.nama} <br> 
            harga barang : ${item.harga}  <button onclick ="editdata(${i})">edit</button>
            <button onclick ="deletedata(${i})">hapus</button>
            </p>`
            i++
        });
}
const clear = () =>{
    namabarang.value = null
    hargabarang.value = null
    id = null
}
let data = [
    {
            'nama' : 'sepatu',
            'harga' : 150000
    },
    {
            'nama' : 'tas',
            'harga' : 200000
    }
]
document.body.innerHTML += input ('namabarang' , 'text' , 'nama barang' , 'masukan nama barang')
document.body.innerHTML += input ('hargabarang' , 'text' , 'harga barang' , 'masukan harga barang')
document.body.innerHTML += button ('btnSimpan' , 'simpan')
document.body.innerHTML += button ('btnhapus' , 'hapus')
document.body.innerHTML += div('datalist')
loadData(data, datalist)
btnhapus.addEventListener('click', ()=>{
    clear()
})
btnSimpan.addEventListener('click', ()=>{
    if(id == null){
        data.push({
            'nama': namabarang.value,
            'harga': hargabarang.value
        })
        clear()
    }else{
        data[id].nama = namabarang.value
        data[id].harga = hargabarang.value
    }
    loadData(data,datalist)
})
