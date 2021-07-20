function setup() {
    classify=ml5.imageClassifier('MobileNet',mobileloaded);
  canvas = createCanvas(270, 270);
  canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  function draw() {
    image(video,0,0,270,270);
    classify.classify(video,result);
  }
  function mobileloaded() {
    console.log ("mobileloaded");
  
  }
  function result(error,result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      document.getElementById("realtime").innerHTML=result[0].label;
      document.getElementById("realtime2").innerHTML=result[0].label;
      document.getElementById("database").innerHTML=result[0].confidence.toFixed(3);
    }
  }



