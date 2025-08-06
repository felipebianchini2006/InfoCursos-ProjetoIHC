// js/acessibilidade.js - VERSÃO CORRIGIDA
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const htmlElement = document.documentElement; // Usamos o elemento <html>

    // --- LÓGICA DO TEMA (MODO CLARO/ESCURO) ---
    // Função para aplicar o tema salvo
    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            htmlElement.classList.add('dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
        }
    };

    // Botão para alternar o tema
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        // Salva a preferência no localStorage
        if (htmlElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // --- LÓGICA DO TAMANHO DA FONTE ---
    const getRootFontSize = () => {
        // Pega o tamanho da fonte computado do elemento html e converte para um número (pixels)
        const fontSizeStr = getComputedStyle(htmlElement).fontSize;
        return parseFloat(fontSizeStr);
    };

    const setRootFontSize = (size) => {
        // Define o novo tamanho da fonte no elemento html em pixels
        htmlElement.style.fontSize = `${size}px`;
        localStorage.setItem('font-size', `${size}px`); // Salva a preferência
    };

    // Botões para aumentar e diminuir a fonte
    increaseFontButton.addEventListener('click', () => {
        const currentSize = getRootFontSize();
        // Aumenta a fonte em 1px, com um limite máximo de 24px
        if (currentSize < 24) {
            setRootFontSize(currentSize + 1);
        }
    });

    decreaseFontButton.addEventListener('click', () => {
        const currentSize = getRootFontSize();
        // Diminui a fonte em 1px, com um limite mínimo de 12px
        if (currentSize > 12) {
            setRootFontSize(currentSize - 1);
        }
    });

    // --- CARREGAR PREFERÊNCIAS SALVAS ---
    // Carrega o tema salvo ao iniciar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Carrega o tamanho da fonte salvo ao iniciar a página
    const savedFontSize = localStorage.getItem('font-size');
    if (savedFontSize) {
        htmlElement.style.fontSize = savedFontSize;
    }
});