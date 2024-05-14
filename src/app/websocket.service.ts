import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://192.168.184.59');
  }

  connect() {
    this.socket$.subscribe()
  }

  sendMessage(r: any) {
    console.log(r.toString())
    const json = {"armR": r.toString(), "armL": r.toString()}

    this.socket$.next(json);
  }

  getMessage() {
    return this.socket$;
  }
}
