import { Component, OnInit } from '@angular/core';
import { FAKE_DETAILS } from 'src/assets/mock/fake-details';

@Component({
  selector: 'app-fake-detail',
  templateUrl: './fake-detail.component.html',
  styleUrls: ['./fake-detail.component.scss']
})
export class FakeDetailComponent implements OnInit {

  constructor() { }

  public guide = FAKE_DETAILS[0];

  shareGuide(type){
    if(type === "facebook"){
      let w = 630;
      let h = 360;

      let left = screen.width/2 - 630/2;
      let top = screen.height/2 - 360/2;

      window.open(`
      http://www.facebook.com/sharer.php?u=https://www.guiacovid19.com.br/%23/home`,
      'Compartilhar no facebook', 'toolbar=no, location=no, directories=no, status=no, ' + 'menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+ ', height=' + h + ', top=' + top + ', left=' + left);
    } else {
      window.open(`https://wa.me/?text=Olha só que matéria legal que eu vi no portal do Guia COVID-19 sobre ${this.guide.title}: https://www.guiacovid19.com.br/%23/guia/${this.GUIDE_ID}`)
    }
  }

  ngOnInit(): void {}

}
