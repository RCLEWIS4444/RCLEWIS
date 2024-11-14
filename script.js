document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');

    // Function to handle form submission
    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the title and content of the new post
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Create a new post element
        const post = document.createElement('div');
        post.classList.add('post');
        
        // Add the title and content to the post
        post.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;

        // Append the new post to the post list
        postList.appendChild(post);

        // Clear the form fields
        postForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');

    // Load posts from localStorage if any
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.forEach(post => {
        displayPost(post.title, post.content);
    });

    // Function to display a post
    function displayPost(title, content) {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        postList.appendChild(post);
    }

    // Function to handle form submission
    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the title and content of the new post
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Save the post in localStorage
        const newPost = { title, content };
        savedPosts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(savedPosts));

        // Display the new post
        displayPost(title, content);

        // Clear the form fields
        postForm.reset();
    });
});
