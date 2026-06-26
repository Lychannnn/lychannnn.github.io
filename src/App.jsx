import React from 'react';
import './App.css'; // Link the styles
// Put your profile photo in the same folder as profile.jpg
import profileImg from './profile.jpg'; 

function App() {
  return (
    <div>
      {/* 1. FIXED TOP NAVIGATION BAR */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-logo">Nan Lao Ywet</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      {/* 2. MAIN PORTFOLIO BODY CONTAINER */}
      <div className="portfolio-container">
        
        {/* Profile Header Hero Section */}
        <header id="about" className="profile-hero" style={{ paddingTop: '6rem' }}>
          <div className="profile-text-content">
            <h1 className="profile-name">Nan Lao Ywet</h1>
            <h2 className="profile-title">Computer Vision & Perception Engineer (PhD)</h2>
            <p className="profile-contact">laoywet14@gmail.com | +82 (0) 10-4128-1899</p>
            
            <div className="profile-summary">
              <p>
                Computer Vision & Perception Engineer (PhD) with 5+ years of hands-on experience developing and deploying real-time perception systems for autonomous platforms in real-world settings. Deep knowledge of multi-modal sensor fusion across camera, lidar, and depth modalities, multi-object detection, and inference optimization on embedded edge hardware under strict compute constraints.
              </p>
              <p>
                Expertise in building vision models that are validated through high-fidelity simulation environments prior to physical deployment, with a proven track record of taking perception pipelines from research prototype to production deployment.
              </p>
            </div>

            {/* Links section */}
            <div className="links">
              <a href="https://www.linkedin.com/in/nan-lao-ywet" target="_blank" rel="noreferrer" className="btn-linkedin">LinkedIn</a>
              <a href="https://scholar.google.com/citations?user=YOUR_PROFILE_ID_HERE" target="_blank" rel="noreferrer" className="btn-scholar">Google Scholar</a>
            </div>
          </div>

          <div className="profile-image-container">
            <div className="profile-image-circle">
              <img src={profileImg} alt="Nan Lao Ywet" />
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h3>Experience</h3>
          <div className="job">
            <h4>Postdoctoral Researcher & AI Engineer — Kada Lab, Konkuk University</h4>
            <p className="date">Feb 2026 - May 2026 | Seoul, South Korea</p>
            <ul>
              <li>Led the advanced R&D research team for the Autonomous Urban Air Mobility (UAM) project, successfully overseeing the final development stages and technical transition to industry partners.</li>
              <li>Mentored and guided junior researchers on deep learning architectures and software engineering best practices, accelerating team delivery timelines.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Graduate Research Assistant (M.S. & Ph.D.) — Kada Lab, Konkuk University</h4>
            <p className="date">Mar 2020 - Feb 2026</p>
            <ul>
              <li>Engineered real-time multi-sensor (Camera-LiDAR) perception pipelines deployed on edge hardware, resulting in enhanced situational awareness and low-latency object classification.</li>
              <li>Optimized multimodal sensor fusion architectures for challenging environmental conditions, delivering a significant increase in scene understanding accuracy and real-time model inference stability.</li>
              <li>Developed integrated perception-planning pipelines combining 3D computer vision with autonomous path planning and collision avoidance.</li>
              <li>Designed high-fidelity digital-twin simulation environments (AirSim, Unreal Engine, Unity), enabling safe algorithmic validation and closing the sim-to-real transfer gap.</li>
            </ul>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="section">
          <h3>Selected Projects</h3>
          
          <div className="project">
            <h4>AI Digital Twin for Smart Urban Air Mobility (UAM) [NFR Korea Project]</h4>
            <p className="project-date">2020 - 2026</p>
            <p>Led development of AI-based situational awareness and trajectory prediction systems, delivering a unified autonomy evaluation platform that reduced system debugging cycles. Implemented an end-to-end autonomous software stack merging perception, decision-making, and validation. Integrated mission planning, traffic management, and foundational GStreamer-based video ingestion modules. Validated system performance through real-world UAV flight testing.</p>
            <div className="project-tags">
              <span>Digital Twin</span><span>AirSim</span><span>Trajectory Prediction</span><span>GStreamer</span><span>Sensor Fusion</span>
            </div>
          </div>

          <div className="project">
            <h4>Autonomous UAV AI System [Unitech Co., Korea Project]</h4>
            <p className="project-date">2022 - 2023</p>
            <p>Designed system architecture for end-to-end autonomous UAV perception-planning pipelines. Developed real-time object detection and multi-object tracking modules with integrated simulation-based validation. Executed full system software integration, hardware testing, and deployment, successfully passing cross-functional verification for real-world autonomous operations.</p>
            <div className="project-tags">
              <span>Object Detection</span><span>Multi-Object Tracking</span><span>Perception-Planning</span><span>Hardware Integration</span>
            </div>
          </div>

          <div className="project">
            <h4>Manned-Unmanned Teaming Project [Korea MUM-T]</h4>
            <p className="project-date">2022 - 2024</p>
            <p>Developed AI-based decision-support and multi-target tracking algorithms within simulated military robotics environments, resulting in optimized mission planning and tactical coordination for collaborative manned-unmanned operations.</p>
            <div className="project-tags">
              <span>MUM-T</span><span>Decision-Support</span><span>Multi-Target Tracking</span><span>Robotics Simulation</span>
            </div>
          </div>

          <div className="project">
            <h4>Simulation Projects [KCEI/KAIA, UWC]</h4>
            <p className="project-date">2020 - 2023</p>
            <p>Designed and built high-fidelity 3D VR environments (Unreal Engine, Unity) for autonomous UAV system testing and safety-critical pilot training, covering terrain, airspace, and dynamic scenario authoring. Integrated real-time flight and physics simulation into immersive VR displays on HTC Vive / SteamVR.</p>
            <div className="project-tags">
              <span>Unreal Engine</span><span>Unity</span><span>VR Simulation</span><span>SteamVR</span><span>PX4 Autopilot</span>
            </div>
          </div>
        </section>

        {/* Technical Expertise Section - Redesigned Card Grid Layout */}
        <section id="skills" className="section text-center-wrapper">
          <div className="skills-header">
            <h2>Technical Skills</h2>
            <p className="skills-subtitle">
              Comprehensive expertise across modern development stack with focus on computer vision, perception pipelines, and autonomous system frameworks.
            </p>
          </div>

          <div className="skills-cards-container">
            {/* Card 1: Programming Languages */}
            <div className="skill-card">
              <div className="card-title-area">
                <span className="card-icon">&lt;&gt;</span>
                <h3>Programming Languages</h3>
              </div>
              <div className="badge-group">
                <span>Python</span>
                <span>C++</span>
                <span>C#</span>
                <span>Java</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>

            {/* Card 2: Frameworks & Deep Learning */}
            <div className="skill-card">
              <div className="card-title-area">
                <span className="card-icon">🧠</span>
                <h3>Frameworks & Deep Learning</h3>
              </div>
              <div className="badge-group">
                <span>PyTorch</span>
                <span>TensorFlow</span>
                <span>OpenCV</span>
                <span>Reinforcement Learning</span>
                <span>CUDA</span>
              </div>
            </div>

            {/* Card 3: Robotics & Autonomy Frameworks */}
            <div className="skill-card">
              <div className="card-title-area">
                <span className="card-icon">🌐</span>
                <h3>Robotics & Autonomy Frameworks</h3>
              </div>
              <div className="badge-group">
                <span>ROS / ROS2</span>
                <span>PX4 Autopilot</span>
                <span>Autonomous Path Planning</span>
                <span>Sensor Fusion (Vision/LiDAR)</span>
              </div>
            </div>

            {/* Card 4: Hardware & Embedded Deployment */}
            <div className="skill-card">
              <div className="card-title-area">
                <span className="card-icon">🖳</span>
                <h3>Hardware & Embedded</h3>
              </div>
              <div className="badge-group">
                <span>NVIDIA Jetson</span>
                <span>NVIDIA GPUs</span>
                <span>Edge AI Deployment</span>
                <span>Raspberry Pi</span>
              </div>
            </div>

            {/* Card 5: Simulation & Digital Twins */}
            <div className="skill-card">
              <div className="card-title-area">
                <span className="card-icon">☁️</span>
                <h3>Simulation & Tools</h3>
              </div>
              <div className="badge-group">
                <span>AirSim</span>
                <span>Unreal Engine</span>
                <span>Unity</span>
                <span>SteamVR</span>
                <span>MuJoCo (robot manipulation simulation)</span>
                <span>Digital Twin Simulation</span>
              </div>
            </div>

            {/* Card 6: DevOps & Infrastructure */}
            <div className="skill-card">
              <div className="card-title-area">
                <span className="card-icon">⚙️</span>
                <h3>DevOps & Infrastructure</h3>
              </div>
              <div className="badge-group">
                <span>Git</span>
                <span>GitHub</span>
                <span>Linux</span>
                <span>Windows</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;