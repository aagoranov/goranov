//* Обробка подій при кліку на елементи меню
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		//* Видалення класу 'active' з усіх елементів меню
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		//* Додавання класу 'active' до обраного елемента меню
		li.classList.add('active');
	})
});

//* TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	//* Переключення класу 'hide' для бічної панелі
	sidebar.classList.toggle('hide');
	//* Збереження стану бічної панелі у печеньках
	setSidebarStateCookie(sidebar.classList.contains('hide'));
})

//* Функція для збереження стану бічної панелі у печеньках
function setSidebarStateCookie(isHidden) {
	const value = isHidden ? 'hidden' : 'visible';
	document.cookie = `sidebarState=${value}; path=/;`;
}

//* Функція для отримання стану бічної панелі з печеньок
function getSidebarStateCookie() {
	const cookies = document.cookie.split('; ');
	for (const cookie of cookies) {
			const [name, value] = cookie.split('=');
			if (name === 'sidebarState') {
					return value === 'hidden';
			}
	}
	return false; //* За замовчуванням бічна панель не прихована
}

//* Відновлення стану бічної панелі з печеньок
const savedSidebarState = getSidebarStateCookie();
if (savedSidebarState) {
	sidebar.classList.add('hide');
}

//* Робота з формою пошуку
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		//* Переключення класу 'show' для форми пошуку
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			//* Заміна іконки на кнопці пошуку
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

//* Приховання бічної панелі при великому розмірі вікна
if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}

//* Обробка зміни розміру вікна
window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

//* Перемикач теми (light/dark)
const switchMode = document.getElementById('switch-mode');


switchMode.addEventListener('change', function () {
  if (this.checked) {
		//* Додавання класу 'dark' до тіла документу
    document.body.classList.add('dark');
		//* Збереження теми у печеньках
    setThemeCookie('dark');
  } else {
		//* Видалення класу 'dark' з тіла документу
    document.body.classList.remove('dark');
		//* Збереження теми у печеньках
    setThemeCookie('light');
  }
});

//* Функція для збереження теми у печеньках
function setThemeCookie(theme) {
  document.cookie = `theme=${theme}; path=/;`;
}

//* Функція для отримання теми з печеньок
function getThemeCookie() {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'theme') {
      return value;
    }
  }
  return null;
}

//* Відновлення обраної теми з печеньок
const savedTheme = getThemeCookie();
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  switchMode.checked = true;
}