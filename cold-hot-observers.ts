import { Observable } from 'rxjs';

const cold = Observable.create(observer =>{
    observer.next(Math.random())
})

cold.subscribe(a =>  {console.log(a)});
cold.subscribe(a =>  {console.log(a)});
