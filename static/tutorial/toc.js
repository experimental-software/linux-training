


var toc = document.querySelector("#toc");
var content = document.querySelector("#content");

var sections = document.querySelectorAll("#content .card");
for (i = 0; i < sections.length; i++) {
  var sectionCount = i + 1;
  var section = sections[i];
  section.setAttribute('data-section', `${sectionCount}`);
  var sectionHeadline = section.querySelector("h2");
  sectionHeadline.setAttribute('data-section', `${sectionCount}`);
  var subject = sectionHeadline.innerText;
  
  // var anchor = document.createElement("a");
  // var anchorId = document.createAttribute("id");
  // // anchorId.value = `section-${sectionCount}`;
  // anchor.setAttributeNode(anchorId);
  // section.prepend(anchor);
  
  var anchorNew = document.createElement("div");
  anchorNew.innerHTML = anchorLink(sectionCount);
  content.insertBefore(anchorNew, section);
  
  var tocEntry = document.createElement("div");
  tocEntry.innerHTML = sectionLink(subject, sectionCount);
  toc.appendChild(tocEntry);
} 

// toc link
function sectionLink(subject, index) {
  return `
<div class="card" data-section="${index}">
  <a href="#section-${index}" onclick="setActive(${index})">
    <div class="card-body">
      ${subject}
    </div>
  </a>
</div>
  `;
}

function anchorLink(index) {
  return `
<div class="anchorContainer">
  <a id="section-${index}">&nbsp;</a>
</div>
  `
}

function setActive(sectionCount) {
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

var currentSection = 1;

setActive(currentSection);
