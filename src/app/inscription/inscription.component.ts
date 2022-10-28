import { DeleteInscriptionComponent } from './delete-inscription/delete-inscription.component';
import { InscriptionServiceService } from './inscription-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inscription } from './Inscription';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {

  displayedColumns: string[] = ['Id',  'Course','Name' ,'Price', 'edit', 'delete'];
  dataSource: Inscription[] = [];
  inscriptionsSubscription!: Subscription;


  constructor(private router: Router, private inscriptionService: InscriptionServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.inscriptionsSubscription = this.inscriptionService.getInscription().subscribe(
      (inscriptions) => this.dataSource = inscriptions
    );
  }

  ngOnDestroy(): void {
    this.inscriptionsSubscription.unsubscribe();
  }

  navigateToAddEditInscription(): void {
    this.router.navigate(['/addEditInscription']);
  }

  deleteInscription(element: Inscription): void {
    const dialogRef = this.dialog.open(DeleteInscriptionComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.dataSource = this.dataSource.filter(r => r.Id !== element.Id);
      }
    });
  }

  editInscription(inscription: Inscription): void {
    console.log(inscription)
    this.router.navigate(['/addEditInscription', inscription]);
  }
}
