import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-requirements',
  templateUrl: './post-requirements.component.html',
  styleUrls: ['./post-requirements.component.scss']
})
export class PostRequirementsComponent implements OnInit {
  postReqForm: FormGroup;
  isSubmitted = false;
  errorMessage = "";
  categories: any = ['categorie1', 'categorie2', 'categorie3', 'categorie4']
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.postReqForm = this.formBuilder.group({
      location: ['', Validators.required],
      contact: ['', Validators.required],
      name: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.postReqForm.value);
    this.isSubmitted = true;
    if(this.postReqForm.invalid){
      return;
    }
    else {
      this.onSaveComplete();
      // this.carPoolService.createCarPool(this.carPoolForm.value).subscribe({
      //   next: () => this.onSaveComplete(),
      //   error: err => {
      //     this.errorMessage = err
      //     console.log("onSubmit >>>",this.errorMessage);
      //   }
      // });;
      
    }
  }

  onSaveComplete() {
    this.postReqForm.reset();
    console.log("sign up success");
    this.router.navigate(['/home']);
  }

}
