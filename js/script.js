
const init = function() {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-submit').addEventListener('click', send);
}

const reset = function(event) {
    event.preventDefault();
    console.log("hello world")
    document.getElementById('meme-form').reset();
}

const send = function(e) {
    e.preventDefault()

    //Grab all the values from form
    topText = document.getElementById('top-text').value;
    bottomText = document.getElementById('btm-text').value;
    memeLink = document.getElementById('img-link').value

    //create new elements
    var newDiv = document.createElement('div');
    var topTextClass = document.createElement('p');
    var bottomTextClass = document.createElement('p');
    const image = document.createElement('img');
    image.src = memeLink;
    image.height = 200;
    image.width = 200;

    newDiv.style.position = 'relative';
    newDiv.className = 'flexbox-container';
    /** 
    newDiv.onclick = function() {
        console.log('div clicked');
        return
    }
    **/
    newDiv.addEventListener('click', remove);

    topTextClass.style.position = 'absolute';
    topTextClass.style.top = '20px';
    topTextClass.style.textAlign = 'center';

    bottomTextClass.style.position = 'absolute';
    bottomTextClass.style.bottom = '20px';
    bottomTextClass.style.textAlign = 'center';

    //create Each Node
    var topTextContent = document.createTextNode(topText)
    var bottomTextContent = document.createTextNode(bottomText)

    //attach the text nodes to new elements
    topTextClass.appendChild(topTextContent);
    bottomTextClass.appendChild(bottomTextContent);


    newDiv.appendChild(image);
    newDiv.appendChild(topTextClass);
    newDiv.appendChild(bottomTextClass);

    document.body.appendChild(newDiv)

    //

    document.getElementById('meme-form').reset();
}



function remove() {
    console.log('remove was clicked and the element is: ' + this);
    var element = this;
    element.remove();
} 





document.addEventListener('DOMContentLoaded', init);

