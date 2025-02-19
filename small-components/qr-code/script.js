function showSize()
{
    const size = document.querySelector("#size").value
    const show = document.querySelector(".show-size")
    show.innerHTML=size
}
showSize()

function getQr(event)
{
    event.preventDefault()

    const input = document.querySelector("#input").value
    const size = document.querySelector("#size").value

    if(input==="")
    {
        alert("enter the link/image")
        return true
    }
    console.log(size)
    fetch(`https://api.apgy.in/qr/?data=${input}&size=${size}`,{method:'GET'})
        .then((response)=>response.blob())
            .then((image_blob)=>URL.createObjectURL(image_blob))
                .then((url)=>{
                    let qr = document.querySelector(".qr-img")
                    qr.innerHTML=`<img src=${url}></img>
                    <a href=${url} download>Download</a>`
                })
    return false
}