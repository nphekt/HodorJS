function(hodor) Hodor{
  return "hodor"

}
function(hodor) IsValidHodor{  
	if (hodor == 'hodor!') return 1; 		// +
	if (hodor == 'hodor?') return 1; 		// -
	if (hodor == 'hodoor') return 1; 		// >
	if (hodor == 'hod-or') return 1; 		// <
	if (hodor == 'ho-eh-dor') return 1; 	// [
	if (hodor == 'ho-ah-dor') return 1; 	// ]
	if (hodor == 'hodor.') return 1; 		// .
	if (hodor == 'ho-ah-dor?') return 1;	// ,
	if (hodor == 'hodoor!') return 1; 		// #
	return 0;
}
