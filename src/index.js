module.exports = function solveEquation(equation) {
  // your implementation -20 * x^2 - 108797540 * x - 130011773690520
  
  var ax = equation.indexOf(' * x^2 ');
  var bx = equation.indexOf(' * x ');
  
  var str1 = equation.substring(0,ax);
  var str2 = equation.substring(ax+7,bx);
  var str3 = equation.substring(bx+5);
  
  var a = parseFloat(str1);
  var b = parseFloat(str2.substring(2));
  if (str2[0]=='-') { b = (-1) * b; }
  var c = parseFloat(str3.substring(2));
  if (str3[0]=='-') { c = (-1) * c; }
  
  var x1 = 0, x2 = 0;
 
  var d = b*b-4*a*c;
    
  x1 = Math.round((-b+Math.sqrt(d))/(2*a));
  x2 = Math.round((-b-Math.sqrt(d))/(2*a));
  
  
  if (x1<x2) {
    return [x1,x2];
    } else {
        return [x2,x1];
        }
}
