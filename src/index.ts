/** This is a TS class that is sure to be different after transpilation to ES5. */
class Rect {

  constructor(
    public readonly a: number,
	public readonly b: number,
  ) {}

  get area() {
    return this.a * this.b;
  }

}

let r = new Rect(2, 5);
console.log(r.area);