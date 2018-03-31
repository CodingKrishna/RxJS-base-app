import { Observable, Subject } from 'rxjs';

const subject = new Subject();
subject.subscribe(val => console.log('Subject a', val));
subject.subscribe(val => console.log('Subject B', val));

subject.next('hellow');
setTimeout(() => {
    subject.next('world')
}, 1000);
