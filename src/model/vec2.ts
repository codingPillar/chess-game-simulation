export class Vec2{
    public x: number;
    public y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    add(vec: Vec2): Vec2{
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    getAdd(vec: Vec2){
        const result = this.copy();
        result.add(vec);
        return result;
    }

    scale(factor: number): Vec2{
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    getScale(factor: number){
        const result = this.copy();
        result.scale(factor);
        return result;
    }

    copy(){
        return new Vec2(this.x, this.y);
    }

    equals(vec: Vec2): boolean{
        return this.x === vec.x && this.y === vec.y;
    }

    inverse(): Vec2{
        this.scale(-1);
        return this;
    }
}