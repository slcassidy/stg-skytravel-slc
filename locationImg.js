// let imageSite = "";

const firstImage = function(){
		const image1 = `<img class="p-center img mx-auto" src="img/plane-841441_1920.jpg" id="1pic" alt="first-img"></img>`
		$(`#mainPic`).prepend(image1);
}
$(document).ready(firstImage);


// **************************Getting image through Google pictures*********************************
  
const newImage = function(event){

    // event.preventDefault(); 
    
		let countryPic = city123 + "%20" + country123;
		console.log(countryPic);
		
		const googleKey = "AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA";
		// let photoRef = "CmRaAAAAR44oSxo0iblPDTOKJVUWxPt0FQEzgBiaknnB-afLKWBUnejCbKdAM-HTrjV10UjV-abGPlbyIPpV5x_UmYU0v7ni98j44XcCMZIDusQy09MrHTT379qfkqSyDLEtUsSMEhBSVCb14n-pzRHwIgjI8tMDGhRko7fMcvr163TFJIFHhopHg1fkHQ"
		// let photoRef = "";

//   let locationPicURL = `https://maps.googleapis.com/maps/api/place/field/?name&key=${googleKey}`

  let locationPicURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${countryPic}&inputtype=textquery&fields=photos&key=${googleKey}`

	// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Athens,%20GA,%20United%20States&inputtype=textquery&fields=photos&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA
	// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Canada&inputtype=textquery&fields=photos&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA
    
	// console.log(locationPicURL);	
	$.ajax({
      url: locationPicURL,
			method: 'GET',
			headers: {'Access-Control-Allow-Origin':'*'
		}
    })
    
    .then(function(response) {
    
			console.log(response.candidates[0].photos[0].photo_reference);
			const photoRef = response.candidates[0].photos[0].photo_reference
			let pictureURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA`

			// const picLocation = $(`<img class="image"src="${pictureURL}">`)
			const picLocation = $(`<img class="p-center img mx-auto" src="${pictureURL}" alt="first-img"></img>`)

			$(`#mainPic`).prepend(picLocation);
			$('#1pic').hide();

    
		}) //End of picture ajax
		
  
    };

    // **************************Getting image through Unsplash pictures*********************************

    

    const nextImage = function(event){
        const unsplashKey = `c1638356e44b65cce170e218dbe0b09c791d81a2f187d80010e44b61b3d9ed07`
        // let locationPicURL = `https://api.unsplash.com/photos/?client_id=${unsplashKey}`

        let locationPicURL = `https://api.unsplash.com/search/collections?page=1&query=office/?client_id=${unsplashKey}`
        

        $.ajax({
            url: locationPicURL,
                  method: 'GET',
                //   headers: {'Access-Control-Allow-Origin':'*'}
          })
          
          .then(function(response) {
          
                  console.log(response);
                //   const photoRef = response.candidates[0].photos[0].photo_reference
                //   let pictureURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA`
      
                  // const picLocation = $(`<img class="image"src="${pictureURL}">`)
                //   const picLocation = $(`<img class="p-center img mx-auto" src="${pictureURL}" alt="first-img"></img>`)
      
                //   $(`#mainPic`).prepend(picLocation);
                //   $('#1pic').hide();
      
          
              }) //End of picture ajax


    };
