function display (selected)
  {
  if (selected == 'mathsoc')
    {
    texttoshow = "the text related to mathsoc should be displayed";
    titletoshow = "Website Developer";
    languagestoshow = "Wordpress • HTML • CSS • Figma";
    }
  else if (selected == 'pump')
    {
    texttoshow = "Text related to 2nd PuMP.";
    titletoshow = "Conferences Lead and Tech Team Developer";
    languagestoshow = "HTML • Figma • GitHub";
    }
  else if (selected == 'camp-explore')
  {
      texttoshow="Text related to camp explore.";
      titletoshow = "Student Leader";
      languagestoshow = "Scratch • HTML • JavaScript";
  }
  else if (selected =='fffto')
  {
      texttoshow="Text related to FFFTO";
      titletoshow = "Website Designer";
      languagestoshow = "Wix";
  }
  else if (selected == 'stuco')
  {
      texttoshow="Text related to student council";
      titletoshow = "President and Executive";
      languagestoshow = "Oct 2017 - June 2021";
  }
  else if (selected == 'dance')
  {
      texttoshow="Text related to dance";
      titletoshow = "Dance Teacher";
      languagestoshow = "Dec 2016 - Aug 2021";
  }
  document.getElementById("thetext").innerText = texttoshow;
  document.getElementById("experience-title").innerText = titletoshow;
  document.getElementById("languages").innerText = languagestoshow;
  }

  let active = "mathsoc";

  function changecl (target) {
    if (target == 'mathsoc'){
      if(active != "mathsoc"){
      document.getElementById("mathsoc").classList.add("active");
      document.getElementById(active).classList.remove("active");
      active = "mathsoc";
      }
    }

    if (target == 'pump'){
      if(active !="pump"){
      document.getElementById("pump").classList.add("active");
      document.getElementById(active).classList.remove("active");
      active = "pump";
      }
    }

    if (target == 'camp-explore'){
      if(active!="camp-explore"){
      document.getElementById("camp-explore").classList.add("active");
      document.getElementById(active).classList.remove("active");
      active = "camp-explore";
      }
    }

    if (target == 'fffto'){
      if(active!="fffto"){
      document.getElementById("fffto").classList.add("active");
      document.getElementById(active).classList.remove("active");
      active = "fffto";
      }
    }

    if (target == 'stuco'){
      if(active!="stuco"){
      document.getElementById("stuco").classList.add("active");
      document.getElementById(active).classList.remove("active");
      active = "stuco";
      }
    }

    if (target == 'dance'){
      if(active!="dance"){
      document.getElementById("dance").classList.add("active");
      document.getElementById(active).classList.remove("active");
      active = "dance";
      }
    }

  }