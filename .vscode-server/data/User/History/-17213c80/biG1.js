function addingEventListener() {
    const element = document.getElementById('button');
    if (element){
        element.addingEventListener('click',() => {console.log('element is called')})
    }
}
