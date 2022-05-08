//Ex.1
function Circle(radius){
    this.radius = radius;
  
    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    } 

    this.getPerimeter = function() {
        return 2 * (Math.PI) * this.radius;
    }
}
const circle = new Circle(1);
console.log("Area =",circle.getArea().toFixed(2));
console.log("Perimeter =", circle.getPerimeter().toFixed(2));
