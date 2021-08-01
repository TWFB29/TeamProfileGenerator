function managerCard(data) {
   
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
    <ul class="card-text">${data.id}</ul>
    <ul class="card-text">${data.email}</ul>
    <ul class="card-text">${data.officeNumber}</ul>
    
  </div>
</div>`
}

module.exports = managerCard;