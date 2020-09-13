const sections = document.querySelectorAll('section')

const nav = document.querySelector('#navbar__list')

const createButton = (section) => {

    const btn = document.createElement('button')
    btn.textContent = section.id
    btn.addEventListener('click', () => {

        section.scrollIntoView({ behavior: 'smooth', block: 'end'});

    })
    return btn
}


for(let i = 0; i < sections.length; i++){
    console.log('saf')
    const btn = createButton(sections[i])
    nav.appendChild(btn)
}

