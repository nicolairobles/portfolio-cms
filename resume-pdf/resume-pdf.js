var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('templates/partials/resume-html.html', 'utf8');
var options = { format: 'Letter' };
 
pdf.create(html, options).toFile('resume-pdf/nicolai-robles-resume.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});