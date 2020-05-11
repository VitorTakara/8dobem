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

  ngOnInit(): void {
  }

}
