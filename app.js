// Solo Leveling Complete Website - Fixed JavaScript
class SoloLevelingWebsite {
    constructor() {
        this.currentSection = 'home';
        this.currentArc = 'd-rank';
        this.currentScene = 0;
        this.isAutoPlaying = false;
        this.audioEnabled = true;
        this.overallProgress = 0;
        this.visitedSections = new Set(['home']);
        this.isLoggedIn = false;
        this.currentUser = null;
        this.shoppingCart = [];
        this.isDarkTheme = true;
        
        // Initialize comprehensive data
        this.storyData = this.initializeStoryData();
        this.characterData = this.initializeCharacterData();
        this.productData = this.initializeProductData();
        this.timelineData = this.initializeTimelineData();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('Initializing Solo Leveling Complete Website...');
        this.setupEventListeners();
        this.initializeSections();
        this.hideLoadingScreen();
        this.updateProgressTracker();
        this.updateCartDisplay();
        console.log('Solo Leveling website initialized successfully');
    }

    initializeStoryData() {
        return {
            'd-rank': {
                title: 'D-Rank Dungeon Arc - The Beginning',
                chapters: 'Chapters 1-10',
                scenes: [
                    {
                        image: 'https://pplx-res.cloudinary.com/image/upload/v1755449629/pplx_project_search_images/c8fcdcaa1f6c68c1e9053db84046fef8721fcb40.png',
                        speaker: 'Sung Jinwoo',
                        status: 'E-Rank Hunter - The Weakest',
                        text: 'I\'m Sung Jinwoo, mockingly known as the "weakest weapon of humanity." Despite being an E-rank hunter—the lowest possible classification—I continue to risk my life in dangerous dungeons. The weight of my mother\'s medical bills and sister Jinah\'s education fees drives me forward, even when my body screams to stop.',
                        avatar: 'https://pplx-res.cloudinary.com/image/upload/v1755449629/pplx_project_search_images/c8fcdcaa1f6c68c1e9053db84046fef8721fcb40.png',
                        choices: [
                            { text: 'Stay close to stronger hunters', effect: 'Cautious approach - safer but limited growth potential' },
                            { text: 'Take initiative despite weakness', effect: 'Brave approach - risky but shows determination' },
                            { text: 'Support others quietly', effect: 'Strategic approach - learn from experienced hunters' }
                        ]
                    },
                    {
                        image: 'https://pplx-res.cloudinary.com/image/upload/v1755449629/pplx_project_search_images/c8fcdcaa1f6c68c1e9053db84046fef8721fcb40.png',
                        speaker: 'Song Chi-Yul',
                        status: 'C-Rank Mage',
                        text: 'There\'s a hidden chamber behind this wall... The magical energy emanating from it is unlike anything I\'ve ever sensed. It\'s ancient, powerful, and terrifying. This isn\'t just a D-rank dungeon—we\'ve stumbled upon something that should have remained buried.',
                        avatar: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/c71555b9dca2d5743e198858d730bc0550917f24.png',
                        choices: [
                            { text: 'Vote to investigate the chamber', effect: 'Curiosity leads to discovery—and danger' },
                            { text: 'Suggest reporting to the Association', effect: 'Play it safe and follow protocol' },
                            { text: 'Vote to leave immediately', effect: 'Trust your survival instincts' }
                        ]
                    },
                    {
                        image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/18f9a2438689037ac988471e609be41cd5a23495.png',
                        speaker: 'System',
                        status: 'Player System Activation',
                        text: 'CONGRATULATIONS! You have been selected as the Player. You are now the only person in the world capable of leveling up through the System. Your journey from weakness to absolute power begins now. Will you accept this burden... and this gift?',
                        avatar: 'https://pplx-res.cloudinary.com/image/upload/v1755055031/pplx_project_search_images/f2a8633fbc661858613c2cadf20857c745f03154.png',
                        choices: [
                            { text: 'Accept the System\'s power', effect: 'Embrace your destiny as the Player' },
                            { text: 'Question the System\'s motives', effect: 'Seek understanding before commitment' },
                            { text: 'Focus on survival first', effect: 'Priority: escape the dungeon alive' }
                        ]
                    }
                ]
            },
            'system-awakening': {
                title: 'System Awakening - Player Selected',
                chapters: 'Chapters 11-12', 
                scenes: [
                    {
                        image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/cfc423347724ed183b49099786c487d993b98f20.png',
                        speaker: 'System',
                        status: 'Player System Interface',
                        text: 'DAILY QUEST GENERATED: Complete the following to prevent penalty. 100 push-ups, 100 sit-ups, 100 squats, 10km run. Failure to complete daily quest will result in immediate transport to PENALTY ZONE. Warning: Death is permanent.',
                        avatar: 'https://pplx-res.cloudinary.com/image/upload/v1755055031/pplx_project_search_images/f2a8633fbc661858613c2cadf20857c745f03154.png',
                        choices: [
                            { text: 'Accept the training regimen', effect: 'Commit to becoming stronger' },
                            { text: 'Test the penalty system', effect: 'Discover what happens if you fail' },
                            { text: 'Seek help from others', effect: 'Try to share the burden' }
                        ]
                    }
                ]
            },
            'job-change': {
                title: 'Job Change Quest - Shadow Extraction',
                chapters: 'Chapters 38-45',
                scenes: [
                    {
                        image: 'https://pplx-res.cloudinary.com/image/upload/v1756016891/pplx_project_search_images/8e172044a30a13e8c1fd7ec4f4c2fb2b1908fb44.png',
                        speaker: 'Igris',
                        status: 'Blood-Red Commander',
                        text: 'You dare challenge the Blood-Red Commander? I have slain countless warriors far stronger than you, little hunter. Your courage is admirable, but courage alone will not save you from my blade. Show me your resolve!',
                        avatar: 'https://pplx-res.cloudinary.com/image/upload/v1756016891/pplx_project_search_images/8e172044a30a13e8c1fd7ec4f4c2fb2b1908fb44.png',
                        choices: [
                            { text: 'Attack with overwhelming force', effect: 'Aggressive combat approach' },
                            { text: 'Use strategy and timing', effect: 'Tactical combat approach' },
                            { text: 'Test Igris\'s abilities first', effect: 'Cautious assessment approach' }
                        ]
                    },
                    {
                        image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/cfc423347724ed183b49099786c487d993b98f20.png',
                        speaker: 'Sung Jinwoo',
                        status: 'The Player - Necromancer',
                        text: 'As Igris falls, dark energy swirls around me like living smoke. I place my hand over his chest and speak the word that will change everything: "ARISE!" The shadow responds to my call, and the Blood-Red Commander becomes my first shadow soldier.',
                        avatar: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/cfc423347724ed183b49099786c487d993b98f20.png',
                        choices: [
                            { text: 'Command Igris to demonstrate loyalty', effect: 'Test your new shadow\'s obedience' },
                            { text: 'Explore your newfound abilities', effect: 'Experiment with shadow extraction' },
                            { text: 'Prepare for greater challenges', effect: 'Focus on upcoming battles' }
                        ]
                    }
                ]
            }
        };
    }

    initializeCharacterData() {
        return {
            'jinwoo': {
                name: 'Sung Jinwoo',
                rank: 'Shadow Monarch',
                class: 'Necromancer → Shadow Sovereign',
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/cfc423347724ed183b49099786c487d993b98f20.png',
                description: 'The protagonist who transformed from the weakest E-rank hunter into the most powerful being in existence.',
                abilities: ['Shadow Extraction', 'Shadow Preservation', 'Shadow Exchange', 'Ruler\'s Authority', 'Domain of the Monarch'],
                stats: {
                    strength: 100,
                    agility: 98,
                    intelligence: 95,
                    vitality: 100,
                    leadership: 100
                }
            },
            'cha-haein': {
                name: 'Cha Hae-In',
                rank: 'S-Rank Hunter',
                class: 'Swordswoman',
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/c71555b9dca2d5743e198858d730bc0550917f24.png',
                description: 'Vice Guild Master of the Hunters Guild and one of Korea\'s strongest S-rank hunters.',
                abilities: ['Sword Mastery', 'Enhanced Senses', 'Combat Intuition', 'Mana Sensitivity'],
                stats: {
                    strength: 88,
                    agility: 92,
                    intelligence: 78,
                    vitality: 85,
                    leadership: 75
                }
            },
            'igris': {
                name: 'Igris',
                rank: 'Marshal Grade Shadow',
                class: 'Shadow Knight Commander',
                image: 'https://pplx-res.cloudinary.com/image/upload/v1756016891/pplx_project_search_images/8e172044a30a13e8c1fd7ec4f4c2fb2b1908fb44.png',
                description: 'The first Marshal-grade shadow soldier extracted by Jinwoo, serving as the army\'s strategist.',
                abilities: ['Supreme Swordsmanship', 'Shadow Leadership', 'Tactical Command', 'Dimensional Combat'],
                stats: {
                    strength: 90,
                    agility: 88,
                    intelligence: 85,
                    vitality: 92,
                    leadership: 98
                }
            },
            'beru': {
                name: 'Beru',
                rank: 'General Grade Shadow',
                class: 'Shadow Ant King',
                image: 'https://pplx-res.cloudinary.com/image/upload/v1756016891/pplx_project_search_images/8e172044a30a13e8c1fd7ec4f4c2fb2b1908fb44.png',
                description: 'Former Ant King of Jeju Island, became one of Jinwoo\'s most powerful shadows.',
                abilities: ['Paralysis Poison', 'Flight', 'Regeneration', 'Hive Mind Coordination'],
                stats: {
                    strength: 95,
                    agility: 90,
                    intelligence: 88,
                    vitality: 94,
                    leadership: 85
                }
            }
        };
    }

    initializeProductData() {
        return {
            'hoodie-shadow': {
                name: 'Shadow Monarch Hoodie',
                price: 2499,
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/32cab866453a75a8ab337b042ce78c485728570d.png',
                category: 'clothing',
                rating: 5.0,
                reviews: 127,
                description: 'Premium quality hoodie featuring Igris design with glow-in-the-dark elements'
            },
            'tshirt-logo': {
                name: 'Solo Leveling Logo T-Shirt',
                price: 1299,
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/bb073260b75dd63c8f7381b3c5edf20bff617386.png',
                category: 'clothing',
                rating: 4.8,
                reviews: 89,
                description: 'Official Solo Leveling logo tee in premium cotton blend'
            },
            'figure-jinwoo': {
                name: 'Sung Jinwoo Premium Figure',
                price: 4999,
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/cfc423347724ed183b49099786c487d993b98f20.png',
                category: 'figures',
                rating: 5.0,
                reviews: 45,
                description: 'High-quality PVC figure with Shadow Monarch transformation effects'
            },
            'figure-igris': {
                name: 'Igris Knight Figure',
                price: 3499,
                image: 'https://pplx-res.cloudinary.com/image/upload/v1756016891/pplx_project_search_images/8e172044a30a13e8c1fd7ec4f4c2fb2b1908fb44.png',
                category: 'figures',
                rating: 4.9,
                reviews: 32,
                description: 'Blood-Red Commander with authentic sword and armor details'
            }
        };
    }

    initializeTimelineData() {
        return [
            {
                id: 'd-rank',
                title: 'The Double Dungeon Discovery',
                chapters: 'Arc 1: Chapters 1-10',
                description: 'Jinwoo\'s nightmare begins in what should have been a routine D-rank dungeon.',
                events: ['Stone Guardian Encounter', 'Player System Activation', 'Near Death Experience'],
                stats: { level: 1, rank: 'E' },
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/18f9a2438689037ac988471e609be41cd5a23495.png'
            },
            {
                id: 'job-change',
                title: 'Job Change Quest - Shadow Extraction',
                chapters: 'Arc 3: Chapters 38-45',
                description: 'The legendary Job Change Quest where Jinwoo battles Igris.',
                events: ['Igris Boss Battle', 'First Shadow Extraction', 'Necromancer Class Unlock'],
                stats: { level: 51, rank: 'Shadow Necromancer' },
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/18f9a2438689037ac988471e609be41cd5a23495.png'
            },
            {
                id: 'shadow-monarch',
                title: 'Shadow Monarch Awakening',
                chapters: 'Final Arc: Chapters 200+',
                description: 'The ultimate revelation of Jinwoo\'s true identity as the Shadow Monarch.',
                events: ['True Identity Revealed', 'Infinite Shadow Army', 'Cosmic Level Power'],
                stats: { level: '∞', rank: 'Shadow Monarch' },
                image: 'https://pplx-res.cloudinary.com/image/upload/v1757587114/pplx_project_search_images/18f9a2438689037ac988471e609be41cd5a23495.png'
            }
        ];
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Use event delegation for all click events
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        
        // Form submissions
        this.setupForms();
        
        // Global controls
        this.setupGlobalControls();
        
        // Modal system
        this.setupModalSystem();
        
        console.log('Event listeners setup complete');
    }

    handleGlobalClick(e) {
        // Navigation links
        if (e.target.matches('a[data-section]') || e.target.closest('a[data-section]')) {
            e.preventDefault();
            const link = e.target.matches('a[data-section]') ? e.target : e.target.closest('a[data-section]');
            const section = link.getAttribute('data-section');
            console.log('Navigation clicked:', section);
            this.navigateToSection(section);
            return;
        }

        // Feature cards
        if (e.target.matches('.feature-card[data-target]') || e.target.closest('.feature-card[data-target]')) {
            e.preventDefault();
            const card = e.target.matches('.feature-card[data-target]') ? e.target : e.target.closest('.feature-card[data-target]');
            const target = card.getAttribute('data-target');
            console.log('Feature card clicked:', target);
            this.navigateToSection(target);
            return;
        }

        // CTA buttons
        if (e.target.matches('.btn[data-target]') || e.target.closest('.btn[data-target]')) {
            e.preventDefault();
            const btn = e.target.matches('.btn[data-target]') ? e.target : e.target.closest('.btn[data-target]');
            const target = btn.getAttribute('data-target');
            console.log('CTA button clicked:', target);
            this.navigateToSection(target);
            return;
        }

        // Mobile nav toggle
        if (e.target.matches('#mobile-nav-toggle') || e.target.closest('#mobile-nav-toggle')) {
            e.preventDefault();
            this.toggleMobileNav();
            return;
        }

        // Cart icon
        if (e.target.matches('.cart-icon') || e.target.closest('.cart-icon')) {
            e.preventDefault();
            if (this.shoppingCart.length > 0) {
                this.showModal('cart-modal');
                this.updateCartModal();
            } else {
                this.navigateToSection('shop');
            }
            return;
        }

        // Story controls
        if (e.target.matches('#prev-scene')) {
            e.preventDefault();
            this.previousScene();
            return;
        }
        if (e.target.matches('#next-scene')) {
            e.preventDefault();
            this.nextScene();
            return;
        }
        if (e.target.matches('#auto-play')) {
            e.preventDefault();
            this.toggleAutoPlay();
            return;
        }

        // Story choices
        if (e.target.matches('.choice-btn') || e.target.closest('.choice-btn')) {
            e.preventDefault();
            const choiceBtn = e.target.matches('.choice-btn') ? e.target : e.target.closest('.choice-btn');
            const choice = choiceBtn.getAttribute('data-choice');
            this.handleStoryChoice(choice);
            return;
        }

        // Character filters
        if (e.target.matches('.filter-btn[data-filter]')) {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');
            this.filterCharacters(filter);
            
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            return;
        }

        // Character detail buttons
        if (e.target.matches('.character-detail-btn') || e.target.closest('.character-detail-btn')) {
            e.preventDefault();
            const btn = e.target.matches('.character-detail-btn') ? e.target : e.target.closest('.character-detail-btn');
            const character = btn.getAttribute('data-character');
            this.showCharacterDetail(character);
            return;
        }

        // Character modal tabs
        if (e.target.matches('.character-detail-tabs .tab-btn[data-tab]')) {
            e.preventDefault();
            const tab = e.target.getAttribute('data-tab');
            this.switchCharacterTab(tab);
            
            document.querySelectorAll('.character-detail-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            return;
        }

        // Timeline view buttons
        if (e.target.matches('.view-btn[data-view]')) {
            e.preventDefault();
            const view = e.target.getAttribute('data-view');
            this.changeTimelineView(view);
            
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            return;
        }

        // Gallery tab buttons
        if (e.target.matches('.gallery-tab-btn[data-gallery]')) {
            e.preventDefault();
            const gallery = e.target.getAttribute('data-gallery');
            this.switchGalleryTab(gallery);
            
            document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            return;
        }

        // Add to cart buttons
        if (e.target.matches('.add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
            e.preventDefault();
            const btn = e.target.matches('.add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
            const productId = btn.getAttribute('data-product');
            this.addToCart(productId);
            return;
        }

        // Dashboard tabs
        if (e.target.matches('.dashboard-nav .tab-btn[data-tab]')) {
            e.preventDefault();
            const tab = e.target.getAttribute('data-tab');
            this.switchDashboardTab(tab);
            
            document.querySelectorAll('.dashboard-nav .tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            return;
        }

        // Admin tabs
        if (e.target.matches('.admin-tab-btn[data-tab]')) {
            e.preventDefault();
            const tab = e.target.getAttribute('data-tab');
            this.switchAdminTab(tab);
            
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            return;
        }

        // Theme toggle
        if (e.target.matches('#theme-toggle')) {
            e.preventDefault();
            this.toggleTheme();
            return;
        }

        // Audio toggle
        if (e.target.matches('#audio-toggle')) {
            e.preventDefault();
            this.toggleAudio();
            return;
        }

        // Modal close
        if (e.target.matches('.modal-close') || e.target.closest('.modal-close')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                this.closeModal(modal.id);
            }
            return;
        }

        // Close modal by clicking backdrop
        if (e.target.matches('.modal')) {
            this.closeModal(e.target.id);
            return;
        }

        // Checkout button
        if (e.target.matches('#checkout-btn')) {
            if (this.isLoggedIn) {
                this.processCheckout();
            } else {
                this.closeModal('cart-modal');
                this.navigateToSection('login');
            }
            return;
        }
    }

    setupForms() {
        // Arc select change
        const arcSelect = document.getElementById('arc-select');
        if (arcSelect) {
            arcSelect.addEventListener('change', (e) => {
                this.currentArc = e.target.value;
                this.currentScene = 0;
                this.updateStoryDisplay();
            });
        }

        // Product filters
        const categoryFilter = document.getElementById('category-filter');
        const priceFilter = document.getElementById('price-filter');
        const productSearch = document.getElementById('product-search');
        
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.filterProducts());
        }
        
        if (priceFilter) {
            priceFilter.addEventListener('change', () => this.filterProducts());
        }
        
        if (productSearch) {
            productSearch.addEventListener('input', () => this.filterProducts());
        }

        // Auth forms
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistration();
            });
        }
    }

    setupGlobalControls() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
            
            if (this.currentSection === 'story') {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.previousScene();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextScene();
                } else if (e.key === ' ') {
                    e.preventDefault();
                    this.toggleAutoPlay();
                }
            }
        });
    }

    setupModalSystem() {
        // Already handled in global click handler
    }

    toggleMobileNav() {
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-nav-toggle');
        
        if (navMenu && mobileToggle) {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        }
    }

    initializeSections() {
        // Initialize story display if story section exists
        if (document.getElementById('story')) {
            this.updateStoryDisplay();
        }
    }

    navigateToSection(sectionId) {
        console.log('Navigating to section:', sectionId);
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-nav-toggle');
        if (navMenu && mobileToggle) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
        
        // Update current section
        this.currentSection = sectionId;
        
        // Hide all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            console.log('Successfully activated section:', sectionId);
            
            // Handle special sections
            if (sectionId === 'dashboard' && !this.isLoggedIn) {
                this.navigateToSection('login');
                return;
            }
            
            if (sectionId === 'admin' && !this.isAdmin()) {
                this.navigateToSection('home');
                return;
            }
        } else {
            console.error('Section not found:', sectionId);
        }
        
        // Update navigation active state
        const navLinks = document.querySelectorAll('.nav-menu a[data-section]');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Track visited sections
        this.visitedSections.add(sectionId);
        this.updateProgressTracker();
        
        // Section-specific initialization
        this.initializeSection(sectionId);
    }

    initializeSection(sectionId) {
        switch (sectionId) {
            case 'story':
                this.updateStoryDisplay();
                break;
            case 'characters':
                this.initializeCharacterStats();
                break;
            case 'timeline':
                this.animateTimelineItems();
                break;
            case 'gallery':
                this.initializeGallery();
                break;
            case 'shop':
                this.initializeShop();
                break;
        }
    }

    // Story Section Methods
    updateStoryDisplay() {
        const arcData = this.storyData[this.currentArc];
        if (!arcData) return;

        const currentSceneData = arcData.scenes[this.currentScene] || arcData.scenes[0];
        
        // Update elements
        const arcTitle = document.getElementById('current-arc-title');
        if (arcTitle) arcTitle.textContent = arcData.title;
        
        const progressFill = document.getElementById('story-progress-fill');
        const progressText = document.getElementById('story-progress-text');
        if (progressFill && progressText) {
            const progress = ((this.currentScene + 1) / arcData.scenes.length) * 100;
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `Scene ${this.currentScene + 1} of ${arcData.scenes.length}`;
        }
        
        const storyImage = document.getElementById('current-story-image');
        const storyText = document.getElementById('story-text');
        const speakerAvatar = document.getElementById('speaker-avatar');
        const speakerName = document.getElementById('speaker-name');
        const speakerStatus = document.getElementById('speaker-status');
        
        if (storyImage) storyImage.src = currentSceneData.image;
        if (storyText) storyText.textContent = currentSceneData.text;
        if (speakerAvatar) speakerAvatar.src = currentSceneData.avatar;
        if (speakerName) speakerName.textContent = currentSceneData.speaker;
        if (speakerStatus) speakerStatus.textContent = currentSceneData.status;
        
        const arcSelect = document.getElementById('arc-select');
        if (arcSelect) arcSelect.value = this.currentArc;
        
        // Update choices if available
        this.updateStoryChoices(currentSceneData.choices);
    }

    updateStoryChoices(choices) {
        const choicesContainer = document.querySelector('.choices-grid');
        if (!choicesContainer || !choices) return;

        choicesContainer.innerHTML = '';
        
        choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-btn';
            choiceBtn.setAttribute('data-choice', `choice-${index}`);
            
            choiceBtn.innerHTML = `
                <img src="${this.storyData[this.currentArc].scenes[this.currentScene].image}" alt="Choice ${index + 1}">
                <span>${choice.text}</span>
                <small>${choice.effect}</small>
            `;
            
            choicesContainer.appendChild(choiceBtn);
        });
    }

    previousScene() {
        const arcData = this.storyData[this.currentArc];
        if (!arcData) return;
        
        if (this.currentScene > 0) {
            this.currentScene--;
            this.updateStoryDisplay();
        }
    }

    nextScene() {
        const arcData = this.storyData[this.currentArc];
        if (!arcData) return;
        
        if (this.currentScene < arcData.scenes.length - 1) {
            this.currentScene++;
            this.updateStoryDisplay();
        } else {
            // Move to next arc if available
            this.progressToNextArc();
        }
    }

    progressToNextArc() {
        const arcKeys = Object.keys(this.storyData);
        const currentIndex = arcKeys.indexOf(this.currentArc);
        
        if (currentIndex < arcKeys.length - 1) {
            this.currentArc = arcKeys[currentIndex + 1];
            this.currentScene = 0;
            this.updateStoryDisplay();
        }
    }

    toggleAutoPlay() {
        this.isAutoPlaying = !this.isAutoPlaying;
        const autoPlayBtn = document.getElementById('auto-play');
        
        if (this.isAutoPlaying) {
            if (autoPlayBtn) {
                autoPlayBtn.textContent = '⏸ Stop Auto';
                autoPlayBtn.classList.add('btn--danger');
            }
            this.startAutoPlay();
        } else {
            if (autoPlayBtn) {
                autoPlayBtn.textContent = '▶ Auto Play';
                autoPlayBtn.classList.remove('btn--danger');
            }
            this.stopAutoPlay();
        }
    }

    startAutoPlay() {
        if (!this.isAutoPlaying) return;
        
        this.autoPlayTimer = setTimeout(() => {
            this.nextScene();
            if (this.isAutoPlaying) {
                this.startAutoPlay();
            }
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearTimeout(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }

    handleStoryChoice(choice) {
        console.log('Story choice made:', choice);
        
        // Show visual feedback
        this.showNotification('Choice recorded! Story continues...');
        
        // Progress to next scene after choice
        setTimeout(() => {
            this.nextScene();
        }, 1500);
    }

    // Character Section Methods
    filterCharacters(filter) {
        const characterCards = document.querySelectorAll('.character-card');
        
        characterCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    showCharacterDetail(characterId) {
        const characterData = this.characterData[characterId];
        if (!characterData) return;

        const nameEl = document.getElementById('modal-character-name');
        const rankEl = document.getElementById('modal-character-rank');
        const classEl = document.getElementById('modal-character-class');
        const imageEl = document.getElementById('modal-character-image');

        if (nameEl) nameEl.textContent = characterData.name;
        if (rankEl) rankEl.textContent = characterData.rank;
        if (classEl) classEl.textContent = characterData.class;
        if (imageEl) imageEl.src = characterData.image;

        this.switchCharacterTab('stats');
        this.updateCharacterTabContent(characterId, 'stats');
        this.showModal('character-modal');
    }

    switchCharacterTab(tabId) {
        const tabContents = document.querySelectorAll('.character-detail-content .tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const targetTab = document.getElementById(`${tabId}-tab`);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    }

    updateCharacterTabContent(characterId, tabId) {
        const characterData = this.characterData[characterId];
        if (!characterData) return;

        switch (tabId) {
            case 'stats':
                this.createCharacterStatsChart(characterData.stats);
                break;
            case 'abilities':
                this.updateAbilitiesTab(characterData);
                break;
            case 'story':
                this.updateStoryTab(characterData);
                break;
        }
    }

    createCharacterStatsChart(stats) {
        const canvas = document.getElementById('character-stats-canvas');
        if (!canvas || !window.Chart) return;

        const ctx = canvas.getContext('2d');
        
        if (this.currentStatsChart) {
            this.currentStatsChart.destroy();
        }

        this.currentStatsChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(stats).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
                datasets: [{
                    label: 'Character Stats',
                    data: Object.values(stats),
                    backgroundColor: 'rgba(107, 70, 193, 0.2)',
                    borderColor: '#6B46C1',
                    borderWidth: 3,
                    pointBackgroundColor: '#F59E0B',
                    pointBorderColor: '#6B46C1',
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#94A3B8'
                        },
                        grid: {
                            color: 'rgba(107, 70, 193, 0.3)'
                        },
                        angleLines: {
                            color: 'rgba(107, 70, 193, 0.3)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    updateAbilitiesTab(characterData) {
        const abilitiesEl = document.getElementById('character-abilities-list');
        if (abilitiesEl) {
            const abilitiesHTML = characterData.abilities.map(ability => `
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(107, 70, 193, 0.1); border-radius: 8px; border: 1px solid rgba(107, 70, 193, 0.3);">
                    <h4 style="color: #6B46C1; margin-bottom: 8px;">${ability}</h4>
                    <p style="color: #94A3B8;">A legendary ability mastered by ${characterData.name}</p>
                </div>
            `).join('');
            
            abilitiesEl.innerHTML = abilitiesHTML;
        }
    }

    updateStoryTab(characterData) {
        const storyEl = document.getElementById('character-story-arc');
        if (storyEl) {
            storyEl.innerHTML = `
                <h4 style="color: #6B46C1; margin-bottom: 16px;">Character Development</h4>
                <p style="color: #94A3B8; line-height: 1.6;">${characterData.description}</p>
            `;
        }
    }

    initializeCharacterStats() {
        const characterCards = document.querySelectorAll('.character-card');
        characterCards.forEach((card, index) => {
            card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        });
    }

    // Timeline Section Methods
    changeTimelineView(view) {
        console.log('Changing timeline view to:', view);
        // Timeline view changes can be implemented here
    }

    animateTimelineItems() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.animation = `slideInUp 0.8s ease-out ${index * 0.2}s both`;
        });
    }

    // Gallery Section Methods
    switchGalleryTab(galleryId) {
        const galleryContents = document.querySelectorAll('.gallery-tab-content');
        galleryContents.forEach(content => {
            content.classList.remove('active');
        });

        const targetGallery = document.getElementById(`${galleryId}-gallery`);
        if (targetGallery) {
            targetGallery.classList.add('active');
        }
    }

    initializeGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        });
    }

    // Shop Section Methods
    filterProducts() {
        const categoryFilter = document.getElementById('category-filter');
        const priceFilter = document.getElementById('price-filter');
        const productSearch = document.getElementById('product-search');
        const productCards = document.querySelectorAll('.product-card');

        const categoryValue = categoryFilter ? categoryFilter.value : 'all';
        const priceValue = priceFilter ? priceFilter.value : 'all';
        const searchValue = productSearch ? productSearch.value.toLowerCase() : '';

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseInt(card.getAttribute('data-price'));
            const productName = card.querySelector('h3').textContent.toLowerCase();

            let showProduct = true;

            // Filter by category
            if (categoryValue !== 'all' && category !== categoryValue) {
                showProduct = false;
            }

            // Filter by price
            if (priceValue !== 'all') {
                if (priceValue === 'low' && price >= 2000) showProduct = false;
                if (priceValue === 'mid' && (price < 2000 || price > 5000)) showProduct = false;
                if (priceValue === 'high' && price <= 5000) showProduct = false;
            }

            // Filter by search
            if (searchValue && !productName.includes(searchValue)) {
                showProduct = false;
            }

            card.style.display = showProduct ? 'block' : 'none';
        });
    }

    addToCart(productId) {
        const productData = this.productData[productId];
        if (!productData) return;

        const existingItem = this.shoppingCart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.shoppingCart.push({
                id: productId,
                ...productData,
                quantity: 1
            });
        }

        this.updateCartDisplay();
        
        // Show confirmation
        this.showNotification(`${productData.name} added to cart!`);
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = this.shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    updateCartModal() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        if (!cartItems || !cartTotal) return;

        if (this.shoppingCart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            cartTotal.textContent = '0';
            return;
        }

        let total = 0;
        const cartHTML = this.shoppingCart.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            return `
                <div class="cart-item" style="display: flex; gap: 16px; padding: 16px; border: 1px solid rgba(107, 70, 193, 0.3); border-radius: 8px; margin-bottom: 16px;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                    <div style="flex: 1;">
                        <h4 style="color: #6B46C1; margin: 0 0 8px 0;">${item.name}</h4>
                        <p style="color: #94A3B8; font-size: 14px; margin: 0;">₹${item.price} × ${item.quantity}</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <button class="btn btn--sm" onclick="window.soloLevelingWebsite.removeFromCart('${item.id}')">Remove</button>
                        <span style="color: #F59E0B; font-weight: bold;">₹${itemTotal}</span>
                    </div>
                </div>
            `;
        }).join('');

        cartItems.innerHTML = cartHTML;
        cartTotal.textContent = total;
    }

    removeFromCart(productId) {
        this.shoppingCart = this.shoppingCart.filter(item => item.id !== productId);
        this.updateCartDisplay();
        this.updateCartModal();
    }

    processCheckout() {
        // Simulate checkout process
        this.showNotification('Checkout successful! Order confirmed.');
        this.shoppingCart = [];
        this.updateCartDisplay();
        this.closeModal('cart-modal');
    }

    initializeShop() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        });
    }

    // Authentication Methods
    handleLogin() {
        const email = document.getElementById('login-email')?.value;
        const password = document.getElementById('login-password')?.value;

        if (email && password) {
            // Simulate login
            this.isLoggedIn = true;
            this.currentUser = {
                name: 'ShadowHunter_95',
                email: email,
                rank: 'C-Rank Hunter',
                level: 34
            };
            
            this.showNotification('Login successful! Welcome back, Hunter.');
            this.navigateToSection('dashboard');
            this.updateUserInterface();
        }
    }

    handleRegistration() {
        const firstName = document.getElementById('first-name')?.value;
        const lastName = document.getElementById('last-name')?.value;
        const email = document.getElementById('register-email')?.value;
        const username = document.getElementById('username')?.value;
        const password = document.getElementById('register-password')?.value;
        const agreeTerms = document.getElementById('agree-terms')?.checked;

        if (firstName && lastName && email && username && password && agreeTerms) {
            // Simulate registration
            this.isLoggedIn = true;
            this.currentUser = {
                name: username,
                email: email,
                rank: 'E-Rank Hunter',
                level: 1
            };
            
            this.showNotification('Registration successful! Welcome to the Shadow Army.');
            this.navigateToSection('dashboard');
            this.updateUserInterface();
        } else {
            this.showNotification('Please fill in all required fields and agree to terms.');
        }
    }

    updateUserInterface() {
        if (this.isLoggedIn && this.currentUser) {
            // Update dashboard with user data
            const userName = document.getElementById('user-name');
            if (userName) userName.textContent = this.currentUser.name;
            
            // Show/hide sections based on login status
            const dashboardSection = document.getElementById('dashboard');
            if (dashboardSection) {
                dashboardSection.classList.remove('hidden');
            }
        }
    }

    isAdmin() {
        return this.isLoggedIn && this.currentUser && this.currentUser.name === 'ShadowHunter_95';
    }

    // Dashboard Methods
    switchDashboardTab(tabId) {
        const tabContents = document.querySelectorAll('.dashboard-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const targetTab = document.getElementById(`${tabId}-tab`);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    }

    // Admin Methods
    switchAdminTab(tabId) {
        const tabContents = document.querySelectorAll('.admin-tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const targetTab = document.getElementById(`${tabId}-admin`);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    }

    // Global Control Methods
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        const body = document.body;
        const themeToggle = document.getElementById('theme-toggle');
        
        if (this.isDarkTheme) {
            body.classList.remove('light-theme');
            if (themeToggle) themeToggle.textContent = '🌙';
        } else {
            body.classList.add('light-theme');
            if (themeToggle) themeToggle.textContent = '☀️';
        }
    }

    toggleAudio() {
        this.audioEnabled = !this.audioEnabled;
        const audioToggle = document.getElementById('audio-toggle');
        
        if (audioToggle) {
            audioToggle.textContent = this.audioEnabled ? '🔊' : '🔇';
        }
        
        if (this.audioEnabled) {
            console.log('Audio enabled');
        } else {
            console.log('Audio disabled');
        }
    }

    // Modal Methods
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    closeAllModals() {
        const modals = document.querySelectorAll('.modal:not(.hidden)');
        modals.forEach(modal => {
            modal.classList.add('hidden');
        });
        document.body.style.overflow = '';
    }

    // Utility Methods
    updateProgressTracker() {
        const totalSections = 8; // Total navigable sections
        const visitedCount = this.visitedSections.size;
        const progress = Math.round((visitedCount / totalSections) * 100);
        
        this.overallProgress = progress;
        
        const progressFill = document.getElementById('overall-progress-fill');
        const progressText = document.getElementById('overall-progress');
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${progress}%`;
    }

    showNotification(message) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(107, 70, 193, 0.15) 100%);
            color: #6B46C1;
            padding: 16px 24px;
            border-radius: 8px;
            border: 2px solid rgba(107, 70, 193, 0.3);
            backdrop-filter: blur(15px);
            box-shadow: 0 0 30px rgba(107, 70, 193, 0.6);
            z-index: 3001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
            max-width: 300px;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 2000);
        }
    }
}

// Global helper functions
window.closeModal = function(modalId) {
    if (window.soloLevelingWebsite) {
        window.soloLevelingWebsite.closeModal(modalId);
    }
};

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - Initializing Solo Leveling Website...');
    try {
        window.soloLevelingWebsite = new SoloLevelingWebsite();
    } catch (error) {
        console.error('Error initializing website:', error);
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Solo Leveling Website loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }, 0);
    });
}