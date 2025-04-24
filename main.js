document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const modal = document.getElementById('projectModal');
    const modalContent = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project');
    const contactForm = document.getElementById('contactForm');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');

    // Mobile Navigation
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active section in nav - Improved Version
function highlightNav() {
    const scrollPosition = window.scrollY + 200; // Adjusted offset for better detection
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Run on scroll and page load
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

// Smooth scrolling with proper offset
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjusted for fixed navbar
                behavior: 'smooth'
            });
            
            // Update active class immediately
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

    // Portfolio filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

// Project Data - Add this near the top of your script
const projects = {
    "POS Tagging & Spellchecking in Telugu": {
        technologies: ["Stanza", "BiLSTM", "CRF"],
        features: ["POS Tagging", "Spell Checking"],
        description: "An NLP system that provides part-of-speech tagging and spell checking capabilities for the Telugu language using BiLSTM and CRF models.",
        demoLink: "#",
        codeLink: "https://github.com/jayantarunsingh/Pos-tagging-and-spell-checking-NLP"
    },
    "Yoga Pose Prediction": {
        technologies: ["CNN", "OpenCV", "TensorFlow"],
        features: ["Pose Classification", "Real-time Detection", "Accuracy Metrics"],
        description: "A CNN-based image classification system that identifies and classifies yoga poses from images with high accuracy.",
        demoLink: "#",
        codeLink: "https://github.com/jayantarunsingh/Yoga-Pos-prediction"
    },
    "AI Disease Predictor": {
        technologies: ["Machine Learning", "Flask", "Scikit-learn"],
        features: ["Symptom Analysis", "Disease Prediction", "Prevention Tips"],
        description: "AI Disease Predictor is a web app that uses machine learning to predict diseases from selected symptoms and suggests relevant precautions.",
        demoLink: "#",
        codeLink: "https://github.com/jayantarunsingh/disease_predictor_project"
    }
};

// Updated Modal Functionality
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const projectItem = this.closest('.portfolio-item');
        const projectImg = projectItem.querySelector('img').src;
        const projectTitle = projectItem.querySelector('h3').textContent;
        const projectData = projects[projectTitle];
        
        if (projectData) {
            modalContent.innerHTML = `
                <div class="modal-project">
                    <div class="modal-img">
                        <img src="${projectImg}" alt="${projectTitle}">
                    </div>
                    <div class="modal-text">
                        <h2>${projectTitle}</h2>
                        <p>${projectData.description}</p>
                        <div class="project-details">
                            <div>
                                <h4>Technologies</h4>
                                <ul>
                                    ${projectData.technologies.map(tech => `<li>${tech}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <h4>Features</h4>
                                <ul>
                                    ${projectData.features.map(feat => `<li>${feat}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="modal-buttons">
                            <a href="${projectData.demoLink}" class="btn btn-primary">Live Demo</a>
                            <a href="${projectData.codeLink}" class="btn btn-secondary">Source Code</a>
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});


// Certificate Data - Add this near the top of your script
const certificates = {
    1: {
        title: "Cloud Computing | NPTEL",
        description: "An overview of cloud computing concepts including service models, virtualization, and deployment strategies.",
        details: "This certificate showcases my understanding of cloud infrastructure and services.",
        skills: ["Cloud Models", "Virtualization", "Cloud Security"],
        certificateLink: "https://drive.google.com/file/d/1zFlKbCT-ReY9ST25DddegGWMu2ws9lfp/view?usp=sharing"
    },
    2: {
        title: "Complete Interview Preparation | GeeksforGeeks",
        description: "Covered key computer science topics including data structures, algorithms, OOPs, DBMS, OS, and system design.",
        details: "This certificate showcases my readiness for technical interviews.",
        skills: ["Data Structures & Algorithms", "System Design", "Core CS Concepts"],
        certificateLink: "https://drive.google.com/file/d/1fMKNijwQ8dTsZ219EqSP6YY6oNB7OXrd/view?usp=sharing"
    },
    3: {
        title: "The Bits and Bytes of Computer Networking | Google",
        description: "Covered the fundamentals of computer networking, including protocols, hardware, and data transmission.",
        details: "This certificate showcases my understanding of network structures and communication protocols.",
        skills: ["Networking Basics", "IP & TCP Protocols", "Data Transmission"],
        certificateLink: "https://drive.google.com/file/d/1XGrT4fHVS2txN522oMAj3ndOiwE-qdNE/view?usp=sharing"
    },
    4: {
        title: "Dynamic Programming, Greedy Algorithms | Coursera",
        description: "Focused on algorithmic problem-solving using dynamic programming and greedy techniques.",
        details: "This certificate showcases my skills in designing efficient algorithms.",
        skills: ["Dynamic Programming", "Greedy Techniques", "Algorithm Optimization"],
        certificateLink: "https://drive.google.com/file/d/1K0EUimEeHOgswCb1vQoHulERUUhMG_Cz/view?usp=sharing"
    },
    5: {
        title: "Generative AI for Everyone | DeepLearning.AI",
        description: "Introduced the basics of generative AI, its real-world applications, and ethical considerations.",
        details: "This certificate showcases my foundational understanding of generative AI technologies.",
        skills: ["Generative AI Basics", "AI Applications", "Ethics in AI"],
        certificateLink: "https://drive.google.com/file/d/1-iSld1EayPYL_5HECl2DAq6Q-YUHKN2V/view?usp=sharing"
    },
    6: {
        title: "Introduction to Large Language Models | Google Cloud",
        description: "Explored the architecture and applications of large language models, with a focus on integration and deployment using Google Cloud services.",
        details: "This certificate showcases my knowledge in working with LLMs in a cloud environment.",
        skills: ["Large Language Models", "Cloud Deployment", "AI Model Integration"],
        certificateLink: "https://drive.google.com/file/d/107IxEeyFy-AV05n3cBBUeVz7ooxs15DY/view?usp=sharing"
    }
};

// Certificate Modal Functionality
document.querySelectorAll('.view-certificate').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const certificateId = this.getAttribute('data-certificate-id');
        const certificate = certificates[certificateId];
        
        if (certificate) {
            modalContent.innerHTML = `
                <div class="modal-project">
                    <div class="modal-img">
                        <img src="${this.closest('.portfolio-item').querySelector('img').src}" alt="${certificate.title}">
                    </div>
                    <div class="modal-text">
                        <h2>${certificate.title}</h2>
                        <p>${certificate.description}</p>
                        <p>${certificate.details}</p>
                        <div class="project-details">
                            <div>
                                <h4>Skills Acquired</h4>
                                <ul>
                                    ${certificate.skills.map(skill => `<li>${skill}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="modal-buttons">
                            <a href="${certificate.certificateLink}" class="btn btn-primary" target="_blank">View Certificate</a>
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Animate progress bars when skills section comes into view
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillSection);
});