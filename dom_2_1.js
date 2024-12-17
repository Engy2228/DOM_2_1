const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]
const createTask = (taskId, taskText) => {
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = taskId // Устанавливает атрибут data-task-id равным taskId (это будет использоваться для идентификации задачи).
  const taskItemContainer = document.createElement('div')
  taskItemContainer.className = 'task-item__main-container'
  const taskItemContent = document.createElement('div')
  taskItemContent.className = 'task-item__main-content'
  taskItem.append(taskItemContainer)
  taskItemContainer.append(taskItemContent)

  const checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'

  const inputCheckbox = document.createElement('input')
  inputCheckbox.className = 'checkbox-form__checkbox'
  inputCheckbox.type = 'checkbox'

  const inputId = `task-${taskId}`
  inputCheckbox.id = inputId

  const labelCheckbox = document.createElement('label')
  labelCheckbox.htmlFor = inputId

  checkboxForm.append(inputCheckbox, labelCheckbox)

  const taskItemText = document.createElement('span')
  taskItemText.className = 'task-item__text'
  taskItemText.innerText = taskText

  const deleteButton = document.createElement('button')
  deleteButton.className =
    'task-item__delete-button default-button delete-button'
  deleteButton.innerText = 'Удалить'

  taskItemContent.append(checkboxForm, taskItemText)
  taskItemContainer.append(deleteButton)

  return taskItem
}

const tasksListContainer = document.querySelector('.tasks-list')

const taskForm = document.querySelector('.create-task-block')
taskForm.addEventListener('submit', (event) => {
  console.log(event)
  event.preventDefault()
  const { target } = event
  console.log(target)
  // const taskNameInput = target.taskName
  // const inputValue = taskNameInput.value
  // console.log('inputValue', inputValue)
  // console.log('taskNameInput', taskNameInput)

  // if (inputValue) {
  //   alert(`Your inputValue ${inputValue}`)
  // } else {
  //   alert('Not info')
  // }
  const text = event.target.taskName.value
  const task = {
    id: Date.now().toString(),
    completed: false,
    text,
  }
  tasks.push(task)
  tasksListContainer.append(createTask(task.id, task.text))
  event.target.taskName.value = ''
  console.log(tasks)
})

tasks.forEach((task) => {
  const taskItem = createTask(task.id, task.text)
  tasksListContainer.append(taskItem)
})

/*
const tasksList = document.querySelector('.tasks-list');

const createTask = (task) => {
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = task.id

  const taskItemMainContainer = document.createElement('div')
  taskItemMainContainer.className = 'task-item__main-container'

  const taskItemMainContent = document.createElement('div')
  taskItemMainContent.className = 'task-item__main-content'

  taskItem.append(taskItemMainContainer)
  taskItemMainContainer.append(taskItemMainContent)


  const checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'

  const inputCheckbox = document.createElement('input')
  inputCheckbox.type = 'checkbox'
  inputCheckbox.className = 'checkbox-form__checkbox'
  inputCheckbox.id = `task - ${task.id}`  
  inputCheckbox.checked = task.completed

  const labelCheckbox = document.createElement('label')
  labelCheckbox.htmlFor = inputCheckbox.id

  const taskItemtext = document.createElement('span')
  taskItemtext.className = 'task-item__text'
  taskItemtext.textContent = task.text

  const deleteButton = document.createElement('button')
  deleteButton.className = 'task-item__delete-button',  'default-button', 'delete-button'
  deleteButton.textContent = 'Удалить'
  deleteButton.addEventListener('click', () => {
    taskItem.remove()
})

  taskItemMainContent.append(checkboxForm, taskItemtext)
  checkboxForm.append(inputCheckbox, labelCheckbox)
  taskItemMainContainer.append(deleteButton)

  return taskItem
}
//
const taskForm = document.querySelector('.create-task-block');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault() // Предотвращает стандартное поведение формы отправки (перезагрузку страницы).
  const text = event.target.taskName.value // Получает текст задачи из полей ввода 
  const task = {
    id: Date.now().toString(),
    completed: false,
    text
  } // Создает новую задачу объекта
  tasksList.append(createTask(task)) // Добавляет созданную задачу в список на странице, метод append добавляет этот элемент в DOM-дерево в конечный контейнер tasksList
  tasks.push(task) // Добавляет новую задачу в массив 
  event.target.taskName.value = '' // Очищает поле ввода.
  console.log(tasks)
})
*/
