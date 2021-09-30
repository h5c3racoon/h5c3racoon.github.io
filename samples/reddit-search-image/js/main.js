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

            messages.innerHTML = `
              <div class="result">
                <div class="total">
                  result: <span class="blue"> ${items.length} </span>
                </div>
                <div class="grid">
                  <span id="gridSwap" onclick="gridSwap()">image view</span>
                </div>
              </div>
            `;

            items.map((item, index) => {
              list.innerHTML += `
                <div class="nItem">
                  <span class="total">${index + 1} / ${items.length}</span>
                  <div class="nContent">
                    <div class="nAttachImg">
                      <a href="${item.url}" target="_blank">
                        <img src="${item.thumbnail}" />
                      </a>
                    </div>
                    <div class="nTextContent">${item.title}</div>
                  </div>
                  <div class="nAuthor">
                    <a href="https://www.reddit.com/user/${item.author}" target="_blank">${item.author}</a>
                  </div>
                </div>
              `
            });

        })
        .catch(error => {
            list.innerHTML = ''
            messages.innerHTML = '"' + inputText + '", not fount'
        })

        gridSwap = () => {
          let v = document.getElementById('gridSwap').innerText;
          if(v === 'image view') {
            document.getElementById('gridSwap').innerHTML = 'cards view';
            // rebuild - image view
            list.innerHTML = '';
            items.map((item, index) => {
              list.innerHTML += `
                <div class="onlyImgCard">
                  <span class="total">${index + 1} / ${items.length}</span>
                  <a href="${item.url}" target="_blank">
                    <img src="${item.url}" />
                  </a>
                  <span class="author">
                    <a href="https://www.reddit.com/user/${item.author}" target="_blank">${item.author}</a>
                  </span>
                </div>
              `;
            })
          }
          if(v === 'cards view') {
            document.getElementById('gridSwap').innerHTML = 'image view';
            // rebuild - cards view
            list.innerHTML = '';
            items.map(item => {
              list.innerHTML += `
                <div class="nItem">
                <span class="total">${index + 1} / ${items.length}</span>
                  <div class="nContent">
                    <div class="nAttachImg">
                      <a href="${item.url}" target="_blank">
                        <img src="${item.thumbnail}" />
                      </a>
                    </div>
                    <div class="nTextContent">${item.title}</div>
                  </div>
                  <div class="nAuthor">
                    <a href="https://www.reddit.com/user/${item.author}" target="_blank">${item.author}</a>
                  </div>
                </div>
              `
            });
          }
        }

});
