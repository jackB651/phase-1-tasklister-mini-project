document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
});
  const form = document.querySelector('form')
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
  const valued = document.getElementById('new-task-description').value
  const tasks = document.getElementById('tasks')
  const li = document.createElement('li')
  li.textContent = valued
  tasks.append(li)
})

