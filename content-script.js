var css = '.favorite-image.favorited, .favorite-image:active { color: #85BF25 !important; }',
    head = document.head,
    style = document.createElement('style');

style.appendChild(document.createTextNode(css));
head.appendChild(style);
