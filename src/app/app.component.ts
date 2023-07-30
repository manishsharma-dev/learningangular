import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newSubject = new Subject<number>();
  newBehaviourSubject = new BehaviorSubject<string>("");
  replaySubject = new ReplaySubject(5);
  subjectValue!: number;
  behaviourSubjectValue!: string;
  replaySubjectValue!: string;
  ngOnInit(): void {
    // this.assignNewValues();
    // this.subscribeToSubject();
    // this.subscribeToBehaviourSubject()
    this.handleReplaySubject();
  }

  subscribeToSubject() {
    this.newSubject.subscribe((value: number) => {
      console.log("subject Subscribed : " + value);
      this.subjectValue = value;
    });
  }

  setSubjectValue(value: number) {
    this.newSubject.next(value);
  }

  subscribeToBehaviourSubject() {
    this.newBehaviourSubject.subscribe((value: string) => {
      console.log("Behaviour subject Subscribed : " + value);
      this.behaviourSubjectValue = value;
    })
  }

  setBehaviourValue(value: string) {
    this.newBehaviourSubject.next(value);
  }

  setReplaySubject() {

  }

  assignNewValues() {
    this.setSubjectValue(Math.random() * 10);
    this.setBehaviourValue("Behave" + Math.random() * 10);
    this.kepSettingValues();
  }

  kepSettingValues() {
    for (var i = 0; i < 10; i++) {
      this.setSubjectValue((i * 10));
      this.setBehaviourValue("Behave" + (i * 10));
    }
  }

  handleReplaySubject() {
    for (var i = 0; i < 10; i++) {
      this.replaySubject.next("Replay" + (i * 10));
    }
    this.replaySubject.subscribe((replay) => console.log(replay));
  }
}
