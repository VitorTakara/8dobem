import { Component, OnInit } from '@angular/core';
import { GUIDES } from 'src/assets/mock/guides';
import { ASIDEITEMS } from 'src/assets/mock/aside';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public guides = GUIDES
  public asideItems = ASIDEITEMS

  ngOnInit(): void {
  }

}
