fetch('portfolio.json').then(function (res) {
    return res.json()
}).then(function (data) {
    data.project.forEach(function (project){
        console.log(project)
        const projectType = document.querySelector('.project')
        projectType.innerHTML += `
        <div class="specificProject">
        <h2>${project.name}</h2>
        <img src="${project.img}" alt="A ${project.name} class="projectImage" />
        <p>Description</p>
        <p>${project.desc}
        <p><a href="${project.url}">See it on github</a></p>
        </div>`
    })
    })