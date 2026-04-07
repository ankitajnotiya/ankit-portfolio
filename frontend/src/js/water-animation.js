// Three.js Water Animation
import * as THREE from 'three';

class WaterAnimation {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.water = null;
    this.mouse = new THREE.Vector2();
    this.init();
  }

  init() {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Append to body
    const canvas = document.createElement('div');
    canvas.id = 'water-canvas';
    canvas.appendChild(this.renderer.domElement);
    document.body.insertBefore(canvas, document.body.firstChild);

    // Create water geometry
    this.createWater();
    
    // Lighting
    this.setupLighting();
    
    // Event listeners
    this.setupEventListeners();
    
    // Start animation
    this.animate();
  }

  createWater() {
    // Water geometry with more segments for better wave effect
    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    
    // Water material with wave animation
    const material = new THREE.MeshPhongMaterial({
      color: 0x006994,
      transparent: true,
      opacity: 0.6,
      shininess: 100,
      specular: 0x222222,
      side: THREE.DoubleSide
    });

    this.water = new THREE.Mesh(geometry, material);
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.y = -2;
    this.scene.add(this.water);

    // Store original vertices for animation
    this.originalVertices = geometry.attributes.position.array.slice();
  }

  setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(ambientLight);

    // Directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    // Point light for water glow
    const pointLight = new THREE.PointLight(0x00B7FF, 1, 100);
    pointLight.position.set(0, 5, 0);
    this.scene.add(pointLight);
  }

  setupEventListeners() {
    // Mouse move for interactive waves
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Click for ripple effect
    window.addEventListener('click', (event) => {
      this.createRipple(event.clientX, event.clientY);
    });
  }

  createRipple(x, y) {
    // Create solid circle effect at click position
    const rippleGeometry = new THREE.CircleGeometry(0.3, 32);
    const rippleMaterial = new THREE.MeshBasicMaterial({
      color: 0x00B7FF,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });
    
    const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.set(
      (x / window.innerWidth) * 10 - 5,
      -1.5,
      (y / window.innerHeight) * 10 - 5
    );
    
    this.scene.add(ripple);

    // Animate ripple
    const animateRipple = () => {
      ripple.scale.x += 0.1;
      ripple.scale.y += 0.1;
      ripple.material.opacity -= 0.02;
      
      if (ripple.material.opacity > 0) {
        requestAnimationFrame(animateRipple);
      } else {
        this.scene.remove(ripple);
      }
    };
    
    animateRipple();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Animate water waves
    const time = Date.now() * 0.001;
    const positions = this.water.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      // Create wave effect
      const waveHeight = Math.sin(x * 2 + time) * 0.1 + 
                        Math.cos(z * 2 + time) * 0.1 +
                        Math.sin((x + z) * 1.5 + time * 1.5) * 0.05;
      
      positions[i + 2] = this.originalVertices[i + 2] + waveHeight;
    }
    
    this.water.geometry.attributes.position.needsUpdate = true;
    this.water.geometry.computeVertexNormals();

    // Mouse interaction
    this.water.rotation.z = this.mouse.x * 0.1;
    this.water.rotation.x = -Math.PI / 2 + this.mouse.y * 0.1;

    // Render
    this.renderer.render(this.scene, this.camera);
  }
}

// Initialize water animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WaterAnimation();
});

// Create floating particles
function createParticles() {
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    document.body.appendChild(particle);
  }
}

// Create water ripples on hover
function createWaterRipples() {
  const hero = document.querySelector('.hero');
  
  hero.addEventListener('mousemove', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'water-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 2000);
  });
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  createWaterRipples();
});

export default WaterAnimation;
