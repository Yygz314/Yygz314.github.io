// 初始化粒子效果
document.addEventListener('DOMContentLoaded', function() {
    // 粒子配置
    const particleSettings = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00f7ff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0099ff",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    };
    
    // 初始化粒子
    particlesJS('particles-js', particleSettings);
    
    // 获取粒子容器
    const particlesContainer = document.getElementById('particles-js');
    let particlesActive = true;
    
    // 粒子控制功能
    document.getElementById('startParticles').addEventListener('click', function() {
        particlesJS('particles-js', particleSettings);
        particlesActive = true;
        this.textContent = "粒子运行中";
        setTimeout(() => {
            this.textContent = "启动粒子";
        }, 1500);
    });
    
    document.getElementById('stopParticles').addEventListener('click', function() {
        particlesContainer.innerHTML = '';
        particlesActive = false;
        this.textContent = "粒子已停止";
        setTimeout(() => {
            this.textContent = "暂停粒子";
        }, 1500);
    });
    
    document.getElementById('changeDensity').addEventListener('click', function() {
        if (!particlesActive) return;
        
        // 随机改变粒子密度
        const newDensity = Math.floor(Math.random() * 120) + 30;
        particleSettings.particles.number.value = newDensity;
        particlesJS('particles-js', particleSettings);
        
        this.textContent = `密度: ${newDensity}`;
        setTimeout(() => {
            this.textContent = "改变密度";
        }, 1500);
    });
    
    // 鼠标移动光效
    document.addEventListener('mousemove', function(e) {
        const glow = document.createElement('div');
        glow.className = 'glow';
        glow.style.left = e.pageX + 'px';
        glow.style.top = e.pageY + 'px';
        document.body.appendChild(glow);
        
        // 移除光效元素
        setTimeout(() => {
            glow.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(glow);
            }, 500);
        }, 100);
    });
    
    // 动态创建光效样式
    const style = document.createElement('style');
    style.innerHTML = `
        .glow {
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(0, 247, 255, 0.7);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 15px 5px rgba(0, 247, 255, 0.8);
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});