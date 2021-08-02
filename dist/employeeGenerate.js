function employeeCard(data) {
   
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><a href=${data.name}>GitHub</a></h5>
    <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
    <ul class="card-text">${data.id}</ul>
    <ul class="card-text"><a href=${data.email}>E-mail</a></ul>
    
  </div>
</div>`
}

module.exports = employeeCard;