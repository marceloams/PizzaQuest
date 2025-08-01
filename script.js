// PizzaQuest - Personality-based Pizza Matching System

class PizzaQuest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.currentLanguage = 'en';
        
        this.translations = {
            en: {
                title: "PizzaQuest",
                tagline: "A Better Pizza is a Phone Call Away!",
                "welcome-title": "Welcome to PizzaQuest!",
                "welcome-text": "Answer 5 personality questions and discover which pizza flavor matches your unique personality!",
                "start-btn": "Start Your Pizza Journey",
                "of": "of",
                "result-title": "Your Perfect Pizza Match!",
                "why-matches": "Why this matches you:",
                "restart-btn": "Take Quiz Again"
            },
            pt: {
                title: "PizzaQuest",
                tagline: "Uma Pizza Melhor Está a Uma Ligação de Distância!",
                "welcome-title": "Bem-vindo ao PizzaQuest!",
                "welcome-text": "Responda 5 perguntas sobre personalidade e descubra qual sabor de pizza combina com você!",
                "start-btn": "Comece Sua Jornada da Pizza",
                "of": "de",
                "result-title": "Sua Pizza Perfeita!",
                "why-matches": "Por que combina com você:",
                "restart-btn": "Fazer Quiz Novamente"
            }
        };
        
        this.questions = {
            en: [
                {
                    question: "What's your ideal Friday night?",
                    answers: [
                        { text: "Netflix and chill at home", traits: ["comfort", "simple"] },
                        { text: "Wild party with friends", traits: ["adventurous", "social"] },
                        { text: "Fancy dinner at a restaurant", traits: ["sophisticated", "quality"] },
                        { text: "Outdoor adventure or sports", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "How do you handle stress?",
                    answers: [
                        { text: "I keep things simple and stick to what works", traits: ["comfort", "simple"] },
                        { text: "I dive into something exciting and new", traits: ["adventurous", "bold"] },
                        { text: "I treat myself to something luxurious", traits: ["sophisticated", "indulgent"] },
                        { text: "I go for a run or do something active", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "What's your fashion style?",
                    answers: [
                        { text: "Comfortable and casual", traits: ["comfort", "simple"] },
                        { text: "Bold and eye-catching", traits: ["adventurous", "bold"] },
                        { text: "Elegant and refined", traits: ["sophisticated", "quality"] },
                        { text: "Sporty and practical", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "Pick your dream vacation:",
                    answers: [
                        { text: "Cozy cabin in the mountains", traits: ["comfort", "simple"] },
                        { text: "Backpacking through exotic countries", traits: ["adventurous", "bold"] },
                        { text: "5-star resort with gourmet dining", traits: ["sophisticated", "indulgent"] },
                        { text: "Active adventure like hiking or surfing", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "What motivates you most?",
                    answers: [
                        { text: "Stability and peace of mind", traits: ["comfort", "reliable"] },
                        { text: "New experiences and thrills", traits: ["adventurous", "bold"] },
                        { text: "Excellence and recognition", traits: ["sophisticated", "quality"] },
                        { text: "Health and personal growth", traits: ["active", "fresh"] }
                    ]
                }
            ],
            pt: [
                {
                    question: "Qual é sua sexta-feira ideal?",
                    answers: [
                        { text: "Netflix em casa relaxando", traits: ["comfort", "simple"] },
                        { text: "Festa animada com amigos", traits: ["adventurous", "social"] },
                        { text: "Jantar chique em restaurante", traits: ["sophisticated", "quality"] },
                        { text: "Aventura ao ar livre ou esportes", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "Como você lida com o estresse?",
                    answers: [
                        { text: "Mantenho as coisas simples e faço o que funciona", traits: ["comfort", "simple"] },
                        { text: "Mergulho em algo novo e emocionante", traits: ["adventurous", "bold"] },
                        { text: "Me mimo com algo luxuoso", traits: ["sophisticated", "indulgent"] },
                        { text: "Vou correr ou fazer algo ativo", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "Qual é seu estilo de moda?",
                    answers: [
                        { text: "Confortável e casual", traits: ["comfort", "simple"] },
                        { text: "Ousado e chamativo", traits: ["adventurous", "bold"] },
                        { text: "Elegante e refinado", traits: ["sophisticated", "quality"] },
                        { text: "Esportivo e prático", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "Escolha suas férias dos sonhos:",
                    answers: [
                        { text: "Cabana aconchegante nas montanhas", traits: ["comfort", "simple"] },
                        { text: "Mochilão por países exóticos", traits: ["adventurous", "bold"] },
                        { text: "Resort 5 estrelas com gastronomia", traits: ["sophisticated", "indulgent"] },
                        { text: "Aventura ativa como trilha ou surf", traits: ["active", "fresh"] }
                    ]
                },
                {
                    question: "O que mais te motiva?",
                    answers: [
                        { text: "Estabilidade e paz de espírito", traits: ["comfort", "reliable"] },
                        { text: "Novas experiências e emoções", traits: ["adventurous", "bold"] },
                        { text: "Excelência e reconhecimento", traits: ["sophisticated", "quality"] },
                        { text: "Saúde e crescimento pessoal", traits: ["active", "fresh"] }
                    ]
                }
            ]
        };

        this.pizzas = {
            en: {
                margherita: {
                    name: "Classic Margherita",
                    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop&crop=center",
                    description: "Simple, timeless, and perfectly balanced with fresh basil, mozzarella, and tomato sauce.",
                    traits: ["comfort", "simple", "reliable"],
                    explanation: "You appreciate the classics and find comfort in simplicity. Like a Margherita pizza, you're reliable, genuine, and have a timeless appeal that never goes out of style."
                },
                pepperoni: {
                    name: "Spicy Pepperoni Supreme",
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop&crop=center",
                    description: "Bold and flavorful with spicy pepperoni, extra cheese, and a kick that wakes up your taste buds.",
                    traits: ["adventurous", "bold", "social"],
                    explanation: "You're bold, outgoing, and love to spice things up! Like pepperoni pizza, you're the life of the party and aren't afraid to make a statement."
                },
                truffle: {
                    name: "Gourmet Truffle & Prosciutto",
                    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center",
                    description: "Luxurious truffle oil, delicate prosciutto, arugula, and premium mozzarella on artisan crust.",
                    traits: ["sophisticated", "quality", "indulgent"],
                    explanation: "You have refined taste and appreciate the finer things in life. Like this gourmet pizza, you're sophisticated, elegant, and never settle for ordinary."
                },
                veggie: {
                    name: "Fresh Garden Veggie",
                    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop&crop=center",
                    description: "Fresh vegetables, herbs, and light cheese on a crispy thin crust - healthy and delicious.",
                    traits: ["active", "fresh", "healthy"],
                    explanation: "You're health-conscious, energetic, and love fresh flavors. Like this veggie pizza, you're vibrant, wholesome, and always ready for your next adventure."
                },
                hawaiian: {
                    name: "Tropical Hawaiian",
                    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=400&fit=crop&crop=center",
                    description: "Sweet pineapple and savory ham create a perfect balance of flavors that's uniquely satisfying.",
                    traits: ["adventurous", "unique", "balanced"],
                    explanation: "You're open-minded and love unique combinations. Like Hawaiian pizza, you're not afraid to be different and you bring unexpected joy to others."
                }
            },
            pt: {
                margherita: {
                    name: "Margherita Clássica",
                    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop&crop=center",
                    description: "Simples, atemporal e perfeitamente equilibrada com manjericão fresco, mozzarella e molho de tomate.",
                    traits: ["comfort", "simple", "reliable"],
                    explanation: "Você aprecia os clássicos e encontra conforto na simplicidade. Como uma pizza Margherita, você é confiável, genuíno e tem um charme atemporal."
                },
                catupiry: {
                    name: "Frango com Catupiry",
                    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center",
                    description: "O sabor brasileiro que conquistou corações: frango desfiado com cremoso catupiry e orégano.",
                    traits: ["comfort", "social", "brazilian"],
                    explanation: "Você tem o coração brasileiro e ama os sabores que nos conectam. Como a pizza de frango com catupiry, você é acolhedor, familiar e traz alegria para todos ao redor."
                },
                calabresa: {
                    name: "Calabresa Acebolada",
                    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=400&fit=crop&crop=center",
                    description: "Tradicional brasileira com calabresa defumada, cebola roxa e aquele toque especial de pimenta.",
                    traits: ["adventurous", "bold", "traditional"],
                    explanation: "Você é corajoso e ama tradições com personalidade. Como a calabresa, você tem um sabor marcante e não passa despercebido."
                },
                portuguesa: {
                    name: "Portuguesa Completa",
                    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop&crop=center",
                    description: "Generosa e completa: presunto, ovos, cebola, azeitona, ervilha e muito queijo.",
                    traits: ["sophisticated", "abundant", "complete"],
                    explanation: "Você aprecia abundância e variedade. Como a portuguesa, você é generoso, completo e sempre oferece o melhor de si."
                },
                brigadeiro: {
                    name: "Pizza Doce de Brigadeiro",
                    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
                    description: "A inovação brasileira: massa doce com brigadeiro cremoso e granulado colorido.",
                    traits: ["adventurous", "sweet", "innovative"],
                    explanation: "Você é criativo e não tem medo de inovar. Como a pizza de brigadeiro, você transforma o tradicional em algo único e surpreendente."
                }
            }
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.setupLanguageSelector();
        this.showScreen('welcome-screen');
    }

    bindEvents() {
        document.getElementById('start-quiz').addEventListener('click', () => this.startQuiz());
        document.getElementById('restart-quiz').addEventListener('click', () => this.restartQuiz());
    }
    
    setupLanguageSelector() {
        const languageBtn = document.getElementById('language-btn');
        const dropdown = document.querySelector('.dropdown');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.dataset.lang;
                this.changeLanguage(lang);
                dropdown.classList.remove('active');
            });
        });
        
        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        
        // Update dropdown button
        const languageBtn = document.getElementById('language-btn');
        const flagSrc = lang === 'en' ? 'https://flagcdn.com/24x18/us.png' : 'https://flagcdn.com/24x18/br.png';
        const label = lang === 'en' ? 'EN-US' : 'PT-BR';
        
        languageBtn.innerHTML = `
            <img src="${flagSrc}" alt="${lang.toUpperCase()}" class="flag-icon">
            <span>${label}</span>
            <span class="dropdown-arrow">▼</span>
        `;
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });
        
        // Reset quiz if in progress
        const currentScreen = document.querySelector('.screen.active').id;
        if (currentScreen === 'quiz-screen') {
            this.showScreen('welcome-screen');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.questions[this.currentLanguage][this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions[this.currentLanguage].length) * 100;
        
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('question-text').textContent = question.question;
        
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer.text;
            button.addEventListener('click', () => this.selectAnswer(index));
            answersContainer.appendChild(button);
        });
    }

    selectAnswer(answerIndex) {
        const selectedAnswer = this.questions[this.currentLanguage][this.currentQuestion].answers[answerIndex];
        this.answers.push(selectedAnswer);
        
        // Add visual feedback
        const buttons = document.querySelectorAll('.answer-btn');
        buttons[answerIndex].style.background = 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)';
        buttons[answerIndex].style.color = 'white';
        
        setTimeout(() => {
            this.currentQuestion++;
            if (this.currentQuestion < this.questions[this.currentLanguage].length) {
                this.displayQuestion();
            } else {
                this.calculateResult();
            }
        }, 500);
    }

    calculateResult() {
        const traitCounts = {};
        
        // Count all traits from answers
        this.answers.forEach(answer => {
            answer.traits.forEach(trait => {
                traitCounts[trait] = (traitCounts[trait] || 0) + 1;
            });
        });
        
        // Find the pizza that best matches the user's traits
        let bestMatch = null;
        let highestScore = 0;
        
        Object.entries(this.pizzas[this.currentLanguage]).forEach(([key, pizza]) => {
            let score = 0;
            pizza.traits.forEach(trait => {
                score += traitCounts[trait] || 0;
            });
            
            if (score > highestScore) {
                highestScore = score;
                bestMatch = pizza;
            }
        });
        
        // Fallback to margherita if no clear match
        if (!bestMatch) {
            bestMatch = this.pizzas[this.currentLanguage].margherita;
        }
        
        this.displayResult(bestMatch);
    }

    displayResult(pizza) {
        document.getElementById('pizza-image').src = pizza.image;
        document.getElementById('pizza-image').alt = pizza.name;
        document.getElementById('pizza-name').textContent = pizza.name;
        document.getElementById('pizza-description').textContent = pizza.description;
        document.getElementById('personality-explanation').textContent = pizza.explanation;
        
        this.showScreen('result-screen');
    }

    restartQuiz() {
        this.startQuiz();
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PizzaQuest();
});

// Add some fun animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add floating pizza emojis animation
    const createFloatingPizza = () => {
        const pizza = document.createElement('div');
        pizza.innerHTML = '🍕';
        pizza.style.position = 'fixed';
        pizza.style.fontSize = '2rem';
        pizza.style.pointerEvents = 'none';
        pizza.style.zIndex = '1000';
        pizza.style.left = Math.random() * window.innerWidth + 'px';
        pizza.style.top = window.innerHeight + 'px';
        pizza.style.opacity = '0.7';
        pizza.style.animation = 'floatUp 8s linear forwards';
        
        document.body.appendChild(pizza);
        
        setTimeout(() => {
            pizza.remove();
        }, 8000);
    };
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create floating pizzas periodically
    setInterval(createFloatingPizza, 3000);
});