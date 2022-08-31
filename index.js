const doc=document
let field={
    id:doc.getElementById('id'),
    msg:doc.getElementById('msgServe'),
    message:doc.getElementById('msg'),
    insert:doc.getElementById('insert')
}


function load(){
    aplicarFocus(field.message)

    const URL='http://localhost:3003'


    fetch(URL,{ method:'GET' })
            .then(response=>response.json())
                             .then(response=>{
                                response.map(e=>{
                                    let idDb=e.id
                                    let msgDb=e.msg
                                    let idUl=doc.createElement('ul')
                                    idUl.append(idDb)
                                    let msgUl=doc.createElement('ul')
                                    msgUl.append(msgDb)
                                    field.id.append(idUl)
                                    field.msg.append(msgUl)
                                })
                             })
                             .catch(err=>console.log(err))
}
load()  

function aplicarFocus(object){
    object.focus()
}

function send(){
    if(field.message.value===''){
        alert(" the field can't be empty. ")
    }else{
        const URL='http://localhost:3003'

        let data={msg:field.message.value}

        fetch(URL,{ method:'POST',
                    body:JSON.stringify(data),
                    headers:{'Content-Type':'application/json'} 
            })
            .then(response=>response.json())
            .catch(err=>console.log(err))

        doc.location.reload()
    }
}

