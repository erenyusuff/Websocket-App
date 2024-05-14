import { Component } from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import {WebSocketService} from "./websocket.service";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
const subject = webSocket('wss://192.168.184.59')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = this.fb.group( {
    arm: '',
  })

  constructor(private webSocketService: WebSocketService,private fb: FormBuilder) {
  }
  title = 'websocket';
  connect() {
    this.webSocketService.connect()
    console.log('baglandi')

  }

  sendMessageToWebSocket() {
    const r = this.form.value.arm
    // const l = this.form.value.armL
    this.webSocketService.sendMessage(r);
  }
}
