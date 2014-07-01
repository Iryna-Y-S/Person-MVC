function PersonController () {
    var input_div = document.getElementById("input_div"),
	    save_button = input_div.getElementsByTagName("input")[8],	
	    edit_div = document.getElementById("edit_info"),
		edit_person_element = edit_div.getElementsByTagName("input")[0],
		output = edit_div.getElementsByTagName("div")[0],
		
		person = new Person(),
		element_input_values = {};
		
    save_button.addEventListener("click", setPersonInfo, false);
    edit_person_element.addEventListener("click", editPersonInfo, false);
    
    function setPersonInfo () {	
	    var elem = [],
		    key = [],
		    i = 0;
	
	    for (i = 0; i < input_div.getElementsByTagName("input").length - 1; i++) {
	        elem[i] = input_div.getElementsByTagName("input")[i];
		    key[i] = input_div.getElementsByTagName("input")[i].id;
		    element_input_values[key[i]] = elem[i].value;
	    }	
	 
	    person.setAttributes(element_input_values);
				
        input_div.style.display = "none";
        edit_div.style.display = "block";
				
	    showPerson();
    }
	
	function showPerson () {
        var key, p_elem;
		
		for (key in person.toJSON()) {
		    p_elem = document.createElement("p"); 		
			p_elem.innerText = key + ":" + person.toJSON()[key] + " ";
			output.appendChild(p_elem);
		}
    }		
	
	function editPersonInfo () {
	    person.setAttributes(element_input_values);
		
	    output.innerHTML = "";	
		
        input_div.style.display = "block";
        edit_div.style.display = "none";
    }	
	
    return this;	
}		


 
		