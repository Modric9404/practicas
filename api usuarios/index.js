
fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        for(rol of data){
            document.getElementById("box").innerHTML +=`
            <div class="card">
            <div class="left">
                <div class="line"><i></i> <div class="username text">${rol['username']}</div></div>
                <div class="line"><i></i> <div class="email text">${rol['email']}</div></div>
                <div class="line"><i></i> <div class="phone text">${rol['phone']}</div></div>
                <div class="line"><i></i> <div class="website text">${rol['website']}</div></div>
            </div>
            <div class="right">
                <div class="id">#${rol['id']}</div>
                <div class="name">${rol['name']}</div>
                <div class="address">${rol['company']['name']}</div>
                <div class="street">${rol['address']['street']}</div>
                <div class="suite">${rol['address']['suite']}</div>
                <div class="city">${rol['address']['city']}</div>
            </div>
        </div> 
         `;
       }

      });
