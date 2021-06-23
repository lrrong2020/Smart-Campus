const SAMPLE_MIN = 4470
const SAMPLE_MAX = 5000
const TS_CONST = 1000
const TWO_HOURS = 7200000

const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function(e){
  console.log(input.files)
  const reader = new FileReader()
  reader.onload = function () {
	  var lines = reader.result.split('\n').map(function (line){
		return line.split(',')  
	  })
	  /*
	  for(var i = SAMPLE_MIN;i < SAMPLE_MAX;i++){
		  var timestamp = parseInt(lines[i][0])
		  var date = new Date(timestamp * TS_CONST + TWO_HOURS)
		  //console.log(date.getTime())
		  var isoTime = date.toISOString()
		  var isoYear = isoTime.slice(0,4)
		  var isoMonth = isoTime.slice(5,7)
		  var isoDay = isoTime.slice(8,10)
		  var isoHour = isoTime.slice(11,13)
		  var isoMinute = isoTime.slice(14,16)
		  var isoSecond = isoTime.slice(17,19)
		  
		  console.log(isoTime)
		  console.log(isoYear + "-" + isoMonth + "-" + isoDay + " " + isoHour + ":" + isoMinute + " " + isoSecond)
		  
		  
		 
		  
	  }
	*/
	  
	var counter = SAMPLE_MIN

		setInterval(function (){
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	
		var ts = parseInt(lines[counter][0])
		
		var lastTime = (new Date(ts * TS_CONST + TWO_HOURS)).toISOString()
		var studentNumberFromCamera1 = parseInt(lines[counter][1])
		var studentNumberFromCamera2 = parseInt(lines[counter + 1][1])
		
		
		document.getElementById("lastTime").value = lastTime
		document.getElementById("studentNumber").value = studentNumberFromCamera1 + studentNumberFromCamera2
		console.log(counter)
		

		if(counter < SAMPLE_MAX){
			counter = counter + 2
		}
		
}, 1000)
  
  }

	
reader.readAsText(input.files[0])

},false)

