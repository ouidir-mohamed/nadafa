import { BehaviorSubject, delay, startWith, Subject } from 'rxjs';

const subject = new BehaviorSubject<string>("");
const loadingSubject =new Subject<boolean>();


export const messageService = {
    sendMessage: (message: string) => subject.next(message),
    clearMessages: () => subject.next(""),
    onMessage: () => subject.asObservable(),
    onLoading:()=> loadingSubject.asObservable()
};
 var count:number=0;

export async function callApi(){
    loadingSubject.next(true);
    console.log("before promise");
await new Promise(a=>setTimeout(a,1000));
console.log("after promise");

messageService.sendMessage("message "+count);

loadingSubject.next(false);
count++;
}