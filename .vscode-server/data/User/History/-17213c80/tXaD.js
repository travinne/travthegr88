function addingEventListener() {
    const words = document.getElementById('button');
    if (words){
        words.addingEventListener('click',() => {alert('i was clicked')})
    }
}
