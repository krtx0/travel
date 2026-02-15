class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="bg-brand-dark text-white py-16 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="grid md:grid-cols-4 gap-12 mb-12">

            <div class="md:col-span-2">
                <div class="flex items-center gap-2 mb-6">
                    <i data-lucide="compass" class="w-8 h-8 text-brand-gold"></i>
                    <div class="flex flex-col">
                        <span class="font-serif text-2xl font-semibold">Pruthvi Paryatan</span>
                        <span class="text-xs tracking-[0.2em] text-white/60 uppercase">Travel</span>
                    </div>
                </div>

                <p class="text-white/60 max-w-sm mb-6">
                    Bespoke travel planning for discerning travelers. Creating personalized journeys that inspire, delight, and exceed expectations.
                </p>

                <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>

                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                        <i data-lucide="facebook" class="w-5 h-5"></i>
                    </a>

                    <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>

            <div>
                <h4 class="font-serif text-lg mb-6 text-brand-gold">Quick Links</h4>

                <ul class="space-y-3 text-white/60">
                    <li><a href="#experiences" class="hover:text-white transition-colors">Experiences</a></li>
                    <li><a href="#process" class="hover:text-white transition-colors">How It Works</a></li>
                    <li><a href="#testimonials" class="hover:text-white transition-colors">Testimonials</a></li>
                    <li><a href="#about" class="hover:text-white transition-colors">About Leena</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-serif text-lg mb-6 text-brand-gold">Contact</h4>

                <ul class="space-y-3 text-white/60">
                    <li class="flex items-center gap-3">
                        <i data-lucide="mail" class="w-4 h-4 text-brand-gold"></i>
                        <span>leena@pruthviparyatan.com</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <i data-lucide="phone" class="w-4 h-4 text-brand-gold"></i>
                        <span>+91 99999 99999</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <i data-lucide="map-pin" class="w-4 h-4 text-brand-gold"></i>
                        <span>Mumbai, India</span>
                    </li>
                </ul>
            </div>

        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-white/40 text-sm">© 2024 Pruthvi Paryatan Travel. All rights reserved.</p>
            <p class="text-white/40 text-sm">Crafted with precision and passion.</p>
        </div>

    </div>
</footer>
    `;

    // re-render lucide icons after injection
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

customElements.define("custom-footer", CustomFooter);
