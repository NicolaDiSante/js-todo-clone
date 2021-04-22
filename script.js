// Creo un array contenente le cose da non fare
// Creo un ciclo che percorre tutto l'array
// Con la proprietà .clone() copio il codice HTML che andrò poi ad assegnare alla variabile item che conterrà ogni singola stringa dell'array tramite la proprietà .append()
// Cerco la posizione in cui voglio copiare il mio clone e lo aggiungo tramite .append()

// Quando clicco sui cestini voglio che venga rimossa tutta la riga, per farlo devo usare le proprietà this (che nel nostro caso fa riferimento al cestino), aggiungere la proprietà .parent() che va ad interessare il genitore e con .remove() va ad eliminarlo

// Punto all'input e tramite la proprietà .keyup(function(event)) credo una condizione in cui, se event.which === 13 deve stamparmi quello che ho inserito nell'input
// creo una variabile stringToDo =





$(document).ready(function(){

  var arrNot = [
    "Mangiare il concime",
    "Bere il caffè",
    "Desiderare la donna d'altri",
  ];

  for(var i = 0; i < arrNot.length; i++){

    var elementArr = arrNot[i];
    
    var item = $('.template li').clone();
    $(item).find('.text').append(elementArr);
    $('.app ul').append(item);
    
  }

  $(document).on('click', '.fa-shopping-basket', function(){
   
    $(this).parent().remove();

  })

  $('.app input').keyup(function(event){



    if(event.which === 13){

      var elementArr = $(this).val().trim(); //Il valore di this(che saremme l'input) lo salvo dentro all'elementArr 

      if(elementArr.length > 3){
        
        var item =  $('.template li').clone();

        $(item).find('.text').append(elementArr);
        $('.app ul').append(item);
        $(this).val(''); //una volta aggiunto l'item all'ul devo cancellare quello che c'è nell'input quindi seleziono this e gli aggiungo val con stringa vuota
      }

    }

  })







})


