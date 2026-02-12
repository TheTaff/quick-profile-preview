// Получаем элементы формы
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const githubInput = document.getElementById('githubInput');
const themeBtn = document.getElementById('themeBtn');

// Получаем элементы карточки
const cardName = document.getElementById('cardName');
const cardJob = document.getElementById('cardJob');
const cardGithub = document.getElementById('cardGithub');
const avatar = document.getElementById('avatar');
const card = document.getElementById('card');

// Обновление имени
nameInput.addEventListener('input', () => {
    cardName.textContent = nameInput.value || "Твое Имя";
});

// Обновление профессии
jobInput.addEventListener('input', () => {
    cardJob.textContent = jobInput.value || "Junior Web Developer";
});

// Обновление ссылки и аватарки (через GitHub API)
githubInput.addEventListener('input', () => {
    const username = githubInput.value.trim();
    if (username) {
        cardGithub.href = `https://github.com/${username}`;
        avatar.src = `https://github.com/${username}.png`; // Магия: GitHub отдает аватарку по такому адресу
    } else {
        avatar.src = "https://via.placeholder.com/100";
    }
});

// Смена темы
themeBtn.addEventListener('click', () => {
    card.classList.toggle('dark');
});