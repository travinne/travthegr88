function cherry() {
    const words = document.getElementById('button');
    if(words){
        words.addingEventListener('click',() => {console.log('i was clicked')})
    }}