document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openButton');
    const languageToggle = document.getElementById('languageToggle');
    const pageTitle = document.getElementById('pageTitle');
    const pageText = document.getElementById('pageText');
    const buttonEmailSubmit = document.getElementById('buttonEmailSubmit');

    let isEnglish = true;

    openButton.addEventListener('click', function() {
        window.location.href = 'login-page.html';
        window.open('login-page.html', '_self');
    });

    languageToggle.addEventListener('click', function() {

        if (isEnglish) {
            pageTitle.textContent = 'Willkommen!';
            pageText.textContent = 'Dies ist der Inhalt in der Sprache Deutsch.';
        } else {
            pageTitle.textContent = 'Welcome!';
            pageText.textContent = 'This is the content in English.';
        }
        console.log('toggle works');
        isEnglish = !isEnglish;
    });

    buttonEmailSubmit.addEventListener('click', function() {
        openEmailPopup();
    });

    function openEmailPopup() {
        const popupUrl = 'popup.html';
        const popupName = 'EmailPopup';
        const popupFeatures = 'width=500,height=300,resizable=yes,scrollbars=yes';

        window.open(popupUrl, popupName, popupFeatures);
    }
});



const questions = document.querySelectorAll('.question');

questions.forEach(question => {
question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
