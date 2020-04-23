class Shape
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
}
//reactangle
class Recangle extends Shape
{
    constructor(x,y,h,w)
    {
        //pass data to parents class
        super(x,y);
        this.h=h;
        this.w=w;
    }
    //Circumference
    getCircumference=()=>
    {
        return (2*(w+h));
    }
    getArea=()=>
    {
        return (w*h);
    }
}
//Square
class Squre extends Recangle
{
    constructor(x,y,h)
    {
        super(x,y,h,h);
    }
    //Circumference
    getCircumference=()=>
    {
        return (w*4);
    }
    getArea=()=>
    {
        return (w*w);
    }
}
//oval
class Oval extends Shape
{
    constructor(a,b)
    {
        super(a,b);
    }
    //Circumference
    getCircumference=(a,b)=>
    {
        return (a*b*Math.PI);
    }
    getArea=(a,b)=>
    {
        return ((a+b)*Math.PI);
    }
} 
//circle
class Circle extends Oval
{
    constructor(r)
    {
        super(r,r);
    }
    //Circumference
    getCircumference(r,r);
    //Area
    getArea(r,r);
} 
