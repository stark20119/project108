function  work(){

    navigator.mediaDevices.getUserMedia({ audio: true });

classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zcGqV0ZGk/model.json" , modelReady)
}


function modelReady(){

  classifier.classify(gotResults)  
}

function gotResults(error,results){
  if (error) {
    console.log(error)

  } else {
    console.log(results)

    document.getElementById("resultlabel").innerHTML=results[0].label
    document.getElementById("resultaccu").innerHTML=(results[0].confidence * 100).toFixed(0)+"%"


    if (results[0].label == "") {
     
      
    } else if (results[0].label == ""){
      
    }

    else if (results[0].label == ""){
      
    }

    else  if(results[0].label == ""){
     
    }
  }
}



