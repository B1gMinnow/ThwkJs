'use strict';
function addComma(s)
{
  var re1 = /\d{1,3}/;
  var re2 = /\d{4,6}/;
  var re3 = /\d{7,9}/;
  if(re1.test(s))
    {
      return s;
    }


    if(re2.test(s))
    {
      
      return substring(0,s.length - 3) + ',' + substring(s.length-3);
      
    }
    if(re3.test(s))
      return s.substring(0,s.length-6) + ',' + s.substring(s.length - 6, s.length - 3 ) + ',' + s.substring(s.length - 3);

    return '';
}

function thousands_separators(num) {
	var s = (num).toString();
	
	var re4 = /\d+\.0+/;
	var re5 = /\d{3}\.\d+/;
	
    var out_come = addComma(s);
    if(out_come !== '')
      return out_come;

    if(re4.test(s))
  	{

      var s2 = s.substring(0,s.indexOf('.'));
      return addComma(s2);
    }
  	if(re5.test(s))
  	{
      var s3 = addComma(s.substring(0,s.indexOf('.')));
      var s4 = addComma(s.substring(s.indexOf('.')) + 1);
      return s3 + '.' + s4;
    }
}

module.exports = thousands_separators;
