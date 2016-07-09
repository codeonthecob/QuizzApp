function checkQues() {
	var ques = document.getElementsByName("q1");
	var numOfQues = ques.length;

	for(var i = 0; i < numOfQues; i++) {
		if(ques[i].checked) {
			if(ques[i].value=="Correct")
				quiz.resultArea = "Correct!";
			
		}
	}
}
