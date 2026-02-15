class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav id="navbar" class="w-full bg-brand-dark backdrop-blur-md py-4 shadow-lg">

        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex items-center justify-between">

                <div class="flex items-center gap-2">
                    <i data-lucide="compass" class="w-8 h-8 text-brand-gold"></i>
                    <div class="flex flex-col">
                        <span class="font-serif text-xl font-semibold tracking-wide text-white">Pruthvi Paryatan</span>
                        <span class="text-xs tracking-[0.2em] text-white/80 uppercase">Travel</span>
                    </div>
                </div>

                <div class="hidden md:flex items-center gap-8">
                    <a href="#experiences" class="nav-link text-white/90 hover:text-brand-gold transition-colors text-sm tracking-wide">Experiences</a>
                    <a href="#process" class="nav-link text-white/90 hover:text-brand-gold transition-colors text-sm tracking-wide">Process</a>
                    <a href="#testimonials" class="nav-link text-white/90 hover:text-brand-gold transition-colors text-sm tracking-wide">Stories</a>
                    <a href="#about" class="nav-link text-white/90 hover:text-brand-gold transition-colors text-sm tracking-wide">About</a>
                    <a href="#contact" class="nav-link text-white/90 hover:text-brand-gold transition-colors text-sm tracking-wide">Contact</a>
                </div>

            </div>
        </div>
    </nav>
    `;

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
