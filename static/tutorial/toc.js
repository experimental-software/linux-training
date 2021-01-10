

var toc = document.querySelector("#toc");
var content = document.querySelector("#content");

var sections = document.querySelectorAll("#content .card");
for (i = 0; i < sections.length; i++) {
  var sectionCount = i + 1;
  var section = sections[i];
  var sectionHeadline = section.querySelector("h2");
  sectionHeadline.setAttribute('data-section', `${sectionCount}`);
  var subject = sectionHeadline.innerText;
  
  var anchor = document.createElement("a");
  var anchorId = document.createAttribute("id");
  // anchorId.value = `section-${sectionCount}`;
  anchor.setAttributeNode(anchorId);
  section.prepend(anchor);
  
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
  <a href="#section-${index}">
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
  for (i = 0; i <= sectionLinks.length; i++) {
    var sectionLink = sectionLinks[i];
    if (i + 1 <= sectionCount) {
      sectionLink.classList.add("visited");
    } else {
      sectionLink.classList.remove("visited");
    }
    if (i + 1 === sectionCount) {
      sectionLink.classList.add("current");
    } else {
      sectionLink.classList.remove("current");
    }
  }
}

var observer = new IntersectionObserver((entries, observer) => {
    entries.reverse().forEach(entry => {
    if (entry.intersectionRatio > 0) {
      var sectionHeadline = entry.target;
      setActive(parseInt(sectionHeadline.getAttribute('data-section')))
    }
  });
});

const sectionHeadlines = document.querySelectorAll('h2');
sectionHeadlines.forEach(section => observer.observe(section));
