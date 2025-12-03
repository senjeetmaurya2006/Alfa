class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        
        nav {
          transition: all 0.3s ease;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #6366f1, #f43f5e);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu {
          transition: all 0.3s ease;
        }
      </style>
      <nav class="fixed w-full bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <a href="#" class="text-xl font-bold text-white flex items-center">
                <span class="text-primary">Sanjeet</span>
                <span class="text-secondary">Maurya</span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="text-gray-300 hover:text-white transition-all nav-link">Home</a>
              <a href="#about" class="text-gray-300 hover:text-white transition-all nav-link">About</a>
              <a href="#skills" class="text-gray-300 hover:text-white transition-all nav-link">Skills</a>
              <a href="#projects" class="text-gray-300 hover:text-white transition-all nav-link">Projects</a>
              <a href="#resume" class="text-gray-300 hover:text-white transition-all nav-link">Resume</a>
              <a href="#contact" class="text-gray-300 hover:text-white transition-all nav-link">Contact</a>
              <button id="theme-toggle" class="p-2 rounded-full focus:outline-none">
                <i data-feather="moon" class="hidden dark:block"></i>
                <i data-feather="sun" class="block dark:hidden"></i>
              </button>
            </div>
            <div class="md:hidden flex items-center">
              <button id="mobile-menu-button" class="p-2 rounded-md focus:outline-none">
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);