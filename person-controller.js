function PersonController () {

    var	input_template = _.template($("#person_input_tmp").html()),
	    actions = {
		    "save": "Save"
	        },
			
		person = new Person();
		
	$("#main").html(input_template(actions)); 

    $("#save").on("click", setPerson);
	
	function setPerson() {	
	
	    var values = {},	    
            $inputs = $("#person_input").find("input"),
			key = [];
			
	    _.each($inputs, function(input, i) {
		    key[i] = input.id;
			values[key[i]] = input.value;
		});	
      
	    person.setAttributes(values);
	    showPerson();
    }
	
	function showPerson () {
	
		var $output_div = $("#person_output_tmp").html(),
		    edit_template = _.template($output_div),
			actions = {},
			actions = person.toJSON();
			
	    actions.edit = "Edit";
			
	    $("#main").html();
			
	    $("#main").html(edit_template(actions));
				
		$("#edit").on("click", editPersonInfo);	   
    }		
	
	function editPersonInfo () {
	
	    var input_template = _.template($("#person_input_tmp").html()),
	        actions = {
		        "save": "Save"
	            };	
	
	    $("#main").html(input_template(actions));  
	    $("#save").on("click", setPerson);
    }	
	
    return this;	
}		


 
		