function internCard(data) {
   
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><a href=${data.name}>GitHub</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <ul class="card-text">${data.id}</ul>
    <ul class="card-text"><a href=${data.email}>E-mail</a></ul>
    <ul class="card-text">${data.school}</ul>
    
  </div>
</div>`
}

module.exports = internCard;