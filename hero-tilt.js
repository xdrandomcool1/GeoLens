document.addEventListener('DOMContentLoaded', () => {
    const appWindow = document.querySelector('.app-window');

    if (appWindow) {
        appWindow.addEventListener('mousemove', (e) => {
            const rect = appWindow.getBoundingClientRect();
            // Calculate mouse position relative to the element center
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation (max 7 degrees for more visible effect)
            // Rotate Y based on X position (left side -> rotate left, right side -> rotate right)
            const rotateY = ((x - centerX) / centerX) * 7;

            // Rotate X based on Y position (top side -> rotate up, bottom side -> rotate down)
            // Note: Positive RotateX tilts top BACK, so we need to inverse Y logic for "looking" at it
            const rotateX = ((y - centerY) / centerY) * -7;

            // Apply transform
            appWindow.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        appWindow.addEventListener('mouseleave', () => {
            // Smooth reset
            appWindow.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    }
});
