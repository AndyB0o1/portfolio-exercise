fetch('portfolio.json').then(function (res) {
    return res.json()
}).then(function (data) {
    data.project.forEach(function (project){
        console.log(project)
        const projectType = document.querySelector('.project')
        projectType.innerHTML += `
        <div class="specificProject">
        <h2>${project.name}</h2>
        <div class="projectImage"><img src="${project.img}" alt="A ${project.name} /></div>
        <div class="projectText">
        <p>Description</p>
        <p>${project.desc}
        <p><a class="github" href="${project.url}">See it on github</a></p>
        </div>
        </div>`
    })
    })