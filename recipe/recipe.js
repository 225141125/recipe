let YOUR_APP_ID = "a01f4eb2";
let YOUR_APP_KEY = "2bef93c423af3cada07b9907bd8b39b7";
let Q;

function myfunction(){
    Q=document.querySelector("#myText").value;
    console.log(Q);
    fetch(`https:api.edamam.com/search?q=${Q}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&dite=low-fat`)
    .then((resp) => resp.json())
    .then((data) =>{
        let result=data
        if(result.hits.length === 0){
            alert(`Sorry this ${Q} is not avaliable. try another recipe`)

        }
        result.hits.forEach((resp) =>{
            let healthLabel=' ';
            let ingredientLine=' ';
            resp.recipe.ingredientLines.forEach((line) => {
                ingredientLine += line
            });
            resp.recipe.healthLabels.forEach((label) =>{
                healthLabel = label
            });

            var col = mydom("div","col-lg-3 col-md-6 col-sm-12 mb-4")
            var card=mydom("div","card h-100")
            var cardBody=mydom("div","card-body");
            var cardFooter=mydom("div","card-footer");

            var img=mydom("img","card-img-top");
            img.setAttribute("src",resp.recipe.image);

            var h3=mydom('h3','card-title');
            h3.innerHTML=`${resp.recipe.label}`;

            var h5=mydom('h5','card-title');
            h5.innerHTML=`Source:<span>${resp.recipe.source}</span>`;


            let ptag1=mydom('p','card-text');
            ptag1.innerHTML=`Calories: <span>${resp.recipe.calories}</span>`;

            let ptag2=mydom('p','card-text');
            ptag2.innerHTML=`Health Labels: <span>${healthLabel}</span>`;


            let ptag3=mydom('p','card-text');
            ptag3.innerHTML=`Meal Type: ${resp.recipe.mealType}</span>`


            let accordionDiv=mydom('div','accordion','accordionExample');
            let accCard1=mydom('div','card');
            let accCardHead1=mydom('div','card-header','headingOne');
            let btn1 =mydom('button','btn btn-link btn-block text-left');
            btn1.setAttribute('type','button');
            btn1.setAttribute('data-toggle','collapse');
            btn1.setAttribute('data-target','#collapseOne');
            btn1.setAttribute('aria-expanded','true');
            btn1.setAttribute('aria-controls','collapseOne');
            btn1.innerHTML="<span>Ingredient Lines</span>";

            let ingColDiv1=mydom('div','collapse','collapseOne');
            ingColDiv1.setAttribute('aria-labelledby','headingOne');
            ingColDiv1.setAttribute('data-parent','#accordionExample');

            let pTag4 = mydom('p', 'card-text');
          pTag4.innerHTML = ` ${ingredientLine}`;
          let ingColDivBody1 = mydom('div', 'card-body');
          ingColDivBody1.append(pTag4);
          ingColDiv1.append(ingColDivBody1);
          accCardHead1.append(btn1);
          accCard1.append(accCardHead1, ingColDiv1);

          let accCard2 = mydom('div', 'card');
          let accCardHead2 = mydom('div', 'card-header', 'headingTwo');
          let btn2 = mydom('button', 'btn btn-link btn-block text-left collapsed');
          btn2.setAttribute('type', 'button');
          btn2.setAttribute('data-toggle', 'collapse');
          btn2.setAttribute('data-target', '#collapseTwo');
          btn2.setAttribute('aria-expanded', 'false');
          btn2.setAttribute('aria-controls', 'collapseTwo');
          btn2.innerHTML = "<span>Total Nutrients</span>";

          let ingColDiv2 = mydom('div', 'collapse', 'collapseTwo');
          ingColDiv2.setAttribute('aria-labelledby', 'headingTwo');
        ingColDiv2.setAttribute('data-parent', '#accordionExample');


        let ptag5 = mydom('p', 'card-text');
        ptag5.innerHTML = `Vitamin A:<span> ${Math.floor(resp.recipe.totalNutrients.VITA_RAE.quantity)} ${resp.recipe.totalNutrients.VITA_RAE.unit}  </span>`;

        let ptag6= mydom('p', 'card-text');
        ptag6.innerHTML = `Vitamin B1: <span>${Math.floor(resp.recipe.totalNutrients.THIA.quantity)} ${resp.recipe.totalNutrients.THIA.unit}</span>`;

        let ptag7 = mydom('p', 'card-text');
        ptag7.innerHTML = `Vitamin B6: <span>${Math.floor(resp.recipe.totalNutrients.VITB6A.quantity)} ${resp.recipe.totalNutrients.VITB6A.unit}</span>`;

        let ptag8 = mydom('p', 'card-text');
        ptag8.innerHTML = `Vitamin B12: <span>${Math.floor(resp.recipe.totalNutrients.VITB12.quantity)} ${resp.recipe.totalNutrients.VITB12.unit}</span>`;

        let ptag9 = mydom('p', 'card-text');
      ptag9.innerHTML = `Vitamin C: <span>${Math.floor(resp.recipe.totalNutrients.VITC.quantity)} ${resp.recipe.totalNutrients.VITC.unit}</span>`;
      
      let ptag10 = mydom('p', 'card-text');
        ptag10.innerHTML = `Calcium:<span> ${Math.floor(resp.recipe.totalNutrients.CA.quantity)} ${resp.recipe.totalNutrients.CA.unit} </span>`;

        let ptag11= mydom('p', 'card-text');
        ptag11.innerHTML = `Cholesterol: <span>${Math.floor(resp.recipe.totalNutrients.CHOLE.quantity)} ${resp.recipe.totalNutrients.CHOLE.unit}</span>`;

        let ptag12 = mydom('p', 'card-text');
        ptag12.innerHTML = `Energy: <span>${Math.floor(resp.recipe.totalNutrients.ENERC_KCAL.quantity)} ${resp.recipe.totalNutrients.ENERC_KCAL.unit}</span>`;

        let ptag13 = mydom('p', 'card-text');
        ptag13.innerHTML = `Fat: <span>${Math.floor(resp.recipe.totalNutrients.FAT.quantity)} ${resp.recipe.totalNutrients.FAT.unit}</span>`;

        let ptag14 = mydom('p', 'card-text');
        ptag14.innerHTML = `Iron: <span>${Math.floor(resp.recipe.totalNutrients.FE.quantity)} ${resp.recipe.totalNutrients.FE.unit}</span>`;


        let ingColDivBody2=mydom('div','card-body');
        ingColDivBody2.append(ptag10,ptag11,ptag12,ptag13,ptag14,ptag5,ptag6,ptag7,ptag8,ptag9);
        ingColDiv2.append(ingColDivBody2);
        accCardHead2.append(btn2);
        accCard2.append(accCardHead2,ingColDiv2);
        accordionDiv.append(accCard1,accCard2);


        let a=mydom('a');
        a.setAttribute('href',`${resp.recipe.url}`);
        a.setAttribute('target','_blank');
        a.innerHTML=`<span>Click Here For More</span>`


        cardBody.append(h3,ptag1,ptag2,ptag3,accordionDiv);
        cardFooter.append(a);



        card.append(img,cardBody,cardFooter);
        col.append(card);
        resultRow.append(col);

        });
    })
    .catch((err) => console.log(err));
}

let resultRow=mydom('div','row resRow');
let container=mydom('div','container main-container');

let head = mydom('div', 'row');
let h1 = mydom('h1');
h1.innerHTML = "SEARCH FOR YOUR FAV RECIPE";
head.append(h1);
let searchRow = mydom('div', 'row  form-inline');
let searchCol = mydom('div', 'col-lg-9 col-md-9 col-sm-12');
let input = mydom('input', ' mr-sm-2 inpt-search','myText');
input.setAttribute('type', 'text');
input.setAttribute('placeholder','Click Here...')
let btnCOl = mydom('div', 'col-lg-3 col-md-3 col-sm-12');
let btn = mydom('button', 'btn btn-outline-primary btn-search');
btn.setAttribute('type', 'submit');
btn.setAttribute('onclick', 'myfunction()');
btn.innerHTML = 'search';
searchCol.append(input);
btnCOl.append(btn);
searchRow.append(searchCol,btnCOl);


container.append(head,searchRow,resultRow);
document.body.append(container);





function mydom(elem,elemClass="",elemId=""){
    let element=document.createElement(elem);
    element.setAttribute('class',elemClass);
    element.setAttribute('id',elemId);
    return element;
}
