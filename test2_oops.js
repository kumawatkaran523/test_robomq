class shape{
    constructor(length,bredth,height){
        this.length=length;
        this.bredth=bredth;
        this.height=height;
    }

    perimeter(){
        return 2*(this.length+this.bredth);
    }
    area(){
        return this.length*this.bredth;
    }
}
class rectanlgle extends shape{
}

const rec=new rectanlgle(2,3,4);
console.log(rec.perimeter())
