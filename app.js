    //Variablen
    const sinW = document.getElementById("sinw");
    const sinH = document.getElementById("sinhy");
    const sinG = document.getElementById("singk");
    const calcButton = document.getElementById("calc");
    const sinResult = document.getElementById("result-sin");
    const otherR = document.getElementById("other-values");
    

    //Funktion
    //Die 2 hinter den let Variablen bedeuten, dasss das eine Variable ist welche geändert wird und

    calcButton.addEventListener("click", function (event) {
      event.preventDefault();
      let sinW2, sinW3, sinH2, sinG2, sinSide;
      let angle2;
      //Error Meldungen
      if (sinW.value === '0'){

        location.reload();
        alert("Zero can't be a value")

      } else if (sinH.value === '0') {

        location.reload();
        alert("Zero can't be a value")

      } else if (sinG.value === '0') {

        location.reload();
        alert("Zero can't be a value")





        //Berechnungen
      } else if (sinG.value === sinH.value){
        

        //Berechnungen
        let sinW3 = '45';
        sinResult.innerHTML = "Tan Angle: " + sinW3; 

        //Other Values
        let angle2 = 180 - 90 - sinW3;
        otherR.innerText = "Other Angle: " + angle2;
        sinSide = Math.sqrt(Math.pow(sinH.value, 2) + Math.pow(sinG.value, 2));
        otherR.innerText = "Hypotenuse: " + (Math.round(sinSide * 1000 ) / 1000) + " | Opposite Angle : " + Math.round(angle2 * 10000) / 10000; 

      } else if (sinW.value === '0'){

        alert("Zero can't be a value")

        //Berechnungen
      } else if (sinW.value === '') {

        //Tan Winkel
        let sinW2 =  Math.atan(sinG.value / sinH.value);
        let sinW3 = sinW2 * (180 / Math.PI);  
        console.log(sinW3)
        sinResult.innerText = "Tan-Angle: " + Math.round(sinW3 * 10000) / 10000;
        //Anderer Winkel
        let angle2 = 180 - 90 - sinW3;
        sinSide = Math.sqrt(Math.pow(sinH.value, 2) + Math.pow(sinG.value, 2));
        otherR.innerText = "Hypotenuse: " + (Math.round(sinSide * 1000 ) / 1000) + " | Opposite Angle : " + Math.round(angle2 * 1000) / 1000;
       
      } else if (sinG.value === '') {

        //Haupt Berechnungen
        let sinH2 = Math.tan(sinW.value * (Math.PI / 180)) * sinH.value;
        sinResult.innerText = "Gegenkatete: " + (Math.round(sinH2 * 10000) /10000);
        
        //Other Values
        let sinSide = Math.sqrt(Math.pow(sinH2, 2) + Math.pow(sinH2, 2));
        let sinG2 = 180 - sinW.value - 90;
        otherR.innerText = "Opposite Angle : " + sinG2 + "°" + " | Hypotenuse: " + (Math.round(sinSide * 1000) / 1000);
        

      } else if (sinH.value === ''){
        
        let sinG2 = sinG.value / Math.tan((sinW.value * Math.PI) / 180);
        console.log(sinG2);
        sinResult.innerText = "Opposite Cathetus: " + (Math.round(sinG2 * 10000) /10000);

        //Other Values
        let sinH2 = 180 - sinW.value - 90;
        let sinSide = Math.sqrt(Math.pow(sinG2, 2) + Math.pow(sinG.value, 2));
        otherR.innerText = "Opposite Angle: " + Math.round(sinH2 * 1000 ) / 1000 + "°" + " | Hypotenuse " + (Math.round(sinSide * 1000) / 1000);

      }
    });
