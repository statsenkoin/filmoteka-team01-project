const studentsRef = document.querySelector('.footer__link');
const boxRef = document.querySelector('.box');
const teamsDesk = document.querySelector('.teams_desk');
const fonTeams = document.querySelector('.fon');

const p1Ref = document.querySelector('#p1');
const p2Ref = document.querySelector('#p2');
const p3Ref = document.querySelector('#p3');
const p4Ref = document.querySelector('#p4');
const p5Ref = document.querySelector('#p5');
const p6Ref = document.querySelector('#p6');
const p7Ref = document.querySelector('#p7');
const p8Ref = document.querySelector('#p8');
const p9Ref = document.querySelector('#p9');

studentsRef.addEventListener('click', slider);
boxRef.addEventListener('click', showPerson);
fonTeams.addEventListener('click', close);

function slider(e) {
  e.preventDefault();
  boxRef.classList.toggle('box_active');
  fonTeams.classList.add('fon_active');
}

function showPerson(e) {
  e.preventDefault();
  removePerson();
  addPerson(e);
}

function addPerson(e) {
  if (e.target.getAttribute('id') === 't1')
    p1Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't2')
    p2Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't3')
    p3Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't4')
    p4Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't5')
    p5Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't6')
    p6Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't7')
    p7Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't8')
    p8Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't9')
    p9Ref.classList.add('teams_desk_active');
}

function removePerson() {
  p1Ref.classList.remove('teams_desk_active');
  p2Ref.classList.remove('teams_desk_active');
  p3Ref.classList.remove('teams_desk_active');
  p4Ref.classList.remove('teams_desk_active');
  p5Ref.classList.remove('teams_desk_active');
  p6Ref.classList.remove('teams_desk_active');
  p7Ref.classList.remove('teams_desk_active');
  p8Ref.classList.remove('teams_desk_active');
  p9Ref.classList.remove('teams_desk_active');
}

function close(e) {
  fonTeams.classList.toggle('fon_active');
  boxRef.classList.toggle('box_active');
  removePerson();
}
