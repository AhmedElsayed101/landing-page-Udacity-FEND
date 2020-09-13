const sections = document.querySelectorAll('section')

const nav = document.querySelector('#navbar__list')

const createButton = (section) => {

    const li = document.createElement('li')
    const anchor = document.createElement('a')
    // Create the text node for anchor element. 
    const sectionName = document.createTextNode(section.id); 
    anchor.appendChild(sectionName)
    anchor.className = "menu__link"
    li.appendChild(anchor)
    li.addEventListener('click', () => {

        for (let i = 0; i < sections.length; i++){
            sections[i].className = sections[i].className.replace("your-active-class", "")
        }

        section.className = "your-active-class"
        section.scrollIntoView({ behavior: 'smooth', block: 'end'});

    })
    return li
}


for(let i = 0; i < sections.length; i++){
    console.log('saf')
    const btn = createButton(sections[i])
    nav.appendChild(btn)
}

