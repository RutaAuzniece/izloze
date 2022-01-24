const vardi=['Santa Bedre','Edvards Vanags','Zane Kalna','Anna Sars','Vilnis Sakta',];
const balvas=['Ledusskapis','Virtuves kombains','Blenderis','Mašīna','Augļu grozs'];
const naudaKopa=1000000;//kopējā summa izlozei
let uzvaretajuSkaits=5;
let rindas= document.querySelector('.rindas');
rindas.innerHTML=' ';
for  (let i=0;i<uzvaretajuSkaits;i++){
let rand= Math.random()*vardi.length;
rand= Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus
}
rindas.innerHTML=
<tr>
    <td>i</td>
    <td>uzvarētājs</td>
</tr>