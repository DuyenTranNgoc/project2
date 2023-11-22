let likeButton = document.getElementById('likeButton');
let countElement = document.querySelector('.count');
let isLiked = false;
let likeCount = 0;

likeButton.addEventListener('click', () => {
    if (isLiked) {
        isLiked = false;
        likeButton.classList.remove('liked');
        likeCount--;
    } else {
        isLiked = true;
        likeButton.classList.add('liked');
        likeCount++;
    }

    countElement.textContent = likeCount;
});

const heart = document.querySelectorAll("#heart");

 for (let i = 0; i < heart.length; i++) {
     heart[i].addEventListener("click", function() {
       heart[i].classList.toggle("red");
     });
 }




