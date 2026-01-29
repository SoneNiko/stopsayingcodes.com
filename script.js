// Simple JavaScript functionality for the site

document.addEventListener('DOMContentLoaded', function() {
    // Share button functionality
    const shareBtn = document.getElementById('shareBtn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            // Check if Web Share API is supported
            if (navigator.share) {
                navigator.share({
                    title: 'Stop Saying Codes',
                    text: 'Code is a mass noun. Stop saying "codes"!',
                    url: window.location.href
                })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing:', error));
            } else {
                // Fallback: copy URL to clipboard
                copyToClipboard(window.location.href);
                showCopyNotification();
            }
        });
    }
    
    // Add smooth scroll behavior for any future anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Helper function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Show notification when URL is copied
function showCopyNotification() {
    const notification = document.createElement('div');
    notification.textContent = 'URL copied to clipboard!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
