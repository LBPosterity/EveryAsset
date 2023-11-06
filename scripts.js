const listingsData = [
  {
    type: "section-header",
    name: "Images"
  },
  {
      hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      type: "image primary",
      name: "Listing Example A",
      description: "my description goes here",
      tagParentA: "Parent Tag A",
      tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
      tagParentB: "Parent Tag B",
      tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
      examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      type: "image secondary",
      name: "Listing Example B",
      description: "my description goes here",
      tagParentA: "Parent Tag A",
      tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
      tagParentB: "Parent Tag B",
      tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
      examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      type: "image secondary",
      name: "Listing Example C",
      description: "my description goes here",
      tagParentA: "Parent Tag A",
      tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
      tagParentB: "Parent Tag B",
      tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
      examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      type: "section-header",
      name: "Colours"
    },
    {
        hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        type: "colour primary",
        name: "Listing Example D",
        description: "my description goes here",
        tagParentA: "Parent Tag A",
        tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
        tagParentB: "Parent Tag B",
        tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
        examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
      },
      {
        hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        type: "colour secondary",
        name: "Listing Example D",
        description: "my description goes here",
        tagParentA: "Parent Tag A",
        tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
        tagParentB: "Parent Tag B",
        tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
        examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
      },
      {
        hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        type: "colour secondary",
        name: "Listing Example E",
        description: "my description goes here",
        tagParentA: "Parent Tag A",
        tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
        tagParentB: "Parent Tag B",
        tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
        examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
      }
  ];
  
  

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
  

  document.getElementById("app").innerHTML = `${listingsData.map(listingTemplate).join("")}`;

  
    // Main Menu Style Dropdown ----------------------

$(document).ready(function (){


  $(".layout-control").click( function() {

    $("html").removeClass("layout-default layout-compact layout-expanded");
    $(".layout-control").removeClass("active");

        var newwclass = $(this).attr("id");
     $("html").toggleClass(newwclass);
     $(this).addClass("active");
   });

    $(".expand-this").click(function(){
      $(this).closest(".listing-wrapper").toggleClass("expanded");
      $(this).toggleClass("active");
      $("html").toggleClass("no-scroll");
    });

});
  