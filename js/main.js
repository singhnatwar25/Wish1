// Google Analytics (merged, keeping both configurations)
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-DQLSDC3YXZ');
gtag('config', 'UA-220104775-1');

// Detect and set user's city in dropdown
function detectAndSetCity() {
    const citySelect = document.getElementById('citySelect');
    if (!citySelect) return;

    const savedCity = localStorage.getItem('userCity');
    if (savedCity) {
        citySelect.value = savedCity;
        return;
    }

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data && data.city) {
                const userCity = data.city.toLowerCase();
                const options = Array.from(citySelect.options).map(opt => opt.value.toLowerCase());
                const foundOption = citySelect.querySelector(`option[value="${userCity}"]`);
                
                if (foundOption) {
                    citySelect.value = userCity;
                    localStorage.setItem('userCity', userCity);
                }
            }
        })
        .catch(error => {
            console.error('Error detecting city:', error);
            citySelect.value = 'jaipur';
        });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Card hover sound effect
function setupCardHoverSound() {
    const audio = document.getElementById('hoverSound');
    if (!audio) return;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio play failed:', e));
        });
    });
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(trigger => new bootstrap.Tooltip(trigger));
}

// Swiper initialization (merged, using the most comprehensive configuration)
function initializeSwiper() {
    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        breakpoints: {
            400: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
        },
        speed: 1000
    });
}

// Toggle switch
function setupToggleSwitch() {
    document.querySelectorAll('.toggle-switch').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });
}

// Quantity increment/decrement
function increment() {
    const quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decrement() {
    const quantity = document.getElementById('quantity');
    if (quantity.value > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

// Step change for process flow
function changeStep(step) {
    const steps = {
        1: { img: 'resource/furniture-images/1.svg', title: 'Step 1', desc: 'Fill out the request form to get started with your furniture lease.' },
        2: { img: 'resource/furniture-images/2.svg', title: 'Step 2', desc: 'Our team will contact you to discuss the perfect arrangement for your furniture lease.' },
        3: { img: 'resource/furniture-images/3.svg', title: 'Step 3', desc: 'Your furniture will be delivered and set up at your location.' }
    };

    document.getElementById('stepIcon').src = steps[step].img;
    document.getElementById('stepTitle').textContent = steps[step].title;
    document.getElementById('stepDescription').textContent = steps[step].desc;

    document.getElementById('stepIcon').onerror = function () {
        this.src = 'resource/furniture-images/default.svg';
    };

    document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.step-btn')[step - 1].classList.add('active');
}

// Form submission handling
function setupFormSubmission() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(this);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'send_email.php', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    alert('Thank you for your submission! We will get back to you soon.');
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            };
            xhr.send(formData);
        });
    }

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const nameField = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    }
}

// Form validation
function validateForm() {
    document.getElementById('nameError').classList.add('d-none');
    document.getElementById('emailError').classList.add('d-none');
    document.getElementById('phoneError').classList.add('d-none');
    
    let valid = true;
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').classList.remove('d-none');
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').classList.remove('d-none');
        valid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById('phoneError').classList.remove('d-none');
        valid = false;
    }

    return valid;
}

// See More/See Less button
function setupSeeMoreButton() {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function () {
            const container = document.querySelector('.content-container');
            container.classList.toggle('expanded');
            this.textContent = container.classList.contains('expanded') ? 'See Less' : 'See More';
        });
    }
}

// Price switch (jQuery)
$(document).ready(function () {
    $('.price-switch button').click(function () {
        $('.price-switch button').removeClass('active');
        $(this).addClass('active');
        const newPrice = $(this).data('price');
        const newPeriod = $(this).data('period');
        $('#price-value').text(newPrice);
        $('#price-period').text(newPeriod);
    });
});

// Location click handling
function locationClick(city) {
    if (city.startsWith('/')) {
        window.location.href = city;
    } else {
        window.location.href = `http://127.0.0.1:5500/virtual-office/${city.toLowerCase()}`;
    }
}

// Modal handling
function openModal() {
    document.getElementById('locationModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    detectAndSetCity();
    handleNavbarScroll();
    setupCardHoverSound();
    initializeTooltips();
    initializeSwiper();
    setupToggleSwitch();
    setupFormSubmission();
    setupSeeMoreButton();

    const citySelect = document.getElementById('citySelect');
    if (citySelect) {
        citySelect.addEventListener('change', function () {
            localStorage.setItem('userCity', this.value);
        });
    }

    window.addEventListener('scroll', handleNavbarScroll);
});

// Set initial step on page load
window.onload = function () {
    changeStep(1);
};