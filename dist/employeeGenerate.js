const employeeCard = () => {
    for(i = 0; i < employeeArray.length; i++) {
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.name[i]}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.role[i]}</h6>
    <ul class="card-text">${data.id[i]}</ul>
    <ul class="card-text">${data.email[i]}</ul>
    
  </div>
</div>`}
arrEmp.push(employeeCard)
}

const arrEmp = {}
module.exports = arrEmp
module.exports = (employeeCard());