const vardi=['Santa Bērziņa','Pēteris Vanags','Zane Kalna','Anna Sars','Vilnis Sakta',];
const balvas=['Ledusskapis','Virtuves kombains','Blenderis','Mašīna','Augļu grozs'];
const naudaKopa=1000000;//kopējā summa izlozei
let uzvaretajuSkaits=5;
let rand= Math.random()*10;
rand= Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus