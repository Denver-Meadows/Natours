const nav = document.querySelector('.navigation__nav');
const checkbox = document.querySelector('.navigation__checkbox')

nav.addEventListener('click', function(e){
  e.preventDefault()
  const target = e.target.closest('.navigation__link')
  if (!target) return;
  const id = target.id

  checkbox.checked = false;
  document.querySelector(`#${id}-sec`).scrollIntoView({ behavior: 'smooth', block: 'center'});
});
