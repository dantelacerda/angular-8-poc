import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];
	constructor(private apiService: ApiService) { }
	//Aqui consulta todos os produtos e joga na tela
	
	// ngOnInit() {
	// 	this.apiService.getProducts().subscribe((data: any[])=>{  
	// 		console.log(data);  
	// 		this.products = data;  
	// 	})  
	// }

	ngOnInit(){

		this.apiService.getProductsPaginated().subscribe((res: HttpResponse<any>)=>{  
			console.log(res);  
			this.products = res.body;  
		})  
	}

	public firstPage() {
		this.products = [];
		this.apiService.getProductsPaginatedToUrl(this.apiService.first).subscribe((res: HttpResponse<any>) => {
		  console.log(res);
		  this.products = res.body;
		})
	  }
	  public previousPage() {
	
		if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
		  this.products = [];
		  this.apiService.getProductsPaginatedToUrl(this.apiService.prev).subscribe((res: HttpResponse<any>) => {
			console.log(res);
			this.products = res.body;
		  })
		}
	
	  }
	  public nextPage() {
		if (this.apiService.next !== undefined && this.apiService.next !== '') {
		  this.products = [];
		  this.apiService.getProductsPaginatedToUrl(this.apiService.next).subscribe((res: HttpResponse<any>) => {
			console.log(res);
			this.products = res.body;
		  })
		}
	  }
	  public lastPage() {
		this.products = [];
		this.apiService.getProductsPaginatedToUrl(this.apiService.last).subscribe((res: HttpResponse<any>) => {
		  console.log(res);
		  this.products = res.body;
		})
	  }

}
