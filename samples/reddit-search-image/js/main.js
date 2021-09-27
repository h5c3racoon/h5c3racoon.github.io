searchButton.addEventListener('click', () => {

        let inputText = searchInput.value
        searchInput.value = ''

        let items = []
        list.innerHTML = ''

        messages.innerHTML = '<div>load data ...</div>' +
                             '<div class="preloader lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'

        let fetchUrl = 'https://www.reddit.com/r/' + inputText + '.json?limit=100'

        fetch(fetchUrl)
        .then(response => {
             return response.json();
        })
        .then(data => {

            for(let item in data.data.children) {
                let oneItem = data.data.children[item].data
                if(oneItem.url.indexOf('.jpg') !== -1 && oneItem.url.indexOf('i.imgur.com') == -1) {
                    items.push(oneItem)
                }
            }

            messages.innerHTML = 'result: <span class="blue">' + items.length + '</span>'

            for(item in items) {
                list.innerHTML += '<div class="item">' +
                                        '<div class="title">' + items[item].title + '</div>' +
                                        '<div class="preview">' +
                                            '<a href="' + items[item].url + '" target="_blank">' +
                                                '<img src="' + items[item].thumbnail + '">' +
                                            '</a>' +
                                        '</div>' +
                                        '<div class="author">' +
                                            '<a href="https://www.reddit.com/user/' + items[item].author + '" target="_blank">' +
                                                items[item].author +
                                            '</a>'
                                        '</div>' +
                                    '</div>'
            }
        })
        .catch(error => {
            list.innerHTML = ''
            messages.innerHTML = '"' + inputText + '", not fount'
        })

})
