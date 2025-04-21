let viditelneCislo = 1;
const kostka = document.querySelector('.dice');
const hod = () => {
  viditelneCislo = viditelneCislo + 1;
  if (viditelneCislo === 7) {
    viditelneCislo = 1;
  }
  kostka.src = `img/side${viditelneCislo}.svg`;
};
document.body.addEventListener('keydown', hod);
