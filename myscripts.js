function display (selected)
  {
  if (selected == 'mathsoc')
    {
    texttoshow = "The University of Waterloo Mathematics Society is the governing body representing all students in the faculty of math. As one of only two website developers, I was responsible for regular updates to our website, including updating pictures and links. Along with my fellow designer, I also redesigned our home page design, creating a wireframe using Figma and communicating with executive members of the council every step of the way. Implementing this design required some custom HTML and CSS code.";
    titletoshow = "Website Developer";
    languagestoshow = "Wordpress • HTML • CSS • Figma";
    }
  else if (selected == 'pump')
    {
    texttoshow = "Prospective Medical Professionals (PuMP) is a youth-led, non-profit organization dedicated to connecting under-served students across Canada to resources for pursuing a medical career. As part of the tech team, I designed the UI/UX for our new Sponsors page from scratch using Figma, and used HTML to redesign and transform our WordPress site to code. We are currently preparing for launch. As the Conferences Lead for the national logistics team, I led and organized 15 logistics officers in hosting 5 conferences averaging 150 attendees each.";
    titletoshow = "Conferences Lead and Tech Team Developer";
    languagestoshow = "HTML • Figma • GitHub • Trello";
    }
  else if (selected == 'camp-explore')
  {
      texttoshow="Camp Explore is a summer camp run by the Peel District School Board, dedicated to introducing children from under-served communities to programming. I directly supported 60 middle school students to teach them basics of Scratch, JavaScript, and HTML/CSS, enabling them to independently create their final projects. I also independently planned and led a code-a-long workshop:";
      titletoshow = "Student Leader";
      languagestoshow = "Scratch • HTML • JavaScript";
  }
  else if (selected =='fffto')
  {
      texttoshow="Fridays for Future Toronto (FFFTO) is the Toronto-based chapter of the international climate movement led by youth. As the primary web designer, I led a website theme redesign, leading to 140% increased web traffic (over 4400 visitors). I am also responsible for regular updates and maintenance, including pictures and events. This experience has taught me a lot about creating aesthetically pleasing yet efficient website designs.";
      titletoshow = "Website Designer";
      languagestoshow = "Wix";
  }
  else if (selected == 'stuco')
  {
      texttoshow="Throughout high school, I actively served on my school’s student activity council as a grade 9 representative, secretary, head of activities, and president. I conducted weekly interviews to gain feedback, helped run events including food drives, mental health workshops, and semi-formals, organized our emails and documents, and even founded a charitable colour run. As president, I led executives to host a conference for grade 9 students and a film showcase amidst an online school year.";
      titletoshow = "President and Executive";
      languagestoshow = "Oct 2017 - June 2021";
  }
  else if (selected == 'dance')
  {
      texttoshow="Fun fact: I love to dance and have taken Chinese traditional dance lessons for 14 years! As a result of my improvement and dedication to dance, I was offered a teaching position at my dance studio. Over 5 years, I taught over 60 students between the ages of 3-9, both as a teaching assistant and an independent teacher. I was responsible for preparing new weekly exercises to teach, leading my students through warm-ups, stretching, and gymnastics, and even prepared my classes for a few dance performances. This has been one of my most fulfilling experiences to date.";
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