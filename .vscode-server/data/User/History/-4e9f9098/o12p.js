<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1 id="title"></h1>

    <div id="menu"></div>

    <div id="ramen-details"></div>
        <img id="image-ramen" src="" alt="">
        <h2 id="name-ramen"></h2>
        <h3 id="restaurant-ramen"></h3>
        <p><strong>rating</strong> <span id="rating-ramen"></span></p> 
        <p><strong>comment</strong> <span id="comment-ramen"></span></p> 
        
    <div>
        <form id="new-ramen">
            <h3>ADD YOUR OWN RAMEN</h3>
            <input type="url" id="new-image" name="image" placeholder="image Url"required>
            <input type="text" id="new-name" name="name" placeholder="name"required>
            <input type="text" id="new-restaurant" name="restaurant" placeholder="restaurant"required>
            <input type="text"  id="new-rating" name="rating" placeholder="rating"required>
            <input type="text"  id="new-comment" name="comment" placeholder="comment"required>
            <button type="submit">CREATE</button>
        </form>
    </div>    
    
    
</body>
</html>