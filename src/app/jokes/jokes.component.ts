import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from "@angular/material/table";
import jokesData from 'src/assets/jokes-json.json';  
import { Joke } from '../joke';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {
  jokes: Joke[] = jokesData;
  public displayedColumns = ['ID', 'Joke'];
  public dataSource = new MatTableDataSource<Joke>(jokesData.sort((a,b)=> a.id-b.id));

  constructor(public dialog: MatDialog) { }

  openDialog(row: any): void {
    console.log(row)
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '650px',
      height: '650px',
      data: {id: row.id, type: row.type}
    });
  }
}
