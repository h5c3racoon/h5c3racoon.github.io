searchButton.addEventListener('click', () => {

        let inputText = searchInput.value;
        searchInput.value = '';

        let items = [];
        list.innerHTML = '';

        messages.innerHTML = `
          <div>load data ...</div>
          <div class="preloader lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        `;

        let fetchUrl = 'https://www.reddit.com/r/' + inputText + '.json?limit=100';

        fetch(fetchUrl)
        .then(response => {
             return response.json();
        })
        .then(data => {

            for(let item in data.data.children) {
                let oneItem = data.data.children[item].data
                if(oneItem.url.indexOf('.jpg') !== -1 && oneItem.url.indexOf('i.imgur.com') == -1) {
                    items.push(oneItem);
                }
            }

            messages.innerHTML = 'result: <span class="blue">' + items.length + '</span>'

            items.map(item => {
              list.innerHTML += `
                <div class="nItem">
                  <div class="nAuthor">
                    <a href="https://www.reddit.com/user/${item.author}" target="_blank">${item.author}</a>
                  </div>
                  <div class="nContent">
                    <div class="nAttachImg">
                      <a href="${item.url}" target="_blank">
                        <img src="${item.thumbnail}" />
                      </a>
                    </div>
                    <div class="nTextContent">${item.title}</div>
                  </div>
                </div>
              `
            });

        })
        .catch(error => {
            list.innerHTML = ''
            messages.innerHTML = '"' + inputText + '", not fount'
        })

});
