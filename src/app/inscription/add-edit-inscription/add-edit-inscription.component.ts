import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionServiceService } from '../inscription-service.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-inscription.component.html',
  styleUrls: ['./add-edit-inscription.component.css']
})
export class AddEditInscriptionComponent implements OnInit {
  InscriptionForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    course: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl('', Validators.required),
  })


  constructor(private builder: FormBuilder, private InscriptionService: InscriptionServiceService, private router: Router, private route: ActivatedRoute) {
    this.InscriptionForm.controls['id'].setValue(this.route.snapshot.paramMap.get('Id'));
    this.InscriptionForm.controls['name'].setValue(this.route.snapshot.paramMap.get('Name'));
    this.InscriptionForm.controls['surname'].setValue(this.route.snapshot.paramMap.get('Surname'));
    this.InscriptionForm.controls['course'].setValue(this.route.snapshot.paramMap.get('Course'),);
    this.InscriptionForm.controls['price'].setValue(this.route.snapshot.paramMap.get('Price'));
  }
  get id(): AbstractControl | null {
    return this.InscriptionForm.get('id');
  }
  get name(): AbstractControl | null {
    return this.InscriptionForm.get('name');
  }
  get surname(): AbstractControl | null {
    return this.InscriptionForm.get('surname');
  }
  get course(): AbstractControl | null {
    return this.InscriptionForm.get('course');
  }
  get price(): AbstractControl | null {
    return this.InscriptionForm.get('price');
  }


  private buildForm() {
    this.InscriptionForm = this.builder.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      course: new FormControl('', [Validators.required, Validators.minLength(1)]),
      price: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    let Inscription = this.InscriptionService.getInscriptionById(Number(this.id?.value)).subscribe();
    if (Inscription) {
      this.InscriptionService.updateInscription({
        Id: Number(this.id?.value),
        Name: String(this.name?.value),
        Surname: String(this.surname?.value),
        Course: String(this.course?.value),
        Price: Number(this.price?.value)
      });
    } else {
      await this.InscriptionService.addInscription({
        Id: Number(this.id?.value),
        Name: String(this.name?.value),
        Surname: String(this.surname?.value),
        Course: String(this.course?.value),
        Price: Number(this.price?.value)
      });
    }

    this.router.navigate(['/Inscription']);
    this.InscriptionForm.reset();
  }

}

