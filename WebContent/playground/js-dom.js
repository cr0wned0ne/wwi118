
 function changeHeadline1() {
    const headline1 = document.getElementById("headline1");
    headline1.innerHTML = 'changed!';
 }

 function changeAllHeadlines() {
    const headlines = document.getElementsByTagName("h1");
    for (let i = 0; i < headlines.length; i++) {
        headlines[i].innerHTML = 'changed!';
    }
 }

 function changeAllGreenHeadlines() {
    const headlines = document.getElementsByClassName('greenHeadline');
    for (let i = 0; i < headlines.length; i++) {
        headlines[i].innerHTML = 'changed!';
    }
 }

 function hideAll() {
    const headlines = document.getElementsByTagName("h1");
    for (let i = 0; i < headlines.length; i++) {
        headlines[i].style.display = 'none';
    }
 }

 function showAll() {
    const headlines = document.getElementsByTagName("h1");
    for (let i = 0; i < headlines.length; i++) {
        headlines[i].style.display = 'block';
    }
 }


 function createHeadline() {
     const newElement = document.createElement('h1');
     newElement.innerHTML = "I am alive!";
     document.getElementsByTagName('body')[0].appendChild(newElement);
 }

 function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);


 document.getElementById('createButton').addEventListener('click', createHeadline);
 document.getElementById('createButton').addEventListener('click', function() {
     console.log("I do something else");
 });

