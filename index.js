const tooltip = document.querySelector('.share-info');
const shareButton = document.querySelector('.share');

let isVisible = false;

function showTooltip() {
    if (tooltip instanceof HTMLElement) {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }
}

function hideTooltip() {
    if (tooltip instanceof HTMLElement) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    }
}

function onMount() {
    if (shareButton instanceof HTMLElement) {
        shareButton.addEventListener('click', () => {
            if (isVisible) {
                hideTooltip();
                isVisible = false
            } else {
                showTooltip();
                isVisible = true;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', onMount);