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

// Contact Form Handler
const form = document.getElementById('form');
const submitBtn = form.getElementsByClassName('contact-submit')[0];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
formData.append("access_key", "9286ce22-db8e-4b13-87e8-8fc9866cc0a5");
    
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
