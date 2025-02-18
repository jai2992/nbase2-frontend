class Player{
    constructor(coin, gem)
    {
        this.coin=coin
        this.gem=gem
    }
    getPoints()
    {
        console.log(this.coin+this.gem);
        let d = document.querySelector(".res")
        d.innerHTML=this.coin*10+this.gem*50
        let c = document.querySelector(".show-coins")
        c.innerHTML=this.coin+" "
        let g = document.querySelector(".show-gems")
        g.innerHTML=this.gem+" "
    }
    gemInc()
    {
        this.gem+=1
        console.log(this.gem)
        this.getPoints()
    }
    coinInc()
    {
        this.coin+=1
        console.log(this.coin);
        this.getPoints()
    }

}
let p = new Player(0,0)
p.getPoints()