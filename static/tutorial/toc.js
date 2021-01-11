


var toc = document.querySelector("#toc");
var content = document.querySelector("#content");


function setActive(sectionCount) {
  location.hash = "#section-" + sectionCount;
  currentSection = sectionCount;
  var sectionLinks = document.querySelectorAll("#toc .card");
  for (i = 0; i < sectionLinks.length; i++) {
    var sectionLink = sectionLinks[i];
    if (i + 1 <= sectionCount) {
      sectionLink.classList.add("visited");
    } else {
      sectionLink.classList.remove("visited");
    }
    if (i + 1 === sectionCount) {
      sectionLink.classList.add("current");
    } else {
      if (sectionLink) {
        sectionLink.classList.remove("current");
      }
    }
  }
  var sections = document.querySelectorAll("#content .card");
  for (i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (i + 1 === sectionCount) {
      section.classList.add("current");
    } else {
      section.classList.remove("current");
    }
  }
  var anchorContainers = document.querySelectorAll(".anchorContainer");
  for (i = 0; i < anchorContainers.length; i++) {
    var anchorContainer = anchorContainers[i];
    if (i + 1 === sectionCount) {
      anchorContainer.classList.add("current");
    } else {
      anchorContainer.classList.remove("current");
    }
  }
}

function goToPreviousSection() {
  if (currentSection > 1) {
    currentSection--;
    setActive(currentSection);
  }
}

function goToNextSection() {
  var numberOfSections = document.querySelectorAll("#toc .card").length;
  if (currentSection < numberOfSections) {
    currentSection++;
    setActive(currentSection);
  }
}

var currentSection = 1;

setActive(currentSection);
