const formEl = document.getElementById('form1')

formEl.addEventListener('submit', getFormvalue)



function getFormvalue(e) {
  e.preventDefault()
  const firstName = formEl.elements.fname.value
  const lastName = formEl.elements.lname.value

  alert(`${firstName} ${lastName}`)
}