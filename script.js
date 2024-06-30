function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation_name = document.getElementById("new_recommendation_name");
  let recommendation_message = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation_message.value != null && recommendation_message.value.trim() != "") {
    if (recommendation_name.value != null && recommendation_name.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
      
      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>"+ recommendation_name.value + ' is ' + recommendation_message.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation_name.value = ""
      recommendation_message.value = "";
      showPopup(true);
    }
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

