import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges{
   cardActive = [
    {title: 'Ass Wasserfall:', description: 'des Jeder trinkt. Erst wenn die erste Person wieder mit dem Trinken aufhört, darf auch die zweite Person das Glas wieder absetzen. SO gehts immer weiter, bis die letzte Person im Uhrzeigersinn das Glas abgesetzt hat.'},
    {title: '2:', description: 'Bestimme jemanden, der 2 trinkt.'},
    {title: '3:', description: 'Nimm zwei Schlucke.'},
    {title: '4:', description: 'Alle Frauen trinken.'},
    {title: '5:', description: 'Fünf Schlucke selbst trinken.'},
    {title: '6:', description: 'Alle Männer trinken.'},
    {title: '7 Seven:', description: 'is heaven: Wer zuletzt seine Hände oben hat, muss trinken.'},
    {title: '8 Eight is mate:', description: 'Wähle deinen Trinkbuddy.'},
    {title: '9 Nine is rhyme:', description: 'Nenne ein Wort, die anderen müssen darauf reimen.'},
    {title: '10:', description: 'Wähle eine Kategorie, zu der jeder was sagen muss.'},
    {title: 'Bube:', description: 'Ich hab noch nie spielen.'},
    {title: 'Dame Questionmaster:', description: 'Stell deinen Mitspielern Fragen, wer antwortet muss trinken.'},
    {title: 'König:', description: 'Fülle etwas in das Glas, was in der Mitte steht. Der letzte, der den König zieht, muss das Glas leer trinken.'},
   
   ];

   title = '';
   description = '';
   @Input() card: string = '';

  ngOnInit(): void {
  
  }

  ngOnChanges(): void {
    if (this.card) {
      console.log('Current card is', this.card);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardActive[cardNumber - 1].title;
      this.description = this.cardActive[cardNumber - 1].description;
    }
   
  }
}
