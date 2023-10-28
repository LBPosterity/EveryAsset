const listingsData = [
    {
      name: "Listing Example A",
      description: "my description goes here",
      tagParentA: "Parent Tag A",
      tagChildA: ["Child Tag A", "Child Tag B", "Child Tag C"],
      tagParentB: "Parent Tag B",
      tagChildB: ["Child Tag A", "Child Tag B", "Child Tag C"],
      hero: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      examples: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
    },
    {
      name: "Barksalot",
      hero: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      tagChildA: ["tuna", "catnip", "sdfsdf"],
      hero: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
  
  
  function childTagsA(childTagsA) {
    return `
      ${childTagsA.map(tags => `<div>${tags}</div>`).join("")}
    `;
  }

  function childTagsB(childTagsB) {
    return `
      ${childTagsB.map(tags => `<div>${tags}</div>`).join("")}
    `;
  }
  
  function listingTemplate(listing) {
    return `
      <div class="animal">
        <img class="listing-hero" src="${listing.hero}">
        <h2 class="listing-name">${listing.name}</h2>
        ${listing.description ? `<p>${listing.description}</p>` : ""}

        ${listing.tagParentA ? `<div>${listing.tagParentA} 
            ${listing.tagChildA ? childTagsA(listing.tagChildA) : ""} 
        </div>` : ""}

        ${listing.tagParentB ? `<div>${listing.tagParentB} 
          ${listing.tagChildB ? childTagsB(listing.tagChildB) : ""} 
        </div>` : ""}

        ${ listing.examples ? `<img class="listing-hero" src="${listing.examples}">` : ""}
      
      </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">listings (${listingsData.length} results)</h1>
    ${listingsData.map(listingTemplate).join("")}
    <p class="footer">These ${listingsData.length} listings were added recently. Check back soon for updates.</p>
  `;
  