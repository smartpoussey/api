document.addEventListener('DOMContentLoaded',function(){

    const searchBtn=document.getElementById('searchBtn');
    const searchInput=document.getElementById('searchInput');

    searchBtn.addEventListener("click",function(){
        const searchTerm = searchInput.value.trim();
        if (searchTerm === '') {
            alert('Please enter a search term');
            return;
        }
                fetch( https://imdb8.p.rapidapi.com/auto-complete?q=${searchTerm},{

                "method": 'GET',
                "headers": {
                    'X-RapidAPI-Key': '8f2753851cmshda783290698aa48p1689fdjsn883718db32b9',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
                })

            // returning the resoonse in json
            
            .then(response => response.json())
            //now we have our data , we have to use these -> have list in array put it in html 
            //.then(data => console.log(data))
            .then(data => {
                const displayMovies = document.querySelector('.display_movies');
                displayMovies.innerHTML = ''; // Clear previous results

                const list = data.d;

                
                list.map((item) => {
                    //console.log(item)
                    //if we see the values in item, we see l->title , i->imgae resource , now we have to fetch these

                    const name=item.l;
                    const poster=item.i.imageUrl;
                    const movie=<li><img src="${poster}"> <h2>${name}</h2></li>

                    //now add these list to the html page -> in class movies
                    document.querySelector('.display_movies').innerHTML+=movie;
                })
            })
            .catch(err =>{
                console.error(err);
            })

    });
    

});
