window.addEventListener("load", function(){
    document.getElementById("forma").addEventListener("submit", function(event){
        var validno = true;
        if( document.getElementById("naziv").value.length < 3 ){
            validno=false;
            event.preventDefault();
            document.getElementById("naziv").classList.add("error");
            document.getElementById("naziv").classList.remove("success");
        }
        else {
            document.getElementById("naziv").classList.add("success");
            document.getElementById("naziv").classList.remove("error");

        }

        var spanovi = document.querySelectorAll("#pisci > span.badge");
        var niz = [];
        for(let i=0; i<spanovi.length; i++){
            niz.push(spanovi[i].dataset.id);
        }
        const json = JSON.stringify(niz);
        console.log(json);
        return validno;
    });

    document.getElementById("naziv").addEventListener("keypress", function(){
        this.classList.remove('success');
        this.classList.remove('error');
    });

    document.getElementById("dodaj-pisca").addEventListener("click", function(){
        var id = document.getElementById("spisak-pisaca").value;
        if(!id){
            alert("Izaberi pisca");
            return;
        }
        dodajPisca( id );
    });

});

function dodajPisca(id){
    document.querySelector(`#spisak-pisaca > option[value='${id}']`).disabled = true;
    document.getElementById("spisak-pisaca").selectedIndex = 0;
    var naziv = document.querySelector(`#spisak-pisaca > option[value='${id}']`).innerHTML;
    var span = document.createElement("span");
    span.classList.add("badge");
    span.classList.add("bg-secondary");
    span.dataset.id = id;
    span.innerHTML = naziv;
    var button = document.createElement("button");
    button.type="button";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.classList.add("btn-sm");
    button.innerHTML = "X";
    span.appendChild(button);
    document.getElementById("pisci").appendChild(span);
    document.getElementById("pisci").appendChild(document.createTextNode(" "));
    button.addEventListener("click", function(){
        var id = this.parentNode.dataset.id;
        this.parentNode.parentNode.removeChild( this.parentNode );
        document.querySelector(`#spisak-pisaca > option[value='${id}']`).disabled = false;

    });


}


