console.log("This is News Website");
// ac0501400dc64bbdae1fb5cf0bf0e2e2

let country = 'us';
let category = 'business';
let apiKey = 'ac0501400dc64bbdae1fb5cf0bf0e2e2'

let accordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        console.log("File is Fetched");
        console.log(json);

        let newsHtml = "";
        let articles = json.articles;
        console.log(articles);

        articles.forEach((element, index) => {
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;
        newsHtml += news;
        });
      accordion.innerHTML = newsHtml;  

    }
    else{
        console.log("Error as Occured");
    }
};


xhr.send();