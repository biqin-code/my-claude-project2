/* ─────────────────────────────────────────────────────────────────
 * Velvet Ledger - 共享 JavaScript
 * 数据层、路由、导航、工具函数
 * ───────────────────────────────────────────────────────────────── */

// ══════════════════════════════════════════════════════════════════
// 数据存储键名
// ══════════════════════════════════════════════════════════════════

const STORAGE_KEYS = {
  USER: 'velvet_user',
  RECORDS: 'velvet_records',
  CATEGORIES: 'velvet_categories',
  BUDGETS: 'velvet_budgets',
  SETTINGS: 'velvet_settings'
};

// ══════════════════════════════════════════════════════════════════
// 默认分类
// ══════════════════════════════════════════════════════════════════

const DEFAULT_EXPENSE_CATEGORIES = [
  { id: 'meal', emoji: '🍜', name: '餐饮', description: '日常饮食消费' },
  { id: 'shopping', emoji: '🛍️', name: '购物', description: '服装、饰品等' },
  { id: 'transport', emoji: '🚗', name: '交通', description: '出行、打车、加油' },
  { id: 'entertainment', emoji: '🎮', name: '娱乐', description: '游戏、电影、KTV' },
  { id: 'fitness', emoji: '💪', name: '健身', description: '健身房、运动' },
  { id: 'housing', emoji: '🏠', name: '居住', description: '房租、水电费' },
  { id: 'medical', emoji: '🏥', name: '医疗', description: '医院、药品' },
  { id: 'education', emoji: '📚', name: '教育', description: '课程、书籍' },
  { id: 'communication', emoji: '📱', name: '通讯', description: '话费、网络' },
  { id: 'beauty', emoji: '💄', name: '美容', description: '护肤、美发' },
  { id: 'clothing', emoji: '👔', name: '服饰', description: '衣服、鞋子' },
  { id: 'travel', emoji: '✈️', name: '旅游', description: '出行、酒店' },
  { id: 'social', emoji: '🎉', name: '社交', description: '聚会、请客' },
  { id: 'pet', emoji: '🐱', name: '宠物', description: '宠物用品' },
  { id: 'car', emoji: '🚙', name: '汽车', description: '保养、维修' },
  { id: 'home', emoji: '🛋️', name: '家居', description: '家具、家纺' },
  { id: 'gift', emoji: '🎁', name: '礼物', description: '送礼、红包' },
  { id: 'snack', emoji: '🍪', name: '零食', description: '小吃、奶茶' },
  { id: 'digital', emoji: '💻', name: '数码', description: '电子产品' },
  { id: 'other', emoji: '📦', name: '其他', description: '其他支出' }
];

const DEFAULT_INCOME_CATEGORIES = [
  { id: 'salary', emoji: '💰', name: '工资', description: '固定工资收入' },
  { id: 'bonus', emoji: '🎊', name: '奖金', description: '年终奖、绩效' },
  { id: 'parttime', emoji: '💼', name: '兼职', description: '副业收入' },
  { id: 'investment', emoji: '📈', name: '投资收益', description: '股票、基金' },
  { id: 'financial', emoji: '🏦', name: '理财收益', description: '利息、分红' },
  { id: 'redpacket', emoji: '🧧', name: '红包', description: '微信红包、礼金' },
  { id: 'reimburse', emoji: '📋', name: '报销', description: '费用报销' },
  { id: 'rent', emoji: '🏘️', name: '租金收入', description: '房租出租' },
  { id: 'cashback', emoji: '💵', name: '返现', description: '返利、折扣' },
  { id: 'other', emoji: '💎', name: '其他收入', description: '其他收入' }
];

const PAYMENT_METHODS = [
  { id: 'wechat', emoji: '💳', name: '微信支付' },
  { id: 'alipay', emoji: '💰', name: '支付宝' },
  { id: 'card', emoji: '🏦', name: '银行卡' },
  { id: 'cash', emoji: '💵', name: '现金' }
];

// ══════════════════════════════════════════════════════════════════
// 存储操作
// ══════════════════════════════════════════════════════════════════

const Storage = {
  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Storage get error:', e);
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage set error:', e);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage remove error:', e);
      return false;
    }
  }
};

// ══════════════════════════════════════════════════════════════════
// 用户认证
// ══════════════════════════════════════════════════════════════════

const Auth = {
  getCurrentUser() {
    return Storage.get(STORAGE_KEYS.USER);
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  register(username, password) {
    const users = Storage.get(STORAGE_KEYS.USER + '_all') || [];

    if (users.find(u => u.username === username)) {
      return { success: false, message: '用户名已存在' };
    }

    const hashedPassword = this.hashPassword(password);
    console.log('Register:', username, 'password:', password, 'hash:', hashedPassword);

    const user = {
      username,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      settings: {
        language: 'zh-CN',
        darkMode: 'system',
        reminder: true,
        reminderTime: '20:00'
      }
    };

    users.push(user);
    Storage.set(STORAGE_KEYS.USER + '_all', users);
    Storage.set(STORAGE_KEYS.USER, { username, createdAt: user.createdAt, settings: user.settings });

    // 初始化用户数据
    this.initUserData(username);

    console.log('Registration successful, user logged in');
    return { success: true };
  },

  login(username, password) {
    const users = Storage.get(STORAGE_KEYS.USER + '_all') || [];
    const hashedInput = this.hashPassword(password);
    console.log('Login attempt:', username, 'input hash:', hashedInput);
    console.log('Stored users:', JSON.stringify(users, null, 2));

    const user = users.find(u => u.username === username && u.password === hashedInput);

    if (user) {
      console.log('User found, logging in:', user.username);
      Storage.set(STORAGE_KEYS.USER, { username: user.username, createdAt: user.createdAt, settings: user.settings });
      return { success: true };
    }

    console.log('User not found or password mismatch');
    return { success: false, message: '用户名或密码错误' };
  },

  logout() {
    Storage.remove(STORAGE_KEYS.USER);
    Storage.remove(STORAGE_KEYS.RECORDS);
    Storage.remove(STORAGE_KEYS.CATEGORIES);
    Storage.remove(STORAGE_KEYS.BUDGETS);
  },

  changePassword(oldPassword, newPassword) {
    const users = Storage.get(STORAGE_KEYS.USER + '_all') || [];
    const currentUser = this.getCurrentUser();
    if (!currentUser) return { success: false, message: '未登录' };

    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex === -1) return { success: false, message: '用户不存在' };

    if (users[userIndex].password !== this.hashPassword(oldPassword)) {
      return { success: false, message: '原密码错误' };
    }

    users[userIndex].password = this.hashPassword(newPassword);
    Storage.set(STORAGE_KEYS.USER + '_all', users);
    return { success: true };
  },

  hashPassword(password) {
    // 简单哈希，实际生产应使用更安全的方式
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    const result = 'hash_' + Math.abs(hash).toString(16);
    console.log('hashPassword:', password, '->', result);
    return result;
  },

  initUserData(username) {
    Storage.set(STORAGE_KEYS.RECORDS + '_' + username, []);
    Storage.set(STORAGE_KEYS.CATEGORIES + '_' + username, {
      expense: [...DEFAULT_EXPENSE_CATEGORIES],
      income: [...DEFAULT_INCOME_CATEGORIES]
    });
    Storage.set(STORAGE_KEYS.BUDGETS + '_' + username, {
      total: 0,
      categories: {}
    });
  },

  getUserRecords() {
    const user = this.getCurrentUser();
    if (!user) return [];
    return Storage.get(STORAGE_KEYS.RECORDS + '_' + user.username) || [];
  },

  saveRecord(record) {
    const user = this.getCurrentUser();
    if (!user) return false;
    const records = this.getUserRecords();
    records.push(record);
    return Storage.set(STORAGE_KEYS.RECORDS + '_' + user.username, records);
  },

  updateRecord(id, updates) {
    const user = this.getCurrentUser();
    if (!user) return false;
    const records = this.getUserRecords();
    const index = records.findIndex(r => r.id === id);
    if (index === -1) return false;
    records[index] = { ...records[index], ...updates };
    return Storage.set(STORAGE_KEYS.RECORDS + '_' + user.username, records);
  },

  deleteRecord(id) {
    const user = this.getCurrentUser();
    if (!user) return false;
    const records = this.getUserRecords();
    const filtered = records.filter(r => r.id !== id);
    return Storage.set(STORAGE_KEYS.RECORDS + '_' + user.username, filtered);
  },

  getUserCategories() {
    const user = this.getCurrentUser();
    if (!user) return { expense: DEFAULT_EXPENSE_CATEGORIES, income: DEFAULT_INCOME_CATEGORIES };
    const data = Storage.get(STORAGE_KEYS.CATEGORIES + '_' + user.username);
    if (!data) {
      this.initUserData(user.username);
      return { expense: DEFAULT_EXPENSE_CATEGORIES, income: DEFAULT_INCOME_CATEGORIES };
    }
    return data;
  },

  saveCategories(categories) {
    const user = this.getCurrentUser();
    if (!user) return false;
    return Storage.set(STORAGE_KEYS.CATEGORIES + '_' + user.username, categories);
  },

  getUserBudgets() {
    const user = this.getCurrentUser();
    if (!user) return { total: 0, categories: {} };
    const data = Storage.get(STORAGE_KEYS.BUDGETS + '_' + user.username);
    if (!data) {
      this.initUserData(user.username);
      return { total: 0, categories: {} };
    }
    return data;
  },

  saveBudgets(budgets) {
    const user = this.getCurrentUser();
    if (!user) return false;
    return Storage.set(STORAGE_KEYS.BUDGETS + '_' + user.username, budgets);
  }
};

// ══════════════════════════════════════════════════════════════════
// 记录操作
// ══════════════════════════════════════════════════════════════════

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatTime(date) {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function formatCurrency(amount) {
  return amount.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parseDate(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getDateRange(period) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let start, end = today;

  switch (period) {
    case 'week':
      start = new Date(today);
      start.setDate(today.getDate() - today.getDay());
      break;
    case 'month':
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      break;
    case '3months':
      start = new Date(today.getFullYear(), today.getMonth() - 2, 1);
      break;
    case 'year':
      start = new Date(today.getFullYear(), 0, 1);
      break;
    default:
      start = new Date(today.getFullYear(), today.getMonth(), 1);
  }

  return { start, end };
}

function filterRecords(records, filters = {}) {
  let filtered = [...records];

  if (filters.period) {
    const { start, end } = getDateRange(filters.period);
    filtered = filtered.filter(r => {
      const date = parseDate(r.date);
      return date >= start && date <= end;
    });
  }

  if (filters.category) {
    filtered = filtered.filter(r => r.categoryId === filters.category);
  }

  if (filters.paymentMethod) {
    filtered = filtered.filter(r => r.paymentMethod === filters.paymentMethod);
  }

  if (filters.keyword) {
    const kw = filters.keyword.toLowerCase();
    filtered = filtered.filter(r =>
      (r.note && r.note.toLowerCase().includes(kw)) ||
      (r.categoryName && r.categoryName.toLowerCase().includes(kw))
    );
  }

  if (filters.type) {
    filtered = filtered.filter(r => r.type === filters.type);
  }

  // 按日期倒序
  filtered.sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return filtered;
}

function groupRecordsByDate(records) {
  const groups = {};

  records.forEach(record => {
    const dateKey = formatDate(record.date);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(record);
  });

  return groups;
}

function calculateStats(records) {
  const stats = {
    totalIncome: 0,
    totalExpense: 0,
    netBalance: 0,
    byCategory: {},
    dailyAvg: 0,
    topCategory: null,
    recordCount: records.length
  };

  records.forEach(record => {
    if (record.type === 'income') {
      stats.totalIncome += record.amount;
    } else {
      stats.totalExpense += record.amount;
      if (!stats.byCategory[record.categoryId]) {
        stats.byCategory[record.categoryId] = {
          name: record.categoryName,
          emoji: record.categoryEmoji,
          amount: 0,
          count: 0
        };
      }
      stats.byCategory[record.categoryId].amount += record.amount;
      stats.byCategory[record.categoryId].count++;
    }
  });

  stats.netBalance = stats.totalIncome - stats.totalExpense;

  // 找出支出最高分类
  let maxAmount = 0;
  Object.entries(stats.byCategory).forEach(([id, cat]) => {
    if (cat.amount > maxAmount) {
      maxAmount = cat.amount;
      stats.topCategory = cat;
    }
  });

  // 计算日均支出
  if (records.length > 0) {
    const dates = records.map(r => formatDate(r.date));
    const uniqueDates = [...new Set(dates)];
    if (uniqueDates.length > 0) {
      stats.dailyAvg = stats.totalExpense / uniqueDates.length;
    }
  }

  return stats;
}

function calculateBudgetProgress(budgets, records, period = 'month') {
  const { start, end } = getDateRange(period);
  const periodRecords = records.filter(r => {
    const date = parseDate(r.date);
    return date >= start && date <= end && r.type === 'expense';
  });

  const totalSpent = periodRecords.reduce((sum, r) => sum + r.amount, 0);
  const totalBudget = budgets.total || 0;

  const categoryProgress = {};
  Object.entries(budgets.categories || {}).forEach(([catId, budget]) => {
    if (budget > 0) {
      const spent = periodRecords
        .filter(r => r.categoryId === catId)
        .reduce((sum, r) => sum + r.amount, 0);
      categoryProgress[catId] = {
        budget,
        spent,
        percentage: Math.min((spent / budget) * 100, 100),
        isOverBudget: spent > budget,
        isWarning: spent >= budget * 0.8
      };
    }
  });

  return {
    total: {
      budget: totalBudget,
      spent: totalSpent,
      percentage: totalBudget > 0 ? Math.min((totalSpent / totalBudget) * 100, 100) : 0,
      remaining: Math.max(totalBudget - totalSpent, 0),
      isOverBudget: totalSpent > totalBudget,
      isWarning: totalSpent >= totalBudget * 0.8,
      dailyBudget: totalBudget > 0 ? (totalBudget - totalSpent) / Math.max(1, getDaysRemaining()) : 0
    },
    categories: categoryProgress
  };
}

function getDaysRemaining() {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return Math.max(lastDay.getDate() - now.getDate(), 0);
}

// ══════════════════════════════════════════════════════════════════
// Toast 提示
// ══════════════════════════════════════════════════════════════════

function showToast(message, type = 'default') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = 'toast ' + type;

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ══════════════════════════════════════════════════════════════════
// Modal 弹窗
// ══════════════════════════════════════════════════════════════════

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay.active').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// ══════════════════════════════════════════════════════════════════
// 导航
// ══════════════════════════════════════════════════════════════════

function navigateTo(page) {
  window.location.href = page;
}

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  return filename;
}

function requireAuth() {
  if (!Auth.isLoggedIn()) {
    navigateTo('login.html');
    return false;
  }
  return true;
}

function redirectIfLoggedIn() {
  if (Auth.isLoggedIn()) {
    navigateTo('home.html');
    return true;
  }
  return false;
}

// ══════════════════════════════════════════════════════════════════
// 响应式导航
// ══════════════════════════════════════════════════════════════════

function initNavigation() {
  const currentPage = getCurrentPage();

  // 桌面端导航
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  // 移动端导航
  document.querySelectorAll('.nav-mobile .nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  // 移动端菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      navMobile.classList.toggle('show');
    });
  }
}

// ══════════════════════════════════════════════════════════════════
// 导出
// ══════════════════════════════════════════════════════════════════

function exportToExcel() {
  const records = Auth.getUserRecords();
  if (records.length === 0) {
    showToast('没有可导出的数据', 'warn');
    return;
  }

  const headers = ['日期', '时间', '类型', '分类', '金额', '支付方式', '备注'];
  const rows = records.map(r => [
    formatDate(r.date),
    formatTime(r.date),
    r.type === 'income' ? '收入' : '支出',
    r.categoryName,
    r.amount.toFixed(2),
    r.paymentMethodName || '-',
    r.note || ''
  ]);

  let csv = '﻿'; // BOM for UTF-8
  csv += headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',') + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `velvet_ledger_export_${formatDate(new Date())}.csv`;
  link.click();

  showToast('导出成功', 'success');
}

function backupData() {
  const user = Auth.getCurrentUser();
  if (!user) return;

  const backup = {
    version: '1.0',
    username: user.username,
    exportedAt: new Date().toISOString(),
    records: Storage.get(STORAGE_KEYS.RECORDS + '_' + user.username) || [],
    categories: Storage.get(STORAGE_KEYS.CATEGORIES + '_' + user.username) || {},
    budgets: Storage.get(STORAGE_KEYS.BUDGETS + '_' + user.username) || {},
    settings: user.settings
  };

  const json = JSON.stringify(backup, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `velvet_ledger_backup_${formatDate(new Date())}.json`;
  link.click();

  Storage.set('velvet_last_backup', new Date().toISOString());
  showToast('备份成功', 'success');
}

// ══════════════════════════════════════════════════════════════════
// 数字键盘
// ══════════════════════════════════════════════════════════════════

class AmountKeypad {
  constructor(options = {}) {
    this.value = '';
    this.maxLength = options.maxLength || 10;
    this.onChange = options.onChange || (() => {});
    this.container = options.container;
    this.init();
  }

  init() {
    if (!this.container) return;

    const keys = [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      '.', '0', 'del'
    ];

    this.container.innerHTML = '';
    keys.forEach(key => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'keypad-btn' + (key === 'del' ? ' action' : '');
      btn.textContent = key === 'del' ? '⌫' : key;
      btn.dataset.key = key;
      btn.addEventListener('click', () => this.handleKey(key));
      this.container.appendChild(btn);
    });
  }

  handleKey(key) {
    if (key === 'del') {
      this.value = this.value.slice(0, -1);
    } else if (key === '.') {
      if (!this.value.includes('.') && this.value.length > 0) {
        this.value += '.';
      }
    } else {
      if (this.value.length < this.maxLength) {
        // 限制小数位数为2位
        const parts = this.value.split('.');
        if (parts[1] && parts[1].length >= 2) return;
        if (parts[0].length >= 8) return;
        this.value += key;
      }
    }
    this.onChange(this.value);
  }

  setValue(val) {
    this.value = String(val || '');
    this.onChange(this.value);
  }

  getValue() {
    return parseFloat(this.value) || 0;
  }

  clear() {
    this.value = '';
    this.onChange(this.value);
  }
}

// ══════════════════════════════════════════════════════════════════
// Ring Progress SVG
// ══════════════════════════════════════════════════════════════════

function createRingProgress(percentage, options = {}) {
  const size = options.size || 120;
  const strokeWidth = options.strokeWidth || 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const color = options.color || 'var(--primary)';

  return `
    <div class="ring-progress" style="width:${size}px;height:${size}px;">
      <svg width="${size}" height="${size}">
        <circle
          class="ring-progress-bg"
          cx="${size/2}" cy="${size/2}" r="${radius}"
          stroke-width="${strokeWidth}"
        />
        <circle
          class="ring-progress-fill"
          cx="${size/2}" cy="${size/2}" r="${radius}"
          stroke-width="${strokeWidth}"
          stroke="${color}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"
        />
      </svg>
      ${options.showText !== false ? `<span class="ring-progress-text">${Math.round(percentage)}%</span>` : ''}
    </div>
  `;
}

// ══════════════════════════════════════════════════════════════════
// 页面初始化
// ══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();

  // 点击遮罩关闭弹窗
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ESC 关闭弹窗
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});

// ══════════════════════════════════════════════════════════════════
// 示例数据生成（用于演示）
// ══════════════════════════════════════════════════════════════════

function generateSampleData() {
  const user = Auth.getCurrentUser();
  if (!user) return;

  const records = [];
  const now = new Date();
  const categories = Auth.getUserCategories();

  // 生成最近30天的数据
  for (let i = 0; i < 30; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // 每天1-3笔支出
    const expenseCount = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < expenseCount; j++) {
      const cat = categories.expense[Math.floor(Math.random() * categories.expense.length)];
      records.push({
        id: generateId(),
        type: 'expense',
        amount: Math.floor(Math.random() * 200) + 10,
        categoryId: cat.id,
        categoryName: cat.name,
        categoryEmoji: cat.emoji,
        date: date.toISOString(),
        paymentMethod: PAYMENT_METHODS[Math.floor(Math.random() * PAYMENT_METHODS.length)].id,
        paymentMethodName: PAYMENT_METHODS[Math.floor(Math.random() * PAYMENT_METHODS.length)].name,
        note: ''
      });
    }

    // 偶尔有收入
    if (Math.random() > 0.85) {
      const cat = categories.income[Math.floor(Math.random() * categories.income.length)];
      records.push({
        id: generateId(),
        type: 'income',
        amount: Math.floor(Math.random() * 3000) + 500,
        categoryId: cat.id,
        categoryName: cat.name,
        categoryEmoji: cat.emoji,
        date: date.toISOString(),
        paymentMethod: PAYMENT_METHODS[0].id,
        paymentMethodName: PAYMENT_METHODS[0].name,
        note: ''
      });
    }
  }

  Storage.set(STORAGE_KEYS.RECORDS + '_' + user.username, records);

  // 设置默认预算
  const budgets = {
    total: 8000,
    categories: {
      meal: 2000,
      shopping: 1500,
      transport: 500,
      entertainment: 800
    }
  };
  Storage.set(STORAGE_KEYS.BUDGETS + '_' + user.username, budgets);
}

// 导出给全局使用
window.VelvetApp = {
  Storage, Auth, STORAGE_KEYS,
  DEFAULT_EXPENSE_CATEGORIES, DEFAULT_INCOME_CATEGORIES, PAYMENT_METHODS,
  generateId, formatDate, formatTime, formatCurrency,
  getDateRange, filterRecords, groupRecordsByDate, calculateStats, calculateBudgetProgress, getDaysRemaining,
  showToast, showModal, hideModal, closeAllModals,
  navigateTo, getCurrentPage, requireAuth, redirectIfLoggedIn,
  exportToExcel, backupData, generateSampleData,
  AmountKeypad, createRingProgress
};
