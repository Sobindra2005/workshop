const menuMapper = {
    "about": "menu-item-about",
    "resume": "menu-item-resume",
    "works": "menu-item-works",
    "blogs": "menu-item-blogs",
    "contact": "menu-item-contact"
};

const sectionMapper = {
    "about": "about-section",
    "resume": "resume-section",
    "works": "work-section",
    "blogs": "blog-section",
    "contact": "Contact-section"
}

function setActiveSection(button) {
    const menuId = menuMapper[button];
    const menuItem = document.getElementById(menuId);

    menuItem.classList.add("active")
    setActiveSectionContent(button);

    for (const key in menuMapper) {
        if (key !== button) {
            const menuId = menuMapper[key];
            const menuItem = document.getElementById(menuId);
            menuItem.classList.remove("active");
        } else {
            console.log(key);
        }
    }

    return menuItem;
}


function setActiveSectionContent(button) {
    const sectionClassName = sectionMapper[button];
    const menuItem = document.getElementsByClassName(sectionClassName);

    menuItem[0].classList.remove("active-middle");
    menuItem[0].classList.remove("inactive-middle")

    menuItem[0].classList.add("active-middle")

    for (const key in sectionMapper) {
        if (key !== button) {
            const sectionClassName = sectionMapper[key];
            const menuItem = document.getElementsByClassName(sectionClassName);
            menuItem[0].classList.remove("active-middle");
            menuItem[0].classList.remove("inactive-middle")
            menuItem[0].classList.add("inactive-middle")
        } else {
            console.log(key);
        }
    }

    return menuItem;
}