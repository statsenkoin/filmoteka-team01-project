const studentsRef = document.querySelector('.footer__link');
const line1Ref = document.querySelector('.line1');
const line11Ref = document.querySelector('.line11');
const line12Ref = document.querySelector('.line12');
const line13Ref = document.querySelector('.line13');
const line2Ref = document.querySelector('.line2');
const line21Ref = document.querySelector('.line21');
const line3Ref = document.querySelector('.line3');
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
const p10Ref = document.querySelector('#p10');
const p11Ref = document.querySelector('#p11');

studentsRef.addEventListener('click', slider);

line1Ref.addEventListener('click', showPerson)
line11Ref.addEventListener('click', showPerson);
line12Ref.addEventListener('click', showPerson);
line13Ref.addEventListener('click', showPerson);
line2Ref.addEventListener('click', showPerson);
line21Ref.addEventListener('click', showPerson);
line3Ref.addEventListener('click', showPerson);
fonTeams.addEventListener('click', close);

function slider(e) {
    e.preventDefault();
    if (document.defaultView.innerWidth < 768) {
        line1Ref.classList.add('line_active');
        line11Ref.classList.add('line_active');
        line12Ref.classList.add('line_active');
        line13Ref.classList.add('line_active');
        line2Ref.classList.add('line_active');
        line21Ref.classList.add('line_active');
        line3Ref.classList.add('line_active');
    }

    if (document.defaultView.innerWidth < 1280) {
        line2Ref.classList.add('line_active');
        line21Ref.classList.add('line_active');
    }

    if (document.defaultView.innerWidth > 1280) {
        line3Ref.classList.add('line_active')
    }

    fonTeams.classList.add('fon_active');
}

function showPerson(e) {
    e.preventDefault();
    removePerson();
    line1Ref.classList.remove('line_active');
    line11Ref.classList.remove('line_active');
    line12Ref.classList.remove('line_active');
    line13Ref.classList.remove('line_active');
    line2Ref.classList.remove('line_active');
    line21Ref.classList.remove('line_active');
    line3Ref.classList.remove('line_active');
    addPerson(e);
}

function close(e) {
    removePerson();
    fonTeams.classList.remove('fon_active');
    line1Ref.classList.remove('line_active');
    line11Ref.classList.remove('line_active');
    line12Ref.classList.remove('line_active');
    line13Ref.classList.remove('line_active');
    line2Ref.classList.remove('line_active');
    line21Ref.classList.remove('line_active');
    line3Ref.classList.remove('line_active');

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
  if (e.target.getAttribute('id') === 't10')
    p10Ref.classList.add('teams_desk_active');
  if (e.target.getAttribute('id') === 't11')
    p11Ref.classList.add('teams_desk_active');
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
  p10Ref.classList.remove('teams_desk_active');
  p11Ref.classList.remove('teams_desk_active');
}

console.dir(document.defaultView.innerWidth);