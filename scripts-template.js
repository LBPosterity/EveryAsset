
  function childTagsA(childTagsA) {
    return `
      ${childTagsA.map(tags => `<li>${tags}</li>`).join("")}
    `;
  }

  function childTagsB(childTagsB) {
    return `
      ${childTagsB.map(tags => `<li>${tags}<li>`).join("")}
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
                <i data-feather="${listing.icon}"></i>
                <h5 class="listing-name">${listing.name}</h5>
              </div>
              <button class="expand-this">View<i data-feather="maximize-2"></i></button>
            </div>
            <div class="description-wrapper">
            ${listing.description ? `<p>${listing.description}</p>` : ""}
            </div>
            
          </div>
        </div>

        <div class="details-wrapper">
          <h4>Details</h4>
          <div class="details-content-wrapper">


            <div>
              <p><i data-feather="check"></i> Consider</p>
              <ul class="details">
                  ${ listing.DetailDo ? childTagsA(listing.DetailDo) : ""} 
              </ul>
            </div>

            <div>
              <p><i data-feather="x"></i> Avoid</p>
              <ul class="details">
                ${ listing.DetailDont ? childTagsA(listing.DetailDont) : ""} 
              </ul>
            </div>

            <div>
              ${ listing.examples ? `
              <p>Examples</p>
              <img class="example-hero" src="${listing.examples}">
              ` : ""}
            </div>

          
          
          </div>
        </div>

      </div>
    `;
  }
  

  document.getElementById("list-image-full").innerHTML = `${DataImageFull.map(listingTemplate).join("")}`;
  document.getElementById("list-image-transparent").innerHTML = `${DataImageTransparent.map(listingTemplate).join("")}`;
  document.getElementById("list-image-colour").innerHTML = `${DataImageColour.map(listingTemplate).join("")}`;

  document.getElementById("list-colours").innerHTML = `${DataColours.map(listingTemplate).join("")}`;

  document.getElementById("list-logo-aspect").innerHTML = `${DataLogoAspect.map(listingTemplate).join("")}`;
  document.getElementById("list-logo-detail").innerHTML = `${DataLogoDetail.map(listingTemplate).join("")}`;

  document.getElementById("list-type").innerHTML = `${DataType.map(listingTemplate).join("")}`;



  
