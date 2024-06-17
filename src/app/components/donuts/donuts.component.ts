import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { DonutModel } from '../../models/donut';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private _donutsService:DonutsService){};
  donutList:DonutModel = {} as DonutModel;

   ngOnInit(){
     this.callAPI();
   }

  callAPI(){
    this._donutsService.getDonuts().subscribe((response:DonutModel)=>{
      this.donutList = response;
    })
  }
}
