import { Component } from '@angular/core';
import { CSFameService } from '../../services/csfame.service';
import { CSPeopleModel } from '../../models/cspeople';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {
  constructor(private _csfameService:CSFameService){};
  peopleList:CSPeopleModel = {} as CSPeopleModel;

  ngOnInit(){
    this.callAPI();
  }

  callAPI(){
    this._csfameService.getPeople().subscribe((response:CSPeopleModel)=>{
      this.peopleList=response;
    })
  }

}
