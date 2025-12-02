        // 导航栏高亮逻辑
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section, header');

        // 监听滚动事件
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            // 更新导航高亮
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });

            // 导航栏滚动样式变化
            const navbar = document.getElementById('navbar');
            if (scrollY > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                navbar.style.padding = '0.8rem 0';
            }
        });

        // 初始触发一次滚动事件，确保导航高亮正确
        window.dispatchEvent(new Event('scroll'));

// 折叠/展开综测加分细则
const collapseHeader = document.getElementById('rulesHeader');
const collapseContent = document.getElementById('rulesContent');

// 初始状态：收缩
collapseContent.classList.remove('active');
collapseHeader.classList.remove('active');

// 点击标题切换状态
collapseHeader.addEventListener('click', () => {
    collapseContent.classList.toggle('active');
    collapseHeader.classList.toggle('active');
});

// 折叠/展开基础文明类综测加分细则
const collapseHeader2 = document.getElementById('rulesHeader2');
const collapseContent2 = document.getElementById('rulesContent2');

// 初始状态：收缩
collapseContent2.classList.remove('active');
const CORRECT_PASSWORD = "216929"; 
collapseHeader2.classList.remove('active');

// 点击标题切换状态
collapseHeader2.addEventListener('click', () => {
    collapseContent2.classList.toggle('active');
    collapseHeader2.classList.toggle('active');
});

// 折叠/展开能力素质类综测加分细则
const collapseHeader3 = document.getElementById('rulesHeader3');
const collapseContent3 = document.getElementById('rulesContent3');

// 初始状态：收缩
collapseContent3.classList.remove('active');
collapseHeader3.classList.remove('active');

// 点击标题切换状态
collapseHeader3.addEventListener('click', () => {
    collapseContent3.classList.toggle('active');
    collapseHeader3.classList.toggle('active');
});


const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const errorText = document.getElementById('errorText');
const verifyBtn = document.getElementById('verifyBtn');
const mainContent = document.getElementById('mainContent');
// 回车触发验证
passwordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') verifyPassword();
});
// 点击按钮触发验证
verifyBtn.addEventListener('click', verifyPassword);
// 验证密码函数
function verifyPassword() {
  const inputPassword = passwordInput.value.trim();
  if (inputPassword === CORRECT_PASSWORD) {
    // 密码正确：隐藏弹窗，显示内容
    passwordModal.style.display = 'none';
    mainContent.style.display = 'block';
    // 可选：保存cookie，下次访问无需重复输入（有效期7天）
    document.cookie = "verified=1; max-age=604800; path=/";
  } else {
    // 密码错误：提示+清空输入
    errorText.textContent = '密码错误，请重新输入！';
    passwordInput.value = '';
    passwordInput.focus();
    // 3秒后清空错误提示
    setTimeout(() => errorText.textContent = '', 3000);
  }
}

// 检查cookie：如果已验证过，直接显示内容
window.onload = function() {
  if (document.cookie.includes('verified=1')) {
    passwordModal.style.display = 'none';
    mainContent.style.display = 'block';
  }
};