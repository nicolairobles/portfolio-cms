//JS functions used in all pages

//Adds bring to front for all elements from D3 selection
//Adapted from the following code:
//http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

//Adds bring to back for all elements from D3 selection
d3.selection.prototype.moveToBack = function() {
  return this.each(function(){
    this.parentNode.insertBefore(this,this.parentNode.firstChild);
  });
};

//Rounds the input number to input decimal places
function round(number,decimal) {
  var power = Math.pow(10,decimal);
  return (Math.round(number*power)/power).toFixed(decimal);
}