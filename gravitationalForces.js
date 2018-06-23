$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

var calculatorBtn = document.getElementById("calculator-btn");
calculatorBtn.setAttribute("data-toggle", "modal");
calculatorBtn.setAttribute("data-target", "#calculator-modal");

$(document).ready(function(){
  $("#contact-btn").add("#vert-contact-btn").remove();
  var $calcParentLi = $("#calculator-btn").parent("li");
  $calcParentLi.before("<li><a href='#' id='examples-btn'>Examples</a></li>");
  var $vertCalcParentLi = $("#vert-calculator-btn").parent("li");
  $vertCalcParentLi.before("<li><a href='#' id='vert-examples-btn'>Examples</a></li>");

  $("#conversion-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#conversion-container").offset().top
    }, "slow")
  });
  $("#vert-conversion-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#conversion-container").offset().top
    }, "slow")
  });
  $("#examples-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#practice-btns-container").offset().top
    }, "slow")
  });
  $("#vert-examples-btn").click(function(){
    $("html, body").animate({
      scrollTop: $("#practice-btns-container").offset().top
    }, "slow")
  });
  $("#go-up-btn").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, "slow")
  });
})

window.addEventListener("resize", function(){
  if(window.innerWidth < 992){
    $(window).scroll(function(){
      if($(window).scrollTop() > 600){
        $("#go-up-container").css({"opacity":"1", "z-index":"4"});
      } else {
        $("#go-up-container").css({"opacity":"0", "z-index":"-1"});
      }
    })
  }
})

window.addEventListener("load", function(){
  if(window.innerWidth < 992){
    $(window).scroll(function(){
      if($(window).scrollTop() > 600){
        $("#go-up-container").css({"opacity":"1", "z-index":"4"});
      } else {
        $("#go-up-container").css({"opacity":"0", "z-index":"-1"});
      }
    })
  }
})

var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
    verticalSearchBtn = document.getElementById("vertical-search-btn"),
    searchSection = document.getElementById("search-section"),
    searchBar = document.getElementById("search-bar"),
    closeSearchBtn = document.getElementById("close-search-btn"),
    caseList = document.getElementById("search-case-list"),
    mainContent = document.getElementById("main-content");

horizontalSearchBtn.addEventListener("click", openSearchSection);
verticalSearchBtn.addEventListener("click", openSearchSection);
searchBar.addEventListener("input", showList);
closeSearchBtn.addEventListener("click", closeSearchSection);

function openSearchSection(){
	if(!searchSection.classList.contains("active-search")){
		searchSection.classList.toggle("active-search");
		mainContent.style.marginTop = "30px";
		searchBar.focus();
	} else {
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value = "";
		mainContent.style.marginTop = "0";
	}
}

function closeSearchSection(){
	if(searchSection.classList.contains("active-search")){
		searchSection.classList.remove("active-search");
		caseList.classList.remove("show");
		searchBar.value  = "";
		document.getElementById("main-content").style.marginTop = "0";
	}
}
var searchClosers = [searchSection, mainContent];
for(let i = 0; i < searchClosers.length; i++){
  searchClosers[i].addEventListener("click", function(e){
    if(!e.target.matches("#search-bar")){
      closeSearchSection();
    }
  })
}

function showList() {
	if (searchBar.value.length > 0){
		caseList.classList.add('show');
		showAnchors();
	} else {
		caseList.classList.remove('show');
	}
}

function showAnchors(){
	let inputValue = searchBar.value.toUpperCase();
	let anchors = caseList.getElementsByTagName('a');
	let newAnchors = document.createElement("a");
	for (var i = 0; i < anchors.length; i++){
		let a = anchors[i];
		if (a.textContent.toUpperCase().indexOf(inputValue) > -1){
			anchors[i].style.display = "";
		} else {
			anchors[i].style.display = "none";
		}
	}
}
/*--- Toggle Hamburger Menu ---*/
var icon = document.getElementById("icon");
var clickBox = document.getElementById("click-box");
var verticalNav = document.getElementsByClassName("vertical-nav")[0];
clickBox.addEventListener("click", toggleVerticalNav, false);

function toggleVerticalNav(e){
	icon.classList.toggle("active");
	verticalNav.classList.toggle("show-vertical-nav");
}

window.onclick = function(e){
	if(!e.target.matches("#click-box")){
		if(icon.classList.contains("active")){
			icon.classList.remove("active");
			verticalNav.classList.remove("show-vertical-nav");
		}
	}
}
/*--- Example Problems Modals ---*/
var exampleAccordions = document.getElementsByClassName("accordion");
for (let i = 0; i < exampleAccordions.length; i++) {
    exampleAccordions[i].onclick = function() {
      this.classList.toggle("active");
      var innerPanel = this.nextElementSibling;
        if (innerPanel.style.maxHeight){
            innerPanel.style.maxHeight = null;
        } else {
            innerPanel.style.maxHeight = innerPanel.scrollHeight + "px";
        }
    }
}
/*--- End of Modal Accordions ---*/

/*--- Close all accordion panels on "X" btn click or Modal Window click ---*/
var modalCloseBtns = document.getElementsByClassName("glyphicon-remove");
var modalPanels = document.getElementsByClassName("modal-panel");
for(let i = 0; i < modalCloseBtns.length; i++){
  modalCloseBtns[i].addEventListener("click", function(){
    for(let i = 0; i < modalPanels.length; i++){
      if(modalPanels[i].style.maxHeight != null){
        modalPanels[i].style.maxHeight = null;
      }
    }
    var $modalContent = $(this).parents(".modal-content");
    var $accordions = $modalContent.find(".accordion");
    $accordions.removeClass("active");
  })
}
$(".example-modal").click(function(e){
  var $closeBtn = $(this).find(".glyphicon-remove");
  if(e.target.matches(".example-modal")){
    $closeBtn.click();
  }
})
/*--- End of Closing all Accordion and Panels ---*/

	/*--- Topic Calculators ---*/
	var objectBtns = document.getElementsByClassName("object-btn"),
		oneObjectBtn = document.getElementById("one-object-radio-btn"),
		twoObjectsBtn = document.getElementById("two-objects-radio-btn");

	var solveBtns = document.getElementsByClassName("solve-btn"),
		solveForceBtn = document.getElementById("solve-force-btn"),
		solveGravityBtn = document.getElementById("solve-gravity-btn"),
		solveSmallMassBtn = document.getElementById("solve-small-mass-btn"),
		solveBigMassBtn = document.getElementById("solve-big-mass-btn"),
		solveRadiusBtn = document.getElementById("solve-radius-btn");

	var unitBtns = document.getElementsByClassName("unit-btn"),
		newtonsBtn = document.getElementById("newtons-radio-btn"),
		kilogramsBtn = document.getElementById("kilograms-radio-btn"),
		metersBtn = document.getElementById("meters-radio-btn"),
		acclUnits = document.getElementById("accl-units-radio-btn"),
		gravitationalConstant = (6.7*10**-11);

	var inputFields = document.getElementsByClassName("input-field"),
		forceField = document.getElementById("gravitational-force-field"),
		gravityField = document.getElementById("gravity-field"),
		smallMassField = document.getElementById("small-mass-field"),
		bigMassField = document.getElementById("big-mass-field"),
		centersDistance = document.getElementById("radius-field"),
		sigFigsField = document.getElementById("sig-figs-field");

	var calculateBtn = document.getElementById("calculate-btn"),
		clearBtn = document.getElementById("clear-btn");

	var innerImageContainer = document.getElementById("inner-image-container"),
		slides = document.getElementsByClassName("slide"),
		currentSlideIndex = 0,
		width = 100,
		prevBtn = document.getElementById("prev-slide-btn"),
		nextBtn = document.getElementById("next-slide-btn"),
		slideBars = document.getElementsByClassName("slide-bar");

	calculateBtn.addEventListener("click", calculateFunc);
	clearBtn.addEventListener("click", clearFunc);

	prevBtn.addEventListener("click", goToPrevSlide);
	nextBtn.addEventListener("click", goToNextSlide);

	for(let i = 0; i < objectBtns.length; i++){
		objectBtns[i].addEventListener("click", objectCheckedFunc);
	}

	for(let i = 0; i < solveBtns.length; i++){
		solveBtns[i].addEventListener("click", solveForBtnFunction);
	}

	function objectCheckedFunc(){
		for(let i = 0; i < solveBtns.length; i++){
			if(solveBtns[i].disabled){
				solveBtns[i].disabled = false;
			}
			if(solveBtns[i].checked){
				solveBtns[i].checked = false;
			}
		}
		for(let i = 0; i < inputFields.length; i++){
			inputFields[i].value = "";
			if (inputFields[i].disabled){
				inputFields[i].disabled = false;
			}
		}

		for(let i = 0; i < unitBtns.length; i++){
			unitBtns[i].disabled = false;
			unitBtns[i].checked = false;
		}
		forceField.placeholder = "Force (F)";
		smallMassField.placeholder = "mass (m)";
		bigMassField.placeholder = "Mass (M)";
		gravityField.placeholder = "gravity (g)";
		centersDistance.placeholder = "distance (r)"

		if(oneObjectBtn.checked){
			solveSmallMassBtn.disabled = true;
			solveForceBtn.disabled = true;
			smallMassField.disabled = true;
			forceField.disabled = true;
			currentSlideIndex = 0;
			switchToSlide();
		} else if (twoObjectsBtn.checked){
			solveGravityBtn.disabled = true;
			gravityField.disabled = true;
      currentSlideIndex = 1;
      switchToSlide();
		}

	}

	function solveForBtnFunction(){

		function resetInputFields(){
			forceField.placeholder = "Force (F)";
			gravityField.placeholder = "gravity (g)";
			smallMassField.placeholder = "mass (m)";
			bigMassField.placeholder = "Big Mass (M)";
			centersDistance.placeholder = "distance (r)";

			for(let i = 0; i < inputFields.length; i++){
				inputFields[i].disabled = false;
				inputFields[i].value = "";
				if(inputFields[i].classList.contains("yellow-outline")){
					inputFields[i].classList.remove("yellow-outline");
				}
			}
			for(let i = 0; i < objectBtns.length; i++){
				if(oneObjectBtn.checked){
					forceField.disabled = true;
					smallMassField.disabled = true;
				} else {
					gravityField.disabled = true;
				}
			}
		}
		resetInputFields();

		function resetUnitBtns(){
			for(let i = 0; i < unitBtns.length; i++){
				unitBtns[i].disabled = true;
				if (unitBtns[i].checked){
					unitBtns[i].checked = false;
				}
			}
		}
		resetUnitBtns();

		switch(true){
			case (solveGravityBtn.checked):
				acclUnits.checked = true;
				acclUnits.disabled = false;
				gravityField.type = "text";
				gravityField.placeholder = "Calculating (g)..";
				gravityField.classList.add("yellow-outline");
				gravityField.disabled = true;
				currentSlideIndex = 0;
				switchToSlide();
			break;
			case (solveSmallMassBtn.checked):
				kilogramsBtn.checked = true;
				kilogramsBtn.disabled = false;
				smallMassField.type = "text";
				smallMassField.placeholder = "Calculating (m)..";
				smallMassField.classList.add("yellow-outline");
				smallMassField.disabled = true;
				currentSlideIndex = 6;
				switchToSlide();
			break;
			case (solveBigMassBtn.checked && !twoObjectsBtn.checked):
				kilogramsBtn.checked = true;
				kilogramsBtn.disabled = false;
				bigMassField.type = "text";
				bigMassField.placeholder = "Calculating (M)..";
				bigMassField.classList.add("yellow-outline");
				bigMassField.disabled = true;
				currentSlideIndex = 1;
				switchToSlide();
			break;
			case (solveBigMassBtn.checked && twoObjectsBtn.checked):
				kilogramsBtn.checked = true;
				kilogramsBtn.disabled = false;
				bigMassField.type = "text";
				bigMassField.placeholder = "Calculating (M)..";
				bigMassField.classList.add("yellow-outline");
				bigMassField.disabled = true;
				currentSlideIndex = 5;
				switchToSlide();
			break;
			case (solveRadiusBtn.checked && !twoObjectsBtn.checked):
				metersBtn.checked = true;
				metersBtn.disabled = false;
				centersDistance.type = "text";
				centersDistance.placeholder = "Calculating (r)..";
				centersDistance.classList.add("yellow-outline");
				centersDistance.disabled = true;
				currentSlideIndex = 2;
				switchToSlide();
			break;
			case (solveRadiusBtn.checked && twoObjectsBtn.checked):
				metersBtn.checked = true;
				metersBtn.disabled = false;
				centersDistance.type = "text";
				centersDistance.placeholder = "Calculating (r)..";
				centersDistance.classList.add("yellow-outline");
				centersDistance.disabled = true;
				currentSlideIndex = 4;
				switchToSlide();
			break;
			case (solveForceBtn.checked):
				newtonsBtn.checked = true;
				newtonsBtn.disabled = false;
				forceField.type = "text";
				forceField.placeholder = "Calculating (F)..";
				forceField.classList.add("yellow-outline");
				forceField.disabled = true;
				currentSlideIndex = 3;
				switchToSlide();
			break;
		}
	}



	function calculateFunc(){
		switch(true){
			case (solveGravityBtn.checked):
				function setTempGravity(){
					var tempGravity = (gravitationalConstant * bigMassField.value) / Math.pow(centersDistance.value, 2);
					function setFinalGravity(){
						if(tempGravity.toString().length > 5){
							gravityField.value = tempGravity.toPrecision(sigFigsField.value || 5) + " N";
						} else {
							gravityField.value = tempGravity.toPrecision(sigFigsField.value || tempGravity.toString().length) + " N";
						}
					}
					setFinalGravity();
				}
				setTempGravity();
			break;
			case (solveBigMassBtn.checked && !twoObjectsBtn.checked):
				function setTempBigMass(){
					var tempBigMass = (gravityField.value * Math.pow(centersDistance.value, 2)) / gravitationalConstant;
					function setFinalBigMass(){
						if(tempBigMass.toString().length > 5){
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || 5) + " kg";
						} else {
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || tempBigMass.toString().length) + " kg";
						}
					}
					setFinalBigMass();
				}
				setTempBigMass();
			break;
			case (solveRadiusBtn.checked && !twoObjectsBtn.checked):
				function setTempRadius(){
					var tempRadius = Math.sqrt(gravitationalConstant * bigMassField.value / gravityField.value);
					function setFinalRadius(){
						if(tempRadius.toString().length > 5){
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || 5) + " m";
						} else {
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || tempRadius.toString().length) + " m";
						}
					}
					setFinalRadius();
				}
				setTempRadius();
			break;
			case (solveForceBtn.checked):
				function setTempForce(){
					var tempForce = gravitationalConstant * bigMassField.value * smallMassField.value / Math.pow(centersDistance.value, 2);
					function setFinalForce(){
						if(tempForce.toString().length > 5){
							forceField.value = tempForce.toPrecision(sigFigsField.value || 5) + " N";
						} else {
							forceField.value = tempForce.toPrecision(sigFigsField.value || tempForce.toString().length) + " N";
						}
					}
					setFinalForce();
				}
				setTempForce();
			break;
			case (solveRadiusBtn.checked && twoObjectsBtn.checked):
				function setTempRadiusTwo(){
					var tempRadius = Math.sqrt(gravitationalConstant * bigMassField.value * smallMassField.value / forceField.value);
					function setFinalRadiusTwo(){
						if(tempRadius.toString().length > 5){
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || 5) + " m";
						} else {
							centersDistance.value = tempRadius.toPrecision(sigFigsField.value || tempRadius.toString().length) + " m";
						}
					}
					setFinalRadiusTwo();
				}
				setTempRadiusTwo();
			break;
			case (solveBigMassBtn.checked && twoObjectsBtn.checked):
				function setTempBigMassTwo(){
					var tempBigMass = forceField.value * (Math.pow(centersDistance.value, 2)) / (gravitationalConstant * smallMassField.value);
					function setFinalBigMassTwo(){
						if(tempBigMass.toString().length > 5){
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || 5) + " kg";
						} else {
							bigMassField.value = tempBigMass.toPrecision(sigFigsField.value || tempBigMass.toString().length) + " kg";
						}
					}
					setFinalBigMassTwo();
				}
				setTempBigMassTwo();
			break;
			case (solveSmallMassBtn.checked && twoObjectsBtn.checked):
				function setTempSmallMassTwo(){
					var tempSmallMass = forceField.value * (Math.pow(centersDistance.value, 2)) / (gravitationalConstant * bigMassField.value);
					function setFinalSmallMassTwo(){
						if(tempSmallMass.toString().length > 5){
							smallMassField.value = tempSmallMass.toPrecision(sigFigsField.value || 5) + " kg";
						} else {
							smallMassField.value = tempSmallMass.toPrecision(sigFigsField.value || 5) + " kg";
						}
					}
					setFinalSmallMassTwo();
				}
				setTempSmallMassTwo();
			break;
			default:
				alert("Select variable to solve for");
		}
	}


	function clearFunc(){
		forceField.placeholder = "Force (F)";
		gravityField.placeholder = "Gravity (g)";
		smallMassField.placeholder = "mass (m)";
		bigMassField.placeholder = "Mass (M)";
		centersDistance.placeholder = "radius (r)";
		sigFigsField.placeholder = "# of sigFigs (optional)";

		for(let i = 0; i < inputFields.length; i++){
			inputFields[i].value = "";
			if(inputFields[i].disabled){
				inputFields[i].disabled = false;
			}
			if(inputFields[i].classList.contains("yellow-outline")){
				inputFields[i].classList.remove("yellow-outline");
			}
		}
		for(let i = 0; i < objectBtns.length; i++){
			objectBtns[i].checked = false;
		}

		for(let i = 0; i < solveBtns.length; i++){
			if(solveBtns[i].checked){
				solveBtns[i].checked = false;
			}
			if(solveBtns[i].disabled){
				solveBtns[i].disabled = false;
			}
		}

		for(let i = 0; i < unitBtns.length; i++){
			if(unitBtns[i].checked){
				unitBtns[i].checked = false;
			}
			if(unitBtns[i].disabled){
				unitBtns[i].disabled = false;
			}
		}
		currentSlideIndex = 0;
		switchToSlide();
	}



	/*--- End of Topic Calculators ---*/


/*--- Move Equation Images ---*/
	for(let i = 0; i < slideBars.length; i++){
		slideBars[i].addEventListener("click", function(){
			currentSlideIndex = i;
			switchToSlide();
		});
	}

	function switchToSlide(){
		for(let i = 0; i < slideBars.length; i++){
			if(slideBars[i].classList.contains("active-indicator")){
				slideBars[i].classList.remove("active-indicator");
			}
		}
		innerImageContainer.style.left = -width * currentSlideIndex + "%";
		slideBars[currentSlideIndex].classList.add("active-indicator");
	}
	switchToSlide();

	function goToPrevSlide(){
		currentSlideIndex--;
		if(currentSlideIndex < 0){
			currentSlideIndex = slides.length - 1;
		}
		switchToSlide();
	}

	function goToNextSlide(){
		currentSlideIndex++;
		if(currentSlideIndex >= slides.length){
			currentSlideIndex = 0;
		}
		switchToSlide();
	}
/*--- End of Equation Images ---*/


/*--- Changing Module Images ---*/
var moduleImageContainer = document.getElementById("module-img-inner"),
	imageAndCap = document.getElementsByClassName("img-and-caption"),
	currentModuleImage = 0,
	prevBtn2 = document.getElementById("module-left-arrow"),
	nextBtn2 = document.getElementById("module-right-arrow"),
	moduleWidth = 100;

	prevBtn2.addEventListener("click", prevModuleImage);
	nextBtn2.addEventListener("click", nextModuleImage);

	function switchModuleImage(){
		moduleImageContainer.style.left = -moduleWidth * currentModuleImage + "%";
	}
	switchModuleImage();

	function prevModuleImage(){
		currentModuleImage--;
		if(currentModuleImage < 0){
			currentModuleImage = imageAndCap.length - 1;
		}
		switchModuleImage();
	}

	function nextModuleImage(){
		currentModuleImage++;
		if(currentModuleImage >= imageAndCap.length){
			currentModuleImage = 0;
		}
		switchModuleImage();
	}
/*--- End of Module Images ---*/

/*--- Close Modals ---*/
var closeModalBtns = document.querySelectorAll(".close-modal-btn");
closeModalBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    var $modalParent = $(this).parents(".modal");
    $modalParent.click();
  })
})

/*--- Toggle Img Caption Show/Hide ---*/
var imgCaptions = document.getElementsByClassName("img-caption");
var thirdPageImgs = document.querySelectorAll(".third-page-pics > img");
thirdPageImgs.forEach(function(image){
  image.addEventListener("click", function(e){
    var imgCaption = this.nextElementSibling;
    if(!e.target.matches(".img-caption")){
      imgCaption.classList.toggle("hide-caption");
    }
  })
})

/*--- Conversion Table JS ---*/
var userInput = document.getElementById('unit-input-field');
var unitOutput = document.getElementById('unit-output-field');
var unitC = document.getElementById('unit-converter');

if(userInput){
  userInput.addEventListener('input', convertUnit);
}
if(unitC){
  unitC.addEventListener('change', convertUnit);
}

function convertUnit()
{
  if (userInput.value < 0){
    alert("Please enter a value greater or equal to zero");
    userInput.value = "";
  } else {
    switch(true)
    {
      case document.getElementById('millimetersToCentimeters').selected:
        unitOutput.value = (userInput.value / 10) + " cm";
        break;
      case document.getElementById('centimetersToMillimeters').selected:
        unitOutput.value = (userInput.value * 10) + " mm";
        break;
      case document.getElementById('centimetersToMeters').selected:
        unitOutput.value = (userInput.value / 100) + " m";
        break;
      case document.getElementById('metersToCentimeters').selected:
        unitOutput.value = (userInput.value * 100) + " cm";
        break;
      case document.getElementById('metersTokilometers').selected:
        unitOutput.value = (userInput.value / 1000) + " km";
        break;
      case document.getElementById('kilometersToMeters').selected:
        unitOutput.value = (userInput.value * 1000) + " m";
        break;
      case document.getElementById('metersToMiles').selected:
        unitOutput.value = (userInput.value / 1609.34) + " mi";
        break;
      case document.getElementById('milesToMeters').selected:
        unitOutput.value = (userInput.value * 1609.34) + " m";
        break;
      case document.getElementById('milesToKilometers').selected:
        unitOutput.value = (userInput.value * 1.60934) + " km";
        break;
      case document.getElementById('kilometersToMiles').selected:
        unitOutput.value = (userInput.value * 0.621371) + " mi";
        break;
      case document.getElementById('feetToYards').selected:
        unitOutput.value = (userInput.value / 3) + " yds";
        break;
      case document.getElementById('yardsToFeet').selected:
        unitOutput.value = (userInput.value * 3) + " ft";
        break;
      case document.getElementById('feetToMeters').selected:
        unitOutput.value = (userInput.value * 0.3048) + " m";
        break;
      case document.getElementById('metersToFeet').selected:
        unitOutput.value = (userInput.value * 3.28084) + " ft";
        break;
      case document.getElementById('centimetersToInches').selected:
        unitOutput.value = (userInput.value * 0.393701) + " in";
        break;
      case document.getElementById('inchesToCentimeters').selected:
        unitOutput.value = (userInput.value * 2.54) + " cm";
        break;
      case document.getElementById('milligramsToGrams').selected:
        unitOutput.value = (userInput.value / 1000) + " g";
        break;
      case document.getElementById('gramsToMilligrams').selected:
        unitOutput.value = (userInput.value * 1000) + " mg";
        break;
      case document.getElementById('gramsToKilograms').selected:
        unitOutput.value = (userInput.value / 1000) + " kg";
        break;
      case document.getElementById('kilogramsToGrams').selected:
        unitOutput.value = (userInput.value * 1000) + " g";
        break;
      case document.getElementById('poundsToKilograms').selected:
        unitOutput.value = (userInput.value / 2.20462) + " kg";
        break;
      case document.getElementById('kilogramsToPounds').selected:
        unitOutput.value = (userInput.value * 2.20462) + " lbs";
        break;
      case document.getElementById('squareMetersToKilometersSquared').selected:
        unitOutput.value = (userInput.value / 1000000).toExponential(2) + " km²";
        break;
      case document.getElementById('kilometerSquaredToSquareMeters').selected:
        unitOutput.value = (userInput.value * 1000000).toExponential(2) + " m²";
        break;
    }
  }
}
