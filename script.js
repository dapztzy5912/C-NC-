        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const colors = [
                'rgba(139, 92, 246, 0.6)',
                'rgba(6, 182, 212, 0.6)',
                'rgba(236, 72, 153, 0.6)',
                'rgba(251, 191, 36, 0.6)'
            ];
            
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            return particle;
        }

        const particleContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            particleContainer.appendChild(createParticle());
        }

        document.addEventListener('click', (e) => {
            const card = document.querySelector('.product-card');
            if (!card.contains(e.target)) {
                card.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelector('.product-card').classList.remove('active');
            }
        });

        const card = document.querySelector('.product-card');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });

        setInterval(() => {
            if (particleContainer.children.length < 50) {
                particleContainer.appendChild(createParticle());
            }
        }, 2000);

        setInterval(() => {
            const particles = particleContainer.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                if (index > 50) {
                    particle.remove();
                }
            });
        }, 5000);