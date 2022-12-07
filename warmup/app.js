function findDiagonal(s) {
    return Math.sqrt(2) * s;
  }

  const S = 9;
  console.log((findDiagonal(S).toFixed(2)));

// ========================= 2b =========================

const side1 = 5, side2 = 6, side3 = 7;
// Area of Triangle Using Heron's Formula, s = semiPerimeter
const s = (side1 + side2 + side3)/2;
const area = (Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))).toFixed(2);
console.log(("Area is ", area));


// ========================== 2c ==========================

const PI = Math.PI, r = 4;
const c = (2 * PI * r).toFixed(2);
console.log("Circumference is ", c);

// ======================== 3a ========================
function isGreaterThan(a, b) {
    if(parseInt(a) > parseInt(b)) {
        console.log(`${a} is greater than ${b}`)
    } else if(parseInt(b) > parseInt(a)) {
        console.log(`${b} is greater than ${a}`)
    } else if(parseInt(a) === parseInt(b)) {
        console.log("Both numbers are equal")
    } else {
        console.log("The numbers are invalid")
    }
}