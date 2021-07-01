function addIntern(Intern) {
    return ` <div class="card" style="width: 18rem;">
        <div class="card-header bg-warning">
            <h4>#{Intern.name}</h4>
            <h5><i class="bi bi-eyeglasses"></i> Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${Intern.id}</li>
            <li class="list-group-item">${Intern.school} </li>
            <a href="${Intern.email}" class="btn btn-secondary">${Intern.email}</a>
        </ul>
    </div>
    
    `
}
