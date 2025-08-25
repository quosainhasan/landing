{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js"></script>



<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
  class Scene {
    constructor(model){
      this.renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
        // this.renderer.setSize(container.clientWidth, container.clientHeight);
        
      this.renderer.setPixelRatio(window.devicePixelRatio);
      document.getElementById('threejs-container').appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
      this.camera.position.set(0, 0, 180);
        this.camera.lookAt(new THREE.Vector3(0, 5, 0));

      const light = new THREE.PointLight(0xffffff, 0.75);
      light.position.set(70, -20, 150);
      this.scene.add(light);

      const softLight = new THREE.AmbientLight(0xffffff, 1.5);
      this.scene.add(softLight);

      this.modelGroup = new THREE.Group();
      this.modelGroup.add(model);
      this.scene.add(this.modelGroup);

      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
    render = () => this.renderer.render(this.scene, this.camera);
    onResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.render();
    }
  }

  function loadModel(){
    gsap.registerPlugin(ScrollTrigger);

    const loader = new THREE.OBJLoader();
    loader.load('./images/1405+Plane_1.obj', function(object){
      object.traverse(c => {
        if (c.isMesh){
          c.material = new THREE.MeshPhongMaterial({ color: 0x171511, specular: 0xD0CBC7, shininess: 5, flatShading: true });
        }
      });
      setupAnimation(object);
    });
  }

  function setupAnimation(model){
    const scene = new Scene(model);
    const plane = scene.modelGroup;
    const tau = Math.PI * 2;

    gsap.set(plane.rotation, { y: tau * 0.5, x: tau * 0.25, z: 0 });
    gsap.set(plane.position, { x: 0, y: -10, z: 30 });

    scene.render();

      

     const tl = gsap.timeline({
      onUpdate: scene.render,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
          //end: '+=' + document.querySelector('#home').offsetHeight,
        scrub: true,
        onLeave: () => gsap.to(plane.position, { z: 1500, y: 300, duration: 1.5, ease: 'power4.in' })
      },
      defaults: { duration: 1, ease: 'power2.inOut' }
    });

    tl.to(plane.rotation, { x: tau * 0.25, y: tau * 0.5, z: 0 })
      .to(plane.position, { z: 60, x: 30 }, '<')
      .to(plane.rotation, { x: tau * 0.35, y: tau * 0.75, z: tau * 0.6 })
      .to(plane.position, { z: 100, x: 20, y: 0 }, '<')
      .to(plane.rotation, { x: tau * 0.15, y: tau * 0.85, z: 0 })
      .to(plane.position, { z: -150, x: 0, y: 0 }, '<')
      .to(plane.rotation, { x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none' })
      .to(plane.position, { x: 0, y: 30, z: 320, ease: 'power1.in' }, '<');

      gsap.to('.hero-section', {
      scale: 1.05,
      transformOrigin: '50% 0%',
      scrollTrigger: { trigger: '.sunset', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  } 

  loadModel();
</script> */}