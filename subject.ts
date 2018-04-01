import { Observable, Subject } from 'rxjs';

const subject = new Subject();
subject.subscribe(val => console.log('Subject a', val));
subject.subscribe(val => console.log('Subject B', val));

subject.next('hellow');
setTimeout(() => {
    subject.next('world')
}, 1000);

// independent execution
var observable = Observable.create(function(source) {
    source.next(Math.random());
  });
  
  observable.subscribe(v => console.log('consumer A: ' + v));
  observable.subscribe(v => console.log('consumer B: ' + v));
  
  /* Prints DIFFERENT values for both consumers */
  // consumer A: 0.25707833297857885
  // consumer B: 0.8304769607422662

  var observable = Observable.create(function(source) {
    source.next(Math.random());
  });
  
  var subject1 = new Subject();
  
  subject1.subscribe(v => console.log('consumer A: ' + v));
  subject1.subscribe(v => console.log('consumer B: ' + v));
  
  observable.subscribe(subject1);
  
  /* Prints SAME values for both consumers */
  // consumer A: 0.8495447073368834
  // consumer B: 0.8495447073368834

