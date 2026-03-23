const btnsend = document.getElementById('commentsendbutton')
    .addEventListener('click', function () {


        const inputFild = document.getElementById('commenttype');

        // 2nd step
        const tansfar = inputFild.value;

        const valuset = document.getElementById('commentbox');

        const cracetcommentElement = document.createElement('p');
        // console.log(cracetcommentElement);


        // style

        cracetcommentElement.classList.add('comment')
        cracetcommentElement.innerText = tansfar;

        const okodk = valuset.appendChild(cracetcommentElement)
        console.log(okodk)

        inputFild.value = '';

    })