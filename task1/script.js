let grid = []
let value = 1
let startNumber = 0
let repeat = 0
let currRepeat = 0
let skip = 0
let p = 0
async function changePause()
{
    (p)?p=0:p=1
    console.log(p);
    
}
async function wait()
{
    await new Promise((resolve)=>
    {
        let t=setInterval(()=>{
            if(!p)
            {
                repeat = document.querySelector(".repeat").value-1 || 0
                skip = document.querySelector(".skip").value || 1
                console.log("hello");
                clearInterval(t)
                resolve()
            }
        },100)
    })
}
async function print()
{
    grid = []
    value = document.querySelector(".start").value || 1
    repeat = document.querySelector(".repeat").value-1 || 0
    skip = document.querySelector(".skip").value || 0
    let size = document.querySelector(".size").value
    if(repeat<0)
    {
        alert("I know you gave negative repeat !!!")
    }
    createGrid(size)
    createTable();
    console.log(grid)
    let i=size-1
    let j=0
    let k=0
    await upDir(i,j,0)
    j++
    while(i>=j)
    {
        await rightDir(j,i,k)
        await downDir(j,i,size-1-k)
        i--
        await leftDir(i,j,size-1-k)
        k++
        await upDir(i,j,k)
        j++
    }
    createTable()
    
}
function createGrid(size)
{
    for(let i=0; i<size; i++)
    {
        grid.push([])
        for(let j=0; j<size; j++)
        {
            grid[i].push("-")
        }
    }
}
function createTable()
{
    let s=""
    for(let i=0;i<grid.length;i++)
    {
        s+="<tr>"
        for(let j=0;j<grid[i].length;j++)
        {
            s+=`
            <td class="${i}${j}">${grid[i][j]}</td>
            `
        }
        s+="</tr>"
    }
    let table = document.querySelector("table")
    table.innerHTML=s
}

async function upDir(srow,erow,col)
{
    for(let i = srow; i>=erow ; i--)
    {
        if(value==skip)
        {
            value++
        }
        grid[i][col] = value
        await new Promise((resolve)=>setTimeout((resolve),1000))
        console.log(currRepeat)
        createTable()
        if(currRepeat++==repeat)
        {
            currRepeat=0
            value++
        }
        console.log("hi",value);
        
        if(p)
        {
            await wait()
        }
        console.log("hello",value)
    }
}

async function rightDir(scol,ecol,row)
{
    for(let i=scol;i<=ecol;i++)
    {
        if(value==skip)
        {
            value++
        }
        grid[row][i]=value
        await new Promise((resolve)=>setTimeout((resolve),1000))
        console.log(currRepeat)
        createTable()
        if(currRepeat++==repeat)
        {
            currRepeat=0
            value++
        }
        if(p)
        {
            await wait()
        }
    }
}

async function downDir(srow,erow,col)
{
    for(let i=srow;i<=erow;i++)
    {
        if(value==skip)
        {
            value++
        }
        grid[i][col]=value
        await new Promise((resolve)=>setTimeout((resolve),1000))
        console.log(currRepeat)
        createTable()
        if(currRepeat++==repeat)
        {
            currRepeat=0
            value++
        }
        if(p)
        {
            await wait()
        }
    }
}
async function leftDir(scol,ecol,row)
{
    for(let i=scol;i>=ecol;i--)
    {
        if(value==skip)
        {
            value++
        }
        grid[row][i]=value
        await new Promise((resolve)=>setTimeout((resolve),1000))
        console.log(currRepeat)
        createTable()
        if(currRepeat++==repeat)
        {
            currRepeat=0
            value++
        }
        if(p)
        {
            await wait()
        }
    }
}