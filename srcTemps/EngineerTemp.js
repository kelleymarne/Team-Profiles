function addEngineer(Engineer) {
    return ` <div class="card" style="width: 18rem;">
        <div class="card-header bg-success">
            <h4>#{Engineer.name}</h4>
            <h5><i class="bi bi-gear"></i> Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${Engineer.id}</li>
            <li class="list-group-item">${Engineer.roleDetails} </li>
            <a href="${Engineer.email}" class="btn btn-secondary">${Engineer.email}</a>
        </ul>
    </div>
    `
}

module.exports = addEngineer; 