import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import jokesData from 'src/assets/jokes-json.json';  
import { DialogData, Joke } from '../joke';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  jokesByType: Joke[];
  myJoke: Joke;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

      this.myJoke = jokesData.filter(item => item.id == this.data.id)[0];
      this.jokesByType = jokesData.filter(item => this.data.type == item.type && item.id != this.data.id);
      this.jokesByType = [...this.jokesByType].sort(() => 0.5 - Math.random()).slice(0, 5);
      console.log(this.jokesByType)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
