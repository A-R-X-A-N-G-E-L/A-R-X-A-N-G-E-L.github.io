function switcherMainNeonClick() {
	let switcher = document.getElementsByClassName("neon-theme-switcher");
	if (switcher[0].checked) {
		switcher[1].checked = true;
	} else {
		switcher[1].checked = false;
	}

	changeStyleNeon();
}

function switcherMobileNeonClick() {
	let switcher = document.getElementsByClassName("neon-theme-switcher");
	if (switcher[1].checked) {
		switcher[0].checked = true;
	} else {
		switcher[0].checked = false;
	}

	changeStyleNeon();
}

function changeStyleNeon() {
	let header = document.getElementsByTagName('header');
	let headerLink = document.getElementsByClassName('nav-item-main');
	let headerStatic = document.getElementsByClassName('theme-text');
	let headerMobileThemeStatic = document.getElementsByClassName('nav-theme-text');
	let headerMobileStatic = document.getElementsByClassName('nav-title');
	let headerMobileLink = document.getElementsByClassName('nav-item-main-no-anim');

	let slider = document.getElementsByClassName('slider');
	let naviBox = document.getElementsByClassName('nav-icon');
	let dropdownMenu = document.getElementsByClassName('dropdown-menu');

	let banner = document.getElementsByClassName('banner');
	let bannerLink = document.getElementsByClassName('subtitle');
	let bannerStatic = document.getElementsByClassName('banner-static');

	let subbaner = document.getElementsByClassName('subbanner');
	let subbanerLinkBox = document.getElementsByClassName('link-box');
	let subbanerItemLink = document.getElementsByClassName('item-link');

	let text = document.getElementsByClassName('text');
	let textAbout = document.getElementsByClassName('text-linker');
	let infoText = document.getElementsByClassName('info-text');
	let textLink = document.getElementsByClassName('nav-item');

	changeMe(header, 'neon-header');
	changeMe(headerLink, 'neon-header-link');
	changeMe(headerStatic, 'neon-header-static');
	changeMe(headerMobileThemeStatic, 'neon-header-static');
	changeMe(headerMobileStatic, 'neon-header-static');
	changeMe(headerMobileLink, 'neon-header-link');
	changeMe(slider, 'neon-slider', 2);
	changeMe(naviBox, 'neon-navi-box');
	changeMe(dropdownMenu, 'neon-dropdown-menu');
	changeMe(banner, 'neon-banner');
	changeMe(bannerLink, 'neon-banner-link');
	changeMe(bannerStatic, 'neon-banner-static');
	changeMe(subbaner, 'neon-subbanner');
	changeMe(subbanerLinkBox, 'neon-link-box');
	changeMe(subbanerItemLink, 'neon-item-link');
	changeMe(text, 'neon-text');
	changeMe(textAbout, 'neon-text-linker');
	changeMe(infoText, 'neon-info-text', 2);
	changeMe(textLink, 'neon-text-link', textLink.length);
}

function changeMe(element, newStyle, objectsNumber = 1) {
	let switcher = document.getElementsByClassName("neon-theme-switcher");
	if (switcher[0].checked || switcher[1].checked) {
		for (let i = 0; i < objectsNumber; i++) {
			element[i].className += ' ' + newStyle;
		}
	} else {	
		let stylePattern = new RegExp('\\s' + newStyle + '$')
		for (let i = 0; i < objectsNumber; i++) {
			element[i].className = element[i].className.replace(stylePattern, '');
		}		
	}
}