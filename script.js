// script.js
document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector('.generate-btn');
    const modelSelect = document.getElementById('model-select');
    const promptInput = document.getElementById('prompt');
    const imageDisplay = document.getElementById('image');
    const downloadLink = document.getElementById('download-link');
    const loadingIndicator = document.getElementById('loading');
    const errorIndicator = document.getElementById('error');

    generateButton.addEventListener('click', async function() {
        const prompt = promptInput.value;
        const model = modelSelect.value;
        errorIndicator.style.display = 'none';
        loadingIndicator.style.display = 'block';
        imageDisplay.style.display = 'none';

        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt, model: model}),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            
            const data = await response.json();
            loadingIndicator.style.display = 'none';
            imageDisplay.src = 'data:image/png;base64,' + data.image_base64;
            imageDisplay.style.display = 'block';

            downloadLink.href = imageDisplay.src;
            downloadLink.download = 'generated-image.png';
            downloadLink.style.display = 'block';
        } catch (error) {
            console.error('Error:', error);
            loadingIndicator.style.display = 'none';
            errorIndicator.style.display = 'block';
        }
    });
});
