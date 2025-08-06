// js/acessibilidade.js - VERSÃO FINAL COM NOVAS FUNCIONALIDADES

document.addEventListener('DOMContentLoaded', () => {
    // --- SELETORES DE ELEMENTOS ---
    const themeToggle = document.getElementById('theme-toggle');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const resetFontButton = document.getElementById('reset-font'); // Botão de reset
    const htmlElement = document.documentElement;
    const backToTopButton = document.getElementById('voltar-ao-topo'); // Botão voltar ao topo

    // ==========================================================
    // LÓGICA DO TEMA (MODO CLARO/ESCURO)
    // ==========================================================
    const applyTheme = (theme) => {
        htmlElement.classList.toggle('dark-mode', theme === 'dark-mode');
    };

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        const currentTheme = htmlElement.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', currentTheme);
    });

    // ==========================================================
    // LÓGICA DO TAMANHO DA FONTE
    // ==========================================================
    const defaultFontSize = parseFloat(getComputedStyle(htmlElement).fontSize);

    const setRootFontSize = (size) => {
        const newSize = Math.max(12, Math.min(24, size)); // Limites de 12px e 24px
        htmlElement.style.fontSize = `${newSize}px`;
        localStorage.setItem('font-size', `${newSize}px`);
    };

    increaseFontButton.addEventListener('click', () => {
        const currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
        setRootFontSize(currentSize + 1);
    });

    decreaseFontButton.addEventListener('click', () => {
        const currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
        setRootFontSize(currentSize - 1);
    });

    resetFontButton.addEventListener('click', () => {
        htmlElement.style.removeProperty('font-size');
        localStorage.removeItem('font-size');
    });

    // ==========================================================
    // LÓGICA DO BOTÃO VOLTAR AO TOPO
    // ==========================================================
    const handleScroll = () => {
        // Mostra o botão se o usuário rolar mais de 300px para baixo
        if (window.scrollY > 300) {
            backToTopButton.classList.add('mostrar');
        } else {
            backToTopButton.classList.remove('mostrar');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    };

    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);


    // ==========================================================
    // CARREGAR PREFERÊNCIAS SALVAS
    // ==========================================================
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    const savedFontSize = localStorage.getItem('font-size');
    if (savedFontSize) {
        htmlElement.style.fontSize = savedFontSize;
    }
});