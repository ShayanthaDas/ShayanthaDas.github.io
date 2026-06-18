// Navigation active link
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (currentPath === '/' && href === '/') {
            link.classList.add('active');
        } else if (currentPath.includes(href) && href !== '/') {
            link.classList.add('active');
        }
    });

    animateStats();
    setupSmoothScroll();
    setupCodeCopy();
});

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = parseInt(element.textContent);
                let currentValue = 0;
                const increment = Math.ceil(finalValue / 50);

                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        element.textContent = finalValue + '+';
                        clearInterval(interval);
                    } else {
                        element.textContent = currentValue + '+';
                    }
                }, 30);

                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(number => observer.observe(number));
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function setupCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.style.cssText = `position: absolute; top: 10px; right: 10px; padding: 8px 16px; background: var(--primary-blue); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;`;
        block.style.position = 'relative';
        block.appendChild(copyBtn);

        copyBtn.addEventListener('click', () => {
            const code = block.textContent.replace('Copy', '').trim();
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = 'var(--success-green)';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                    copyBtn.style.background = 'var(--primary-blue)';
                }, 2000);
            });
        });
    });
}

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .case-study-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
