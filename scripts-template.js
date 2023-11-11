
  function childTagsA(childTagsA) {
    return `
      ${childTagsA.map(tags => `<div class="tag">${tags}</div>`).join("")}
    `;
  }

  function childTagsB(childTagsB) {
    return `
      ${childTagsB.map(tags => `<div class="tag">${tags}</div>`).join("")}
    `;
  }

  function childTagsB(childTagsC) {
    return `
      ${childTagsC.map(tags => `<div class="tag">${tags}</div>`).join("")}
    `;
  }

  
  function listingTemplate(listing) {
    return `
      <div class="listing-wrapper ${listing.type}">
        <div class="header-wrapper">
          <div class="hero-wrapper">
            ${listing.hero ? `<img class="listing-hero" src="${listing.hero}">` : ""}
          </div>
          <div class="content-wrapper">
            <div class="title-wrapper">
              <div class="title">
                <i data-feather="image" class="image"></i>
                <h3 class="listing-name">${listing.name}</h3>
              </div>
              <button class="expand-this">Expand</button>
            </div>
            <div class="description-wrapper">
            ${listing.description ? `<p>${listing.description}</p>` : ""}
            </div>

            <div class="tags-wrapper">
              ${listing.tagParentA ? `<div class="tag parent"> <i data-feather="tag"></i> ${listing.tagParentA} 
                  ${listing.tagChildA ? childTagsA(listing.tagChildA) : ""} 
              </div>` : ""}

              ${listing.tagParentB ? `<div class="tag parent"> <i data-feather="tag"></i> ${listing.tagParentB} 
                ${listing.tagChildB ? childTagsB(listing.tagChildB) : ""} 
              </div>` : ""}
            </div>
            
          </div>
        </div>

        <div class="details-wrapper">
          <h4>Details</h4>
          ${ listing.examples ? `<img class="listing-hero" src="${listing.examples}">` : ""}
        </div>
      
      </div>
    `;
  }
  

  document.getElementById("list-image-content-parent").innerHTML = `${DataImageContentParent.map(listingTemplate).join("")}`;
  document.getElementById("list-image-content").innerHTML = `${DataImageContent.map(listingTemplate).join("")}`;

  document.getElementById("list-logo-aspect-parent").innerHTML = `${DataLogoAspectParent.map(listingTemplate).join("")}`;
  document.getElementById("list-logo-aspect").innerHTML = `${DataLogoAspect.map(listingTemplate).join("")}`;

  
