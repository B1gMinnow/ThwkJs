'use strict';

function thousands_separators(num) {
	var s = (num).toString();
	var re1 = /\d{3}/;
	var re2 = /\d{4}/;
	var re3 = /\d{7}/;
	var re4 = /\d{4}\.0+/;
	var re5 = /\d{3}\.\d+/;
	
  	if(re1.test(s))
  	{
  		return s;
  	}

  	if(re2.test(s))
  		return substring(0,1) + ',' + substring(1);
  	if(re3.test(s))
  		return substring(0,1) + ',' + substring(1,4) + ',' + substring(4);
  	if(re4.test(s))
  		return substring(0,1) + ',' + substring(1,4);
  	if(re5.test(s))
  		return substring(0,3) + '.' + substring(4);  
}

module.exports = thousands_separators;
