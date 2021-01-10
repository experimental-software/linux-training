

var toc = document.querySelector("#toc");
var content = document.querySelector("#content");

var sections = document.querySelectorAll("#content .card");
for (i = 0; i < sections.length; i++) {
  var sectionCount = i + 1;
  var section = sections[i];
  var subject = section.querySelector("h2").innerText;
  
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
<div class="card">
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

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.intersectionRatio > 0) {
    console.log('in the view');
  } else {
    console.log('out of view');
  }
});
});

const sectionHeadlines = document.querySelectorAll('h2');
sectionHeadlines.forEach(section => observer.observe(section));
