import { Component, OnInit } from '@angular/core';
import { Event } from './events.model'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

eventList: Event[];

  constructor() {
    this.loadEvenets();
   }

   loadEvenets() {
     this.eventList = [
       {id: 1, name: 'Test', description: 'table test', startDate:'02-04-2019', endDate:'24-04-2019', location:'Roma', visible: true},
       {id: 2, name: 'Test 2', description: 'table test', startDate:'02-04-2019', endDate:'24-04-2019', location:'Milano', visible: true},

     ]
   }

  ngOnInit() {
  }

}
