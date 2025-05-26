const targets = document.querySelectorAll("[data-target]")
const contents = document.querySelectorAll("[data-content]")

targets.forEach(target=> {
    target.addEventListener('click', ()=>{
        contents.forEach(content=>{
            content.classList.remove('active')
        })
        const targetContent = document.querySelector(target.dataset.target)
        targetContent.classList.add('active')
    })
})