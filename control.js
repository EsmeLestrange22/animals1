function record_now() {
    navigator.mediaDevices.getUserMedia({audio: true});

    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/R2lHPGn08/model.json', modelReady)
}
function modelReady() {
    console.log("Your model has been loaded successfully")
    //classifier.classify(gotResults);
}
//function gotResults(error, results) {
    //if(error) {
        //console.error(error);
   // }
    //else{
        //console.log("answers are here");

    //}
//}