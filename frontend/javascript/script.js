// Christian Life Church - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initAnnouncementBar();
    initDarkMode();
    initMobileMenu();
    initSmoothScrolling();
    loadDailyVerse();
    initSectionAnimations();
    initCalendarNavigation();
    initPrayerForm();
    initTestimoniesCarousel();
});

// Announcement Bar Functionality
function initAnnouncementBar() {
    const announcementBar = document.getElementById('announcement-bar');
    const closeBtn = document.getElementById('close-announcement');
    const announcementText = document.getElementById('announcement-text');

    if (!announcementBar || !closeBtn) {
        return;
    }

    // Check if announcement was previously closed
    if (localStorage.getItem('announcementClosed') === 'true') {
        announcementBar.classList.add('hidden');
    }

    // Close announcement
    closeBtn.addEventListener('click', function() {
        announcementBar.classList.add('hidden');
        localStorage.setItem('announcementClosed', 'true');

        // Remove from DOM after animation
        setTimeout(() => {
            announcementBar.style.display = 'none';
        }, 300);
    });

    // Function to update announcement text (for dynamic updates)
    window.updateAnnouncement = function(text) {
        announcementText.textContent = text;
        announcementBar.classList.remove('hidden');
        announcementBar.style.display = 'block';
        localStorage.removeItem('announcementClosed');
    };
}


// Dark Mode Functionality
function initDarkMode() {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const body = document.body;

    if (!darkModeSwitch) {
        return;
    }

    // Load saved preference
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    darkModeSwitch.checked = darkModeEnabled;

    if (darkModeEnabled) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarMenu = document.getElementById('navbar-menu');

    if (!hamburgerBtn || !navbarMenu) {
        return;
    }

    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !navbarMenu.contains(event.target)) {
            hamburgerBtn.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Daily verses data (static for now, will be replaced with backend API)
const dailyVerses = [
    {
        text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."',
        reference: 'Jeremiah 29:11'
    },
    {
        text: '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."',
        reference: 'Proverbs 3:5-6'
    },
    {
        text: '"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."',
        reference: 'John 3:16'
    },
    {
        text: '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
        reference: 'Joshua 1:9'
    },
    {
        text: '"I can do all things through Christ who strengthens me."',
        reference: 'Philippians 4:13'
    }
];

// Load Daily Verse
function loadDailyVerse() {
    const verseElement = document.getElementById('daily-verse');

    if (verseElement) {
        // Get today's date to select a verse (cycles through verses)
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const verseIndex = dayOfYear % dailyVerses.length;
        const selectedVerse = dailyVerses[verseIndex];

        // Update the verse content
        verseElement.innerHTML = `"${selectedVerse.text}" - ${selectedVerse.reference}`;

        // Add fade-in animation
        verseElement.style.opacity = '0';
        verseElement.style.transform = 'translateY(20px)';
        verseElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // Trigger animation after a short delay
        setTimeout(() => {
            verseElement.style.opacity = '1';
            verseElement.style.transform = 'translateY(0)';
        }, 300);

        console.log('Daily verse loaded:', selectedVerse.reference);
    }
}

// Section Animations (fade-in on scroll)
function initSectionAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections that should animate in
    const sectionsToAnimate = document.querySelectorAll('.visitor-welcome-section, .ministries-section, .extensions-section, .partnerships-section, .events-section, .testimonies-section, .prayer-section, .contact-section, .content-section');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Initialize testimonies carousel
    initTestimoniesCarousel();
}

// Testimonies Carousel
function initTestimoniesCarousel() {
    const track = document.querySelector('.testimonies-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-testimony');
    const nextBtn = document.getElementById('next-testimony');

    if (!track || !cards.length) {
        return;
    }

    let currentIndex = 0;
    const totalSlides = cards.length;

    // Initialize first card as active
    cards[0].classList.add('active');

    function updateCarousel() {
        // Hide all cards
        cards.forEach(card => card.classList.remove('active'));
        // Show current card
        cards[currentIndex].classList.add('active');

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto-play (optional)
    setInterval(nextSlide, 8000);
}

// Prayer Form Validation
function initPrayerForm() {
    const form = document.getElementById('prayer-form');
    const messageTextarea = document.getElementById('prayer-message');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const message = messageTextarea.value.trim();

        if (!message) {
            showFormError('Please enter your prayer request message.');
            messageTextarea.focus();
            return;
        }

        if (message.length < 10) {
            showFormError('Please provide a more detailed prayer request (at least 10 characters).');
            messageTextarea.focus();
            return;
        }

        // Show success message (in real app, this would submit to backend)
        showFormSuccess('Thank you for sharing your prayer request. Our prayer team will lift you up in prayer.');

        // Reset form
        form.reset();
    });

    function showFormError(message) {
        // Remove existing messages
        removeFormMessages();

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-message error';
        errorDiv.textContent = message;

        form.appendChild(errorDiv);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    function showFormSuccess(message) {
        // Remove existing messages
        removeFormMessages();

        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-message success';
        successDiv.textContent = message;

        form.appendChild(successDiv);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 5000);
    }

    function removeFormMessages() {
        const messages = form.querySelectorAll('.form-message');
        messages.forEach(message => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        });
    }
}

// Calendar Integration with Events
function initCalendarNavigation() {
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    const monthTitle = document.querySelector('.calendar-header h3');
    const calendarDays = document.querySelectorAll('.calendar-day');

    if (!prevBtn || !nextBtn || !monthTitle) {
        return;
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    let currentMonth = 4; // May (0-indexed)
    let currentYear = 2026;

    // Event details mapping
    const events = {
        '23': { title: 'Special Sunday Service', type: 'special', description: 'A special worship service featuring guest speakers and musical performances.' },
        '28': { title: 'Midweek Worship Night', type: 'worship', description: 'An intimate evening of worship, prayer, and fellowship.' },
        '30': { title: 'Community Outreach Program', type: 'outreach', description: 'Help us serve our local community through food distribution and encouragement.' }
    };

    function updateCalendar() {
        monthTitle.textContent = `${months[currentMonth]} ${currentYear}`;
        // In a real implementation, this would regenerate the calendar grid
        // For now, we'll just update the month title
    }

    // Add click handlers to event days
    calendarDays.forEach(day => {
        const dayNumber = day.textContent;
        if (events[dayNumber]) {
            day.style.cursor = 'pointer';
            day.addEventListener('click', () => showEventDetails(events[dayNumber]));
        }
    });

    // Calendar navigation
    prevBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    // Initialize
    updateCalendar();
}

// Show event details when calendar day is clicked
function showEventDetails(event) {
    // Create a simple modal or tooltip
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
        <div class="event-modal-content">
            <div class="event-modal-header">
                <h3>${event.title}</h3>
                <span class="event-modal-close">&times;</span>
            </div>
            <div class="event-modal-body">
                <p>${event.description}</p>
                <a href="#events" class="btn btn-primary">View All Events</a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.event-modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Animate in
    setTimeout(() => modal.classList.add('show'), 10);
}

// Utility functions for future backend integration
window.ChurchUtils = {
    // Function to update announcement from backend
    updateAnnouncement: function(text) {
        const announcementText = document.getElementById('announcement-text');
        const announcementBar = document.getElementById('announcement-bar');

        if (announcementText && announcementBar) {
            announcementText.textContent = text;
            announcementBar.classList.remove('hidden');
            announcementBar.style.display = 'block';
            localStorage.removeItem('announcementClosed');
        }
    },

    // Function to set active navigation
    setActiveNav: function(sectionId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    },

    // Function to toggle loading state
    setLoading: function(element, loading) {
        if (loading) {
            element.classList.add('loading');
        } else {
            element.classList.remove('loading');
        }
    }
};