function Person () {
    var attributes = {};
	
	this.setAttributes = function (hash) {
		attributes = hash;
	};

	 
	this.toJSON = function () {
	    return attributes;
	};
	  
	return this;
}	

