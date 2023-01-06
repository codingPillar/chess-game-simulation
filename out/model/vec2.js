export class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    getAdd(vec) {
        const result = this.copy();
        result.add(vec);
        return result;
    }
    scale(factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }
    getScale(factor) {
        const result = this.copy();
        result.scale(factor);
        return result;
    }
    copy() {
        return new Vec2(this.x, this.y);
    }
    equals(vec) {
        return this.x === vec.x && this.y === vec.y;
    }
    inverse() {
        this.scale(-1);
        return this;
    }
}
