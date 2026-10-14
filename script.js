const CONTATO='';
const R={'#empresa':'p-empresa','#creator':'p-creator'};
function go(){const id=R[location.hash];document.getElementById('home').hidden=!!id;document.querySelectorAll('.sub').forEach(s=>s.hidden=s.id!==id);window.scrollTo(0,0)}
addEventListener('hashchange',go);go();
