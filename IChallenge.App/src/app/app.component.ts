import { Component, ViewEncapsulation } from '@angular/core';
import { Challenge, ChallengeService } from './shared';

@Component({
  //moduleId: module.id,
  selector: 'ichallenge-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent 
{ 
  public challenges:Challenge[];

  /**
   *
   */
  constructor(private _service:ChallengeService) {
    this.challenges = [];
    this._service.get().subscribe((items:Challenge[])=>{
      console.log(items);
      this.challenges = items;
    },(error:any)=>{
      console.log(error);
    })
    
  }
}