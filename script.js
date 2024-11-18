// Functionality for the download button
document.getElementById('downloadBtn').addEventListener('click', () => {
    const textContent = `Welcome to B0P!

This is your custom downloadable file.
You can use this feature to create dynamic content or logs.`;

    // Create a Blob for the content
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'B0P_log.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
