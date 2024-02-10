import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'project';
  data:any = []


  constructor(public api: ApiService) { }

ngOnInit(){
  this.api.getData().subscribe(response => {
    this.data=response
  })
}
}
