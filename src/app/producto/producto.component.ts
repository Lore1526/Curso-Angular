import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productForm = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    fantasiName: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required,Validators.minLength(0)]),
    description: new FormControl('', [Validators.minLength(10)])
  })

  constructor(private builder: FormBuilder) {
  }
  get productName():  AbstractControl | null 
  {
    return this.productForm.get('productName');
  }
  get fantasiName(): AbstractControl | null {
    return this.productForm.get('fantasiName');
  }
  get brand(): AbstractControl | null {
    return this.productForm.get('brand');
  }
  get price(): AbstractControl | null {
    return this.productForm.get('price');
  }
  get description(): AbstractControl | null {
    return this.productForm.get('description');
  }

  private buildForm() {
    this.productForm = this.builder.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      fantasiName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      brand: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.minLength(10)])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.productForm);
    this.productForm.reset();
  }

}

