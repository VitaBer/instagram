console.log("Time to do the task");


function handlePostLike(event) {
    // Highlighting heart icon
    const iconElement = event.target;
    iconElement.classList.toggle('post-like');

    // Updating Likes counter
    const instaPostElement = iconElement.closest('.insta-post');
    const likeCountElement = instaPostElement.querySelector('.like-count');
    const oldLikeCount = likeCountElement.innerText;
    let newLikeCount = oldLikeCount === "1" ? 0 : 1;
    likeCountElement.innerText = newLikeCount;
}

function handleComment(event){
     //Enter presssed
    if (event.keyCode === 13) {
        const commentInputElement = event.target;
        const commentText = commentInputElement.value;
        const userName = prompt('Please enter your name');

        let newComment = document.createElement('div');
        newComment.className='comment-item';
        newComment.innerHTML = `<span class="comment-author">${userName}</span><span class="comment-text">${commentText}</span>`;
        
        const commentsSection = commentInputElement.closest('.insta-post-section');
        const commentsElement = commentsSection.querySelector('.comments');
        commentsElement.append(newComment);

        commentInputElement.value = '';
    }
}

// Adding like functionality on Heart icons
const heartIcons = document.getElementsByClassName('heart-icon');
for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener('click', handlePostLike);
}


// Adding comment functionality
const commentInputElements = document.getElementsByClassName('comment-input');
for (let i = 0; i < commentInputElements.length; i++){
    commentInputElements[i].addEventListener('keyup', handleComment);
}

