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
