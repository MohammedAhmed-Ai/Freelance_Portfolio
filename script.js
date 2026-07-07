/**
 * AI Engineer Portfolio - Mohamed
 * Core Logic for Animations, Theme, and Dynamic Content
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCursor();
    initHeroAnimations();
    initScrollEffects();
    initSkillsMarquee();
    initTestimonials();
    initServices();
    initIntersectionObserver();
});

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.error('Theme toggle button not found in DOM');
        return;
    }

    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// --- Custom Cursor Glow ---
function initCursor() {
    const cursor = document.getElementById('cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Expand glow on interactive elements
    const interactives = document.querySelectorAll('a, button, .project-card, .info-card, .service-card');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '600px';
            cursor.style.height = '600px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '400px';
            cursor.style.height = '400px';
        });
    });
}

// --- Hero Section Animations ---
function initHeroAnimations() {
    const texts = document.querySelectorAll('.dynamic-text');
    let currentIdx = 0;

    function rotateText() {
        texts.forEach(t => t.classList.remove('active'));
        texts[currentIdx].classList.add('active');
        
        currentIdx = (currentIdx + 1) % texts.length;
    }

    rotateText();
    setInterval(rotateText, 3000);
}

// --- Scroll Effects ---
function initScrollEffects() {
    const header = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Header blur
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active section indicator
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

// --- Skills Marquee ---
function initSkillsMarquee() {
    const skills = [
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Scikit-Learn', icon: '⚙️' },
        { name: 'TensorFlow', icon: '🔥' },
        { name: 'PyTorch', icon: '⚡' },
        { name: 'OpenCV', icon: '👁️' },
        { name: 'FastAPI', icon: '🚀' },
        { name: 'LangChain', icon: '⛓️' },
        { name: 'LangGraph', icon: '🕸️' },
        { name: 'OpenAI API', icon: '🤖' },
        { name: 'FAISS', icon: '🔍' },
        { name: 'Whisper', icon: '🎙️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Git', icon: '🌿' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Linux', icon: '🐧' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Power BI', icon: '📊' },
        { name: 'Machine Learning', icon: '🧠' },
        { name: 'Deep Learning', icon: '🕸️' },
        { name: 'Computer Vision', icon: '📷' },
        { name: 'NLP', icon: '💬' },
        { name: 'LLMs', icon: '📚' },
        { name: 'RAG', icon: '📑' },
        { name: 'Agentic AI', icon: '🤖' },
        { name: 'Prompt Engineering', icon: '✍️' },
        { name: 'Data Analysis', icon: '📈' },
        { name: 'Data Visualization', icon: '🎨' },
    ];

    const marquee = document.getElementById('skills-marquee');
    
    // Create two sets of skills for seamless loop
    const skillItems = skills.map(skill => `
        <div class="skill-pill">
            <span class="skill-icon">${skill.icon}</span>
            <span>${skill.name}</span>
        </div>
    `).join('');

    marquee.innerHTML = skillItems + skillItems;
}

// --- Testimonials Carousel ---
function initTestimonials() {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'CTO',
            company: 'AI Solutions Inc.',
            text: 'Mohamed delivered an exceptional RAG system for our enterprise. His ability to translate complex AI research into a production-ready product is rare.',
            rating: 5
        },
        {
            name: 'David Chen',
            role: 'Lead Engineer',
            company: 'TechFlow',
            text: 'Professional communication and deep technical knowledge. The AI Interview Copilot he built significantly reduced our screening time.',
            rating: 5
        },
        {
            name: 'Elena Rodriguez',
            role: 'Product Manager',
            company: 'HealthAI',
            text: 'The multi-agent medical assistant is a game-changer. Mohamed is a reliable developer who understands both the AI and the UX side of things.',
            rating: 5
        },
        {
            name: 'Marcus Thorne',
            role: 'Founder',
            company: 'Agentic Labs',
            text: 'Clean implementation and a great problem-solving mindset. He doesn\'t just use libraries; he understands the underlying architecture.',
            rating: 5
        }
    ];

    const carousel = document.getElementById('testimonial-carousel');
    
    const testimonialHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <div class="testimonial-avatar"></div>
                <div class="testimonial-user">
                    <h4>${t.name}</h4>
                    <p>${t.role} @ ${t.company}</p>
                </div>
            </div>
            <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
            <p class="testimonial-text">"${t.text}"</p>
        </div>
    `).join('');

    carousel.innerHTML = testimonialHTML + testimonialHTML; // Duplicate for loop

    // Simple auto-scroll
    let scrollAmount = 0;
    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        carousel.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
    }
    
    // We use a CSS animation for the marquee, but for testimonials we can use a similar approach
    // Let's apply a CSS animation to the carousel instead for better performance
    carousel.style.animation = 'marquee 40s linear infinite';
}

// --- Services Grid ---
function initServices() {
    const services = [
        { title: 'Machine Learning Solutions', icon: '🤖', desc: 'Custom ML models tailored to your business needs, from regression to complex classification.' },
        { title: 'Deep Learning Applications', icon: '🕸️', desc: 'Advanced neural networks for high-dimensional data processing and pattern recognition.' },
        { title: 'LLM Development', icon: '📚', desc: 'Fine-tuning and deploying Large Language Models for specialized domain knowledge.' },
        { title: 'RAG Systems', icon: '📑', desc: 'Retrieval-Augmented Generation pipelines for accurate, context-aware AI responses.' },
        { title: 'AI Chatbots', icon: '💬', desc: 'Intelligent conversational agents that handle complex user intents with precision.' },
        { title: 'Agentic AI Systems', icon: '⚙️', desc: 'Autonomous AI agents capable of planning, tool use, and multi-step reasoning.' },
        { title: 'Computer Vision', icon: '👁️', desc: 'Object detection, segmentation, and image analysis for industrial applications.' },
        { title: 'OCR Systems', icon: '📄', desc: 'High-accuracy optical character recognition for automated document processing.' },
        { title: 'NLP', icon: '✍️', desc: 'Sentiment analysis, translation, and text summarization using state-of-the-art models.' },
        { title: 'Data Analysis', icon: '📈', desc: 'Turning raw data into actionable insights through statistical modeling.' },
        { title: 'Data Visualization', icon: '🎨', desc: 'Interactive dashboards that make complex AI metrics easy to understand.' },
        { title: 'Power BI Dashboards', icon: '📊', desc: 'Enterprise-grade reporting and visualization for data-driven decision making.' },
        { title: 'FastAPI Backend', icon: '🚀', desc: 'High-performance, asynchronous APIs to serve AI models with minimal latency.' },
        { title: 'Python Automation', icon: '🐍', desc: 'Custom scripts and workflows to automate repetitive tasks and data pipelines.' },
        { title: 'AI Consulting', icon: '💡', desc: 'Strategic guidance on AI adoption, model selection, and implementation roadmaps.' },
        { title: 'Model Deployment', icon: '🐳', desc: 'Scalable deployment using Docker, Kubernetes, and cloud-native architectures.' },
        { title: 'API Integration', icon: '🔌', desc: 'Seamlessly connecting AI capabilities with existing software ecosystems.' },
        { title: 'Prompt Engineering', icon: '🎯', desc: 'Optimizing LLM outputs through advanced prompting techniques and few-shot learning.' },
    ];

    const grid = document.getElementById('services-grid');
    grid.innerHTML = services.map(s => `
        <div class="service-card">
            <div class="service-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');
}

// --- Intersection Observer for Fade-In ---
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    // Add reveal class to all sections and cards
    document.querySelectorAll('section, .project-card, .info-card, .service-card, .timeline-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Add CSS for reveal animation dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        filter: blur(10px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .reveal-active {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
`;
document.head.appendChild(style);
