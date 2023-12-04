const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const linkContainer = document.getElementById('linkContainer');
const fileLink = document.getElementById('fileLink');

uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        // Simulate uploading logic (replace with your actual upload code)
        // In a real project, you would use a server to handle file uploads.
        // For simulation purposes, we'll just create a download link.
        simulateUpload(formData);
    }
});

function simulateUpload(formData) {
    // Simulate file upload and get a link
    const link = 'http://your-server.com/uploads/' + formData.get('file').name;

    // Display the link to the user
    fileLink.value = link;
    linkContainer.classList.remove('hidden');
}