function display (selected)
  {
  if (selected == 'mathsoc')
    {
    texttoshow = "the text related to mathsoc should be displayed";
    }
  else if (selected == 'pump')
    {
    texttoshow = "Text related to 2nd PuMP.";
    }
  else if (selected == 'camp-explore')
  {
      texttoshow="Text related to camp explore.";
  }
  else if (selected =='fffto')
  {
      texttoshow="Text related to FFFTO";
  }
  else if (selected == 'stuco')
  {
      texttoshow="Text related to student council";
  }
  else if (selected == 'dance')
  {
      texttoshow="Text related to dance";
  }
  document.getElementById("thetext").innerHTML = texttoshow;
  }