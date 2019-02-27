let matrixRainID;

function switcherMainNeonClick() {
	let switcher = document.getElementsByClassName("neon-theme-switcher");
	if (switcher[0].checked) {
		switcher[1].checked = true;
		matrixRainID = setInterval(function() { matrixRain("rgba(0, 0, 0, 0.05)",
							  						   	   "rgb(194, 153, 255)",
							  						   	   1,
							  						   	   "red",
							  						   	   15);}, 33);
	} else {
		switcher[1].checked = false;
		clearInterval(matrixRainID);
	}

	changeStyleNeon();
}

function switcherMobileNeonClick() {
	let switcher = document.getElementsByClassName("neon-theme-switcher");
	if (switcher[1].checked) {
		switcher[0].checked = true;
		matrixRainID = setInterval(function() { matrixRain("rgba(0, 0, 0, 0.05)",
							  						   	   "rgb(194, 153, 255)",
							  						   	   1,
							  						   	   "red",
							  						   	   15);}, 33);
	} else {
		switcher[0].checked = false;
		clearInterval(matrixRainID);
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
	let secretLight = document.getElementsByClassName('secret-light');
	let secretBG = document.getElementsByClassName('secret-bg');

	let ilassa = document.getElementsByClassName('ilassa');
	let cheshiria = document.getElementsByClassName('cheshiria');

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
	changeMe(secretLight, 'neon-secret-light');
	changeMe(secretBG, 'neon-secret-bg');
	changeMe(ilassa, 'neon-ilassa');
	changeMe(cheshiria, 'neon-cheshiria');
}

function changeMe(element, newStyle, objectsNumber = 1) {
	let switcher = document.getElementsByClassName("neon-theme-switcher");
	let linkImg = document.getElementsByClassName("link-img");
	let menuImg = document.getElementsByClassName("menu-img");
	if (switcher[0].checked || switcher[1].checked) {
		linkImg[0].src = linkImg[0].src.replace(/\/link.png/, "\/neon-link.png");
		linkImg[1].src = linkImg[1].src.replace(/\/link.png/, "\/neon-link.png");
		menuImg[0].src = menuImg[0].src.replace(/\/menu.png/, "\/neon-menu.png");
		for (let i = 0; i < objectsNumber; i++) {
			element[i].className += ' ' + newStyle;
		}
	} else {	
		linkImg[0].src = linkImg[0].src.replace(/\/neon-link.png/, "\/link.png");
		linkImg[1].src = linkImg[1].src.replace(/\/neon-link.png/, "\/link.png");
		menuImg[0].src = menuImg[0].src.replace(/\/neon-menu.png/, "\/menu.png");

		let stylePattern = new RegExp('\\s' + newStyle + '$')
		for (let i = 0; i < objectsNumber; i++) {
			element[i].className = element[i].className.replace(stylePattern, '');
		}		
	}
}