import { Observable } from 'rxjs';

/*const coldobsv = new Observable(observer => {

    setTimeout(() => {
      observer.next(1);
    }, 1000);
  
    setTimeout(() => {
      observer.next(2);
    }, 2000);
  
    setTimeout(() => {
      observer.next(3);
    }, 3000);
  
    setTimeout(() => {
      observer.next(4);
    }, 4000);
  
  });

  // Subscription A
setTimeout(() => {
    coldobsv.subscribe(value => console.log('Cold Subscription A ',value));
  }, 0);
  
  // Subscription B
  setTimeout(() => {
    coldobsv.subscribe(value => console.log('Cold Subscription B ', value));
  }, 2500);
*/
  const hotobsv = new Observable(observer => {

    setTimeout(() => {
      observer.next(1);
    }, 1000);
  
    setTimeout(() => {
      observer.next(2);
    }, 2000);
  
    setTimeout(() => {
      observer.next(3);
    }, 3000);
  
    setTimeout(() => {
      observer.next(4);
    }, 4000);
  
  }).publish();
  
  hotobsv.connect();
  
  // Subscription A
  setTimeout(() => {
    hotobsv.subscribe(value => console.log('Hot Subscription A ',value));
  }, 0);
  
  // Subscription B
  setTimeout(() => {
    hotobsv.subscribe(value => console.log(` Hot Subscription B  ${value}`));
  }, 2500);

