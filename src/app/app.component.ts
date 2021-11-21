import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'subscribe';

  planForm  = new FormGroup({
    week : new FormControl('', [Validators.required])
  })
data : any = []
  checkbox: any;
constructor(private service:DataService){
  this.service.getDate().subscribe((res:any)=>{
    console.log(res)
    this.data = res.plans;
  })

 

} 
ngOnInit(): void{

}
}
