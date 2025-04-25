const shareButton = document.querySelector('.share-icon');
const shareInfo = document.querySelector('.share-info');
const shareLinks = document.querySelectorAll('.share-info img');

let isActive = false;

function toggleShowInfo() {
    if (!(shareInfo instanceof HTMLElement)) {
        return;
    }

    
    shareButton.classList.toggle('active');
    if (isActive) {
        shareInfo.style.visibility = 'hidden';
        shareInfo.style.opacity = '0';

        isActive = false;
    } else {
        shareInfo.style.visibility = 'visible';
        shareInfo.style.opacity = '1';

        isActive = true;
    }
}

function onMount() {
    if (!(shareButton instanceof HTMLElement)) {
        return;
    }

    shareButton.addEventListener('click', toggleShowInfo);
    shareLinks.forEach(shareLink => {
        if (shareLink instanceof HTMLElement) {
            shareLink.addEventListener('click', toggleShowInfo);
        }
    });
}

document.addEventListener('DOMContentLoaded', onMount);