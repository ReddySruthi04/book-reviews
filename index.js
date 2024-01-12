

$(".image").addClass("trasf");
$(".content").addClass("trasf");

$(".content").click(function (e) {
    $(this).toggleClass("fullscreen");
})  
let data = null;
// Function to fetch and load JSON data
async function loadData() {
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error(`Failed to load JSON file. Status: ${response.status}`);
      }
  
      // Parse the JSON data
      const jsonData = await response.json();
      console.log(jsonData);
      data = jsonData;
      console.log(data.website);
      $(document).ready(function() {
        // Add the class to all 'a' elements inside '.links'
        // * Nav * //
        console.log(data.website.nav.buttons);
        $('.nav-name').text(data.website.nav["name"]);
        $('.logo img').attr('src',data.website.nav["logo"]);
        data.website.nav.buttons.forEach(element => {
          $('.links').append(`<a href="#${element.url}">${element.text}</a>`);
        });
      // * Home * //
      $('#home h1').text(data.website["home"]);
      // * Reviews * //
      data.website.reviews.forEach(review => {
        console.log(review);
        let info = `
        <div class="content">
        <div class="image">
          <div>
            <img src="${review.book["coverImage"]}" alt="" />
          </div>
        </div>
        <div class="info">
          <h2>${review.book["title"]}</h2>
          <h4>${review.book["author"]}</h4>
          <p>${review.review.introduction["overview"]}</p>
          <button class="button-86 ${(review.book["title"]+review.book["author"]).toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-')}" role="button">View more</button>
          <div class="fullscreen ${(review.book["title"]+review.book["author"]).toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-')}">
          <div>
          <h2>${review.book["title"]}</h2>
          <h4>${review.book["author"]}</h4>
          <p>${review.book["publishDate"]}</p>
          </div>
          <img src="${review.book["coverImage"]}" alt="" />
          </div>
          </div>
      </div>
      `;
      console.log(info);
      $('#latest').append(info);

      function printReviewInfo(reviewObj) {
        for (const key in reviewObj) {
            if (typeof reviewObj[key] === 'object' && reviewObj[key] !== null) {
                console.log(key);
                $(`#latest .fullscreen.${(review.book["title"]+review.book["author"]).toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-')}`).append(`<h4>${key}</h4>`);
                printReviewInfo(reviewObj[key]);
              } else {
                $(`#latest .fullscreen.${(review.book["title"]+review.book["author"]).toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-')}`).append(`<p>${reviewObj[key]}</p>`);
                console.log(key + ':', reviewObj[key]);
            }
        }
    }
      printReviewInfo(review.review);
        $('.fullscreen').hide();
          $('.button-86').click(function () {
              var fullscreenDiv = $(this).next('.fullscreen');
              fullscreenDiv.fadeIn();
          });
          $('.fullscreen h2').click(function () {
              // Find the corresponding .fullscreen div and fade it in
              var fullscreenDiv = $(this).closest('.fullscreen');
              fullscreenDiv.fadeOut();
          });
      
        
      });
      
      });



    } catch (error) {
      console.error(error.message);
    }
  }
  loadData();


