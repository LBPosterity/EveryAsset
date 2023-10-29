const listingsData = [
  {
    type: "section-header",
    name: "Images"
  },
  {
      hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      type: "primary",
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
      type: "secondary",
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
      type: "secondary",
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
        type: "primary",
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
        type: "secondary",
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
        type: "secondary",
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
          <div class="title-wrapper">
            <h3 class="listing-name">${listing.name}</h3>
            ${listing.description ? `<p>${listing.description}</p>` : ""}

            ${listing.tagParentA ? `<div class="tag parent">${listing.tagParentA} 
                ${listing.tagChildA ? childTagsA(listing.tagChildA) : ""} 
            </div>` : ""}

            ${listing.tagParentB ? `<div class="tag parent">${listing.tagParentB} 
              ${listing.tagChildB ? childTagsB(listing.tagChildB) : ""} 
            </div>` : ""}
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

      $(".layout-control").click(function(){
        $("html").removeClass("layout");
        $(".style-control").removeClass("active");
        $(this).addClass("active");
      });

    });
  