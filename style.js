/* Pizza Planet inspired design with red and yellow theme */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Orbitron', monospace;
    background: linear-gradient(135deg, #FF6B35 0%, #FFD23F 100%);
    min-height: 100vh;
    color: #2C1810;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Header Styles */
.header {
    background: rgba(255, 107, 53, 0.95);
    padding: 20px;
    text-align: center;
    border-bottom: 4px solid #FFD23F;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
}

/* Language Selector */
.language-selector {
    position: absolute;
    top: 20px;
    right: 20px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-btn {
    background: rgba(255, 210, 63, 0.9);
    border: 2px solid #FF6B35;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Orbitron', monospace;
    font-weight: 600;
    color: #2C1810;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.dropdown-btn:hover {
    background: rgba(255, 107, 53, 0.9);
    color: white;
}

.flag-icon {
    width: 24px;
    height: 18px;
    border-radius: 2px;
}

.dropdown-arrow {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
}

.dropdown.active .dropdown-arrow {
    transform: rotate(180deg);
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background: white;
    min-width: 120px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    border-radius: 8px;
    border: 2px solid #FF6B35;
    z-index: 1000;
    overflow: hidden;
}

.dropdown.active .dropdown-content {
    display: block;
    animation: dropdownFade 0.3s ease;
}

@keyframes dropdownFade {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.dropdown-item {
    padding: 10px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Orbitron', monospace;
    font-weight: 600;
    color: #2C1810;
    font-size: 0.9rem;
    transition: background 0.3s ease;
}

.dropdown-item:hover {
    background: rgba(255, 210, 63, 0.3);
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.pizza-emoji {
    font-size: 5rem;
    margin-bottom: 10px;
}

.header h1 {
    font-size: 3rem;
    font-weight: 900;
    color: #FFD23F;
    text-shadow: 3px 3px 0px #8B0000;
    letter-spacing: 2px;
}

.tagline {
    font-size: 1.1rem;
    color: #FFF;
    font-weight: 400;
    margin-top: 5px;
}

/* Main Content */
.main-content {
    flex: 1;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.screen {
    display: none;
    width: 100%;
    max-width: 800px;
    animation: fadeIn 0.5s ease-in;
}

.screen.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Welcome Screen */
.welcome-content {
    background: rgba(255, 255, 255, 0.95);
    padding: 60px 40px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 3px solid #FF6B35;
}

.welcome-content h2 {
    font-size: 2.5rem;
    color: #FF6B35;
    margin-bottom: 20px;
    font-weight: 700;
}

.welcome-content p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    line-height: 1.6;
    color: #2C1810;
}

/* Quiz Screen */
.quiz-container {
    background: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 3px solid #FF6B35;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: #FFD23F;
    border-radius: 4px;
    margin-bottom: 20px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: #FF6B35;
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 4px;
}

.question-counter {
    text-align: center;
    font-size: 1.1rem;
    color: #FF6B35;
    font-weight: 700;
    margin-bottom: 30px;
}

.question-card h3 {
    font-size: 1.8rem;
    color: #2C1810;
    margin-bottom: 30px;
    text-align: center;
    line-height: 1.4;
}

.answers {
    display: grid;
    gap: 15px;
}

.answer-btn {
    background: linear-gradient(135deg, #FFD23F 0%, #FFA500 100%);
    border: 2px solid #FF6B35;
    padding: 20px;
    border-radius: 12px;
    font-size: 1.1rem;
    font-family: 'Orbitron', monospace;
    font-weight: 600;
    color: #2C1810;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}

.answer-btn:hover {
    background: linear-gradient(135deg, #FF6B35 0%, #FF4500 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
}

/* Result Screen */
.result-container {
    background: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 3px solid #FF6B35;
}

.result-container h2 {
    font-size: 2.5rem;
    color: #FF6B35;
    margin-bottom: 30px;
    font-weight: 700;
}

.pizza-result {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
}

.pizza-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #FFD23F;
    object-fit: cover;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.pizza-info {
    flex: 1;
    min-width: 300px;
    text-align: left;
}

.pizza-info h3 {
    font-size: 2rem;
    color: #FF6B35;
    margin-bottom: 15px;
    font-weight: 700;
}

.pizza-info p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #2C1810;
}

.personality-match {
    background: rgba(255, 210, 63, 0.3);
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid #FFD23F;
}

.personality-match h4 {
    color: #FF6B35;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: 700;
}

/* Buttons */
.btn {
    font-family: 'Orbitron', monospace;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-primary {
    background: linear-gradient(135deg, #FF6B35 0%, #FF4500 100%);
    color: white;
    border: 2px solid #8B0000;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #FF4500 0%, #8B0000 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
    background: linear-gradient(135deg, #FFD23F 0%, #FFA500 100%);
    color: #2C1810;
    border: 2px solid #FF6B35;
}

.btn-secondary:hover {
    background: linear-gradient(135deg, #FFA500 0%, #FF6B35 100%);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 210, 63, 0.4);
}

/* Footer */
.footer {
    background: rgba(139, 0, 0, 0.9);
    color: #FFD23F;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header h1 {
        font-size: 2rem;
    }
    
    .language-selector {
        position: static;
        margin-bottom: 15px;
    }
    
    .welcome-content, .quiz-container, .result-container {
        padding: 30px 20px;
        margin: 0 10px;
    }
    
    .pizza-result {
        flex-direction: column;
        text-align: center;
    }
    
    .pizza-info {
        text-align: center;
    }
    
    .pizza-img {
        width: 150px;
        height: 150px;
    }
}

@media (max-width: 480px) {
    .header h1 {
        font-size: 1.5rem;
    }
    
    .welcome-content h2, .result-container h2 {
        font-size: 1.8rem;
    }
    
    .question-card h3 {
        font-size: 1.4rem;
    }
}