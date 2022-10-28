import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-inscription',
  templateUrl: './delete-inscription.component.html',
  styleUrls: ['./delete-inscription.component.css']
})
export class DeleteInscriptionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteInscriptionComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close("No");
  }
  onYesClick(): void {
    this.dialogRef.close("Yes");
  }
}
